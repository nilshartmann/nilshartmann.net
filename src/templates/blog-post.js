import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import NavButton from '../components/NavButton'
import FullPost from '../components/FullPost'

function fullPostUrl(postOrNull) {
  return postOrNull ? postOrNull.fields.slug : null
}

function postTitle(postOrNull) {
  return postOrNull ? postOrNull.frontmatter.title : null
}

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    // next.fields.slug next.frontmatter.title
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.summaryMarkdown}
        />
        <div>
          <div className="Row Small">
            <div className="NavBar">
              <NavButton
                url={fullPostUrl(previous)}
                title={`Vorheriger Artikel: ${postTitle(previous)}`}
                icon="angle-left"
              />
              <NavButton url="/" title="Home" icon="home" />
              <NavButton
                url={fullPostUrl(next)}
                title={`Nächster Artikel: ${postTitle(next)}`}
                icon="angle-right"
              />
            </div>
          </div>

          <FullPost post={post} />

          <div className="Row Small">
            <div className="NavBar">
              <NavButton
                url={fullPostUrl(previous)}
                title={`Vorheriger Artikel: ${postTitle(previous)}`}
                icon="angle-left"
              />
              <NavButton url="/" title="Home" icon="home" />
              <NavButton
                url={fullPostUrl(post.next)}
                title={`Nächster Artikel: ${postTitle(post.next)}`}
                icon="angle-right"
              />
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
        summary
        tags {
          tag
          slug
        }
      }
      html
      frontmatter {
        date(formatString: "DD.MM.YYYY")
        title
        image
        image_position
        image_expanded
      }
    }
  }
`
