// ---------------------------------------------------------------------------
// --- Nils Hartmann | http://nilshartmann.net                             ---
// ---------------------------------------------------------------------------

import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import Contact from '../components/Contact'
import { Link } from '@reach/router'

export default function Angebot() {
  return (
    <Layout>
      <SEO
        keywords={[
          'JavaScript',
          'React',
          'Redux',
          'TypeScript',
          'Workshop',
          'Training',
          'React Workshop',
          'Contact',
          'Nils Hartmann',
        ]}
        title="Kontakt"
        description="Ich bin freiberuflicher Software-Entwickler, -Architekt und Trainer. Hier findest Du meine Kontaktdaten"
      />
      <div className="Row FullPost">
        <Contact
          title={
            <>
              Wenn Du Fragen hast oder an meinen{' '}
              <Link to="/dienstleistungen">Dienstleistungen</Link> interessiert
              bist, melde dich gerne bei mir.
            </>
          }
        />
      </div>
    </Layout>
  )
}
