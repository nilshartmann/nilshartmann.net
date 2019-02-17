// ---------------------------------------------------------------------------
// --- Nils Hartmann | http://nilshartmann.net                             ---
// ---------------------------------------------------------------------------
import React from 'react'
import { Link, withPrefix, navigate } from 'gatsby'
import {} from 'gatsby'

export default function PostTeaser({ post }) {
  const image = post.frontmatter.image ? (
    <img className="Image" src={withPrefix(post.frontmatter.image)} />
  ) : (
    false
  )
  const postUrl = post.fields.slug

  return (
    <article
      onClick={() => navigate(postUrl)}
      className="Row PostTeaser Selectable"
    >
      <header>
        <div className="TitlePanel Clearfix">
          {image}
          {post.frontmatter.date}
          <h1 className="Title">{post.frontmatter.title}</h1>
        </div>
      </header>
      <p>
        <span dangerouslySetInnerHTML={{ __html: post.fields.summary }} />
        &nbsp;
        <Link className="ReadMore" to={postUrl}>
          Mehr...
        </Link>
      </p>
    </article>
  )
}
