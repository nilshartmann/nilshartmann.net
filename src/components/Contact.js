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
    <div>
      <div className="Row Clearfix">
        <div className="TitlePanel Title ">Kontakt</div>

        <p style={pStyle}>
          Nils Hartmann
          <br />
          Buckhorn 41b
          <br />
          22359 Hamburg
        </p>
        <p style={pStyle}>
          Tel: 0173 / 286 30 76
          <br />
          E-Mail: nils@nilshartmann.net
        </p>
      </div>
    </div>
  )
}
