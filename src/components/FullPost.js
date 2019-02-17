// ---------------------------------------------------------------------------
// --- Nils Hartmann | http://nilshartmann.net                             ---
// ---------------------------------------------------------------------------

import React from 'react'

import Button from './Button'
import { withPrefix } from 'gatsby'

export default class FullPost extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imageExpanded: props.post.frontmatter.image_expanded,
    }

    this.toggleExpandedImage = this.toggleExpandedImage.bind(this)
  }

  toggleExpandedImage() {
    //  this.setState({ imageExpanded: !this.state.imageExpanded })
  }

  renderPostImage(post) {
    const { image_position = 'before_summary', image } = post.frontmatter

    if (!image || image_position === 'skip') {
      return null
    }

    if (image_position === 'left' || image_position === 'right') {
      const positionClassName =
        image_position.charAt(0).toUpperCase() + image_position.substring(1)
      return (
        <img
          className={`ImageFloating ${positionClassName}`}
          src={`${withPrefix(image)}`}
        />
      )
    }

    const imgUrl = withPrefix(image)
    if (this.state.imageExpanded) {
      return (
        <div className="ImageFullWidth-Full">
          <img
            className="ImageFullWidth-Full"
            src={`${imgUrl}`}
            onClick={this.toggleExpandedImage}
          />
        </div>
      )
    }

    const postImageStyle = { backgroundImage: `url(${imgUrl})` }
    return (
      <div
        className="ImageFullWidth"
        style={postImageStyle}
        onClick={this.toggleExpandedImage}
      />
    )
  }

  render() {
    const { post } = this.props

    return (
      <article className="Row FullPost">
        <header>
          <p className="Date">{post.frontmatter.date}</p>
          <h1 className="Title">{post.frontmatter.title}</h1>
        </header>
        <div>
          {this.renderPostImage(post)}
          <div
            className="Summary"
            dangerouslySetInnerHTML={{ __html: post.fields.summary }}
          />
          <div
            className="Content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
        <div className="Tags">
          {post.fields.tags.map(tag => {
            return (
              <Button key={tag.slug} linkTo={tag.slug}>
                {tag.tag}
              </Button>
            )
          })}
        </div>
      </article>
    )
  }
}
