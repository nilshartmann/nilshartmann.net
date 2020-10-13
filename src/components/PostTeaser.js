// ---------------------------------------------------------------------------
// --- Nils Hartmann | http://nilshartmann.net                             ---
// ---------------------------------------------------------------------------
import React from 'react'
import { Link, withPrefix } from 'gatsby'
import {} from 'gatsby'

export default function PostTeaser({ post }) {
  const image = post.frontmatter.image ? (
    <img
      className="Image"
      src={withPrefix(post.frontmatter.image)}
      alt={`Teaser-Bild ${post.frontmatter.title}`}
    />
  ) : (
    false
  )
  const postUrl = post.fields.slug

  return (
    <div className="Row PostTeaser Selectable">
      <Link className="PostTeaser" to={postUrl}>
        <header>
          <div className="TitlePanel Clearfix">
            {image}
            {post.frontmatter.date}
            <h1 className="Title">{post.frontmatter.title}</h1>
          </div>
        </header>
        <div>
          <span dangerouslySetInnerHTML={{ __html: post.fields.summary }} />
          &nbsp;
          <span className="ReadMore">Mehr...</span>
        </div>
      </Link>
    </div>
  )
}
