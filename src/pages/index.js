import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import About from '../components/About'
import PostList from '../components/PostList'

class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout>
        <SEO
          title="Nils Hartmann - Software-Entwickler aus Hamburg (Java/JavaScript)"
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
        <div className="Row">
          <div className="Center">
            <div className="Title">
              <Link to="/posts" title="Alle Beiträge anzeigen">
                Alle Beiträge anzeigen
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 4
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
