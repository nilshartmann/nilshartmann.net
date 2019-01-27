import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import NavButton from '../components/NavButton'
class TagsPage extends React.Component {
  render() {
    const tags = { ...this.props.data.site.tags }

    const levels = 3
    const range = Math.max(0.01, tags.max - tags.min) * 1.0001
    tags.tags = tags.tags.map(tag => ({
      ...tag,
      weight: 1 + Math.floor((levels * (tag.count - tags.min)) / range),
    }))

    return (
      <Layout>
        <div>
          <div className="Row Narrow">
            Find below a list of all tags used in posts on this blog:{' '}
          </div>

          <div className="Row Narrow TagCloud">
            {tags.tags.map(tag => {
              return (
                <Link
                  key={tag.slug}
                  to={tag.slug}
                  className={`Button Tag Weight${tag.weight}`}
                >
                  {tag.tag}
                </Link>
              )
            })}
          </div>
          <div className="Row Narrow Center">
            <NavButton url={NavButton.BACK} label="Back" />
            <NavButton url="/" label="Home" />
          </div>
        </div>
      </Layout>
    )
  }
}

export default TagsPage

export const pageQuery = graphql`
  query TagsPageQuery {
    site {
      tags {
        max
        min
        tags {
          tag
          count
          slug
        }
      }
    }
  }
`
