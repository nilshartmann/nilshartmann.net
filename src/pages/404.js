import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/XLayout'
import SEO from '../components/seo'

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="404: Seite nicht gefunden" />
        <h1>Nicht gefunden</h1>
        <p>Die Seite, die Du aufgerufen hast, ist leider nicht vorhanden 😢.</p>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
