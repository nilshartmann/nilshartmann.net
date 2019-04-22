// ---------------------------------------------------------------------------
// --- Nils Hartmann | http://nilshartmann.net                             ---
// ---------------------------------------------------------------------------

import React from 'react'

export default function Contact() {
  const pStyle = {
    marginBottom: '8px',
  }

  const ulStyle = {
    marginTop: 0,
  }

  return (
    <div className="Row Clearfix">
      <header className="TitlePanel ">
        <h1 className="Title ">Kontakt</h1>

        <p>
          Wenn Du Fragen hast oder an meinen Dienstleistungen interessiert bist,
          melde dich gerne bei mir.{' '}
        </p>
      </header>

      <main className="Contact">
        <div>
          <p>Nils Hartmann</p>
          <p>Buckhorn 41b</p>
          <p>22359 Hamburg</p>
          <p>Tel: 0173 / 286 30 76</p>
        </div>
        <div>
          <p className="SocialMedia">
            <i className="fa fa-envelope fa-lg" />
            <a href="mailto:nils@nilshartmann.net">nils@nilshartmann.net</a>
          </p>
          <p className="SocialMedia">
            <i className="fa fa-twitter fa-lg" />
            <a href="https://twitter.com/nilshmann">Twitter</a>
          </p>
          <p className="SocialMedia">
            <i className="fa fa-xing fa-lg" />
            <a href="https://www.xing.com/profile/Nils_Hartmann2">Xing</a>
          </p>
          <p className="SocialMedia">
            <i className="fa fa-github fa-lg" />
            <a href="https://github.com/nilshmann">GitHub</a>
          </p>
        </div>
      </main>
    </div>
  )
}
