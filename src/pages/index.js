import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import About from '../components/About'
import PostList from '../components/PostList'

class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout>
        <SEO
          title="All posts"
          keywords={[
            `react`,
            `typescript`,
            `javascript`,
            `java`,
            `spring boot`,
            `software development`,
          ]}
        />

        <About />
        <PostList posts={posts} />
      </Layout>
    )
  }
}

export default IndexPage

// {posts.map(({ node }) => {
//   const title = node.frontmatter.title || node.fields.slug
//   return (
//     <div key={node.fields.slug}>
//       <h3>
//         <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
//           {title}
//         </Link>
//       </h3>
//       <small>{node.frontmatter.date}</small>
//       <p dangerouslySetInnerHTML={{ __html: node.fields.summary }} />
//     </div>
//   )
// })}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
            summary
          }
          frontmatter {
            date(formatString: "DD.MM.YYYY")
            title
            image
            image_position
            image_expanded
            tags
          }
        }
      }
    }
  }
`
