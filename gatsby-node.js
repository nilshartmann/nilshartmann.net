const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const {
  GraphQLString,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLList,
} = require('gatsby/graphql')
const remark = require('remark')
const remarkHTML = require('remark-html')

const tags = []

function addTag(newTag) {
  const existingTag = tags.find(t => t.tag === newTag.tag)
  if (!existingTag) {
    tags.push({ ...newTag, count: 1 })
  } else {
    existingTag.count = existingTag.count + 1
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const tagPage = path.resolve(`./src/templates/tag-page.js`)

  return graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
                tags {
                  tag
                  slug
                }
              }
              frontmatter {
                title
                tags
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allMarkdownRemark.edges

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: post.node.fields.slug,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })

      if (post.node.fields.tags) {
        post.node.fields.tags.forEach(addTag)
      }
    })

    console.log('ALL TAGS', tags)

    tags.forEach(tag => {
      createPage({
        path: tag.slug,
        component: tagPage,
        context: {
          slug: tag.slug,
          tag,
        },
      })
    })
  })
}

exports.setFieldsOnGraphQLNodeType = ({ type }) => {
  if (type.name === 'Site' && tags.length > 0) {
    const TagType = new GraphQLObjectType({
      name: 'Tag',
      fields: () => ({
        tag: { type: GraphQLString },
        slug: { type: GraphQLString },
        count: { type: GraphQLInt },
      }),
    })

    const max = tags.reduce(
      (accumulator, currentValue) =>
        currentValue.count >= accumulator ? currentValue.count : accumulator,
      0
    )

    const min = tags.reduce(
      (accumulator, currentValue) =>
        currentValue.count <= accumulator ? currentValue.count : accumulator,
      1000000
    )

    const TagsType = new GraphQLObjectType({
      name: 'Tags',
      fields: () => ({
        tags: { type: new GraphQLList(TagType), resolve: () => tags },
        max: {
          type: GraphQLInt,
          resolve: () => max,
        },
        min: {
          type: GraphQLInt,
          resolve: () => min,
        },
      }),
    })

    return {
      tags: {
        type: TagsType,
        resolve: () => ({}),
      },
    }
  }
  return {}
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })

    createNodeField({
      name: `tags`,
      node,
      value: node.frontmatter.tags.map(tag => ({
        tag,
        slug: `/tags/${tag}`,
      })),
    })

    // https://github.com/gatsbyjs/gatsby/issues/5021#issuecomment-418745928
    const summaryMarkdown = node.frontmatter.summaryMarkdown
    const summary = remark()
      .use(remarkHTML)
      .processSync(summaryMarkdown)
      .toString()

    createNodeField({
      name: 'summary',
      node,
      value: summary,
    })
  }
}
