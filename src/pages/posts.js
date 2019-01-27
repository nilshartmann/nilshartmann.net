import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import About from '../components/About'
import PostList from '../components/PostList'
import NavButton from '../components/NavButton'

class AllPostPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout>
        <SEO
          title="Alle Beiträge"
          keywords={[
            `react`,
            `typescript`,
            `javascript`,
            `java`,
            `spring boot`,
            `software development`,
          ]}
        />

        <PostList posts={posts} />

        <div className="Row Narrow">
          <div className="NavBar Center">
            <NavButton url="/" label="Home" />
          </div>
        </div>
      </Layout>
    )
  }
}

export default AllPostPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
