// ---------------------------------------------------------------------------
// --- Nils Hartmann | http://nilshartmann.net                             ---
// ---------------------------------------------------------------------------

import React from 'react'

import Button from './Button'

function tagUrl(r) {
  console.log('WARN - implement tagUrl for ', r)
}

export default class FullPost extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imageExpanded: props.post.frontmatter.image_expanded,
    }

    this.toggleExpandedImage = this.toggleExpandedImage.bind(this)
  }

  toggleExpandedImage() {
    this.setState({ imageExpanded: !this.state.imageExpanded })
  }

  renderPostImage(post) {
    console.log('post - imageExpanded:', this.state.imageExpanded)

    const imagePosition = post.image_position || 'before_summary'
    if (!post.image || imagePosition === 'skip') {
      return null
    }

    if (imagePosition === 'left' || imagePosition === 'right') {
      const positionClassName =
        imagePosition.charAt(0).toUpperCase() + imagePosition.substring(1)
      return (
        <img
          className={`ImageFloating ${positionClassName}`}
          src={`${post.image}`}
        />
      )
    }

    if (this.state.imageExpanded) {
      return (
        <div className="ImageFullWidth-Full">
          <img
            className="ImageFullWidth-Full"
            src={`${post.image}`}
            onClick={this.toggleExpandedImage}
          />
        </div>
      )
    }

    const postImageStyle = { backgroundImage: `url(${post.image})` }
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
      <div className="Row FullPost">
        <p className="Date">{post.frontmatter.date}</p>

        <h1 className="Title">{post.frontmatter.title}</h1>

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
          {post.frontmatter.tags.map(tag => {
            return (
              <Button key={tag} linkTo={tagUrl(tag)}>
                {tag}
              </Button>
            )
          })}
        </div>
      </div>
    )
  }
}
