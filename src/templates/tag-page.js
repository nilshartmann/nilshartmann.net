import React from 'react'
import { Link, graphql } from 'gatsby'

import PostList from './../components/PostList'
import NavButton from './../components/NavButton'
import Layout from '../components/Layout'

class TagPage extends React.Component {
  render() {
    const { tag } = this.props.pageContext
    const posts = this.props.data.allMarkdownRemark.edges
    return (
      <Layout>
        <div>
          <div className="Row Narrow">
            Hier findest Du alle Artikel, die mit dem Tag{' '}
            <span className="TagName">{tag.tag}</span> versehen sind. <br />
            (Du kannst auch <Link to="/tags">alle Tags anzeigen</Link>)
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
      sort: { fields: frontmatter___date, order: DESC }
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
