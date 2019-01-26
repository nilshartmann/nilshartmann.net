import React from 'react'
import { Link, graphql } from 'gatsby'

import PostList from './../components/PostList'
import NavButton from './../components/NavButton'
import Layout from '../components/Layout'

class TagPage extends React.Component {
  render() {
    console.log('props', this.props)
    const { tag } = this.props.pageContext
    const posts = this.props.data.allMarkdownRemark.edges
    return (
      <Layout>
        <div>
          <div className="Row Narrow">
            Find below a list of all posts tagged with{' '}
            <span className="TagName">{tag.tag}</span> (or see a list of{' '}
            <Link to="/tags">all tags</Link>)
            <div className="Right">
              <NavButton url={NavButton.BACK} icon="close" scale="lg" />
            </div>
          </div>
          <PostList posts={posts} />
        </div>
      </Layout>
    )
  }
}

export default TagPage

export const pageQuery = graphql`
  query TagPageQuery($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fields: { tags: { elemMatch: { slug: { eq: $slug } } } } }
    ) {
      edges {
        node {
          html
          excerpt
          fields {
            slug
            summary
            tags {
              tag
              slug
            }
          }
          frontmatter {
            date(formatString: "DD.MM.YYYY")
            title
            image
            image_position
            image_expanded
          }
        }
      }
    }
  }
`
