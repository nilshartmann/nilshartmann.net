// ---------------------------------------------------------------------------
// --- Nils Hartmann | http://nilshartmann.net                             ---
// ---------------------------------------------------------------------------

import React from 'react'

import { Link } from 'gatsby'

export default function About() {
  const imgStyle = {}

  const divStyle = {
    float: 'left',
  }

  const pStyle = {
    marginBottom: '8px',
  }

  const ulStyle = {
    marginTop: 0,
  }

  return (
    <div className="About">
      <article>
        <div className="Row Clearfix">
          <header>
            <div className="TitlePanel Title ">Willkommen!</div>
          </header>
          <section>
            <p style={pStyle}>
              <img className="ProfilePic" src="/uploads/nh.jpg" />
              Ich bin Nils Hartmann, freiberuflicher Softwareentwickler und
              -Architekt aus Hamburg und beschäftige mich mit <b>
                Java
              </b> und <b>JavaScript/TypeScript</b> (insbesondere{' '}
              <b>Spring Boot</b>, <b>GraphQL</b>, <b>React</b>). Hier findest Du
              meine <Link to="/dienstleistungen">Dienstleistungen</Link> und
              meine <Link to="/contact">Kontaktdaten</Link>.
            </p>
          </section>
          <section style={{ marginBottom: '2rem' }}>
            <p style={pStyle}>
              <b>Buch</b>:
            </p>
            <img
              style={{
                marginRight: '20px',
                width: '60px',
                float: 'left',
              }}
              src="/uploads/react-buch-titel.jpg"
            />
            <p>
              React - Die praktische Einführung
              <br />
              dpunkt-Verlag, 2016
              <br />
              <Link to="/posts/react-buch-erschienen">
                Weitere Informationen
              </Link>
            </p>
          </section>
          <section style={{ clear: 'both' }} className="Clearfix">
            <p style={pStyle}>
              <b>Aktuelle Vorträge</b>:
            </p>
            <ul style={ulStyle}>
              <li>
                <a
                  href="https://www.meetup.com/de-DE/RheinMainJS/events/260643716/"
                  target="_blank"
                >
                  Moderne React-Anwendungen mit Hooks und Suspense
                </a>{' '}
                (RheinMainJS, Mainz, 7. Mai 2019)
              </li>
              <li>
                <a
                  href="https://jax.de/serverside-enterprise-java/graphql-fuer-java-anwendungen/"
                  target="_blank"
                >
                  GraphQL für Java-Anwendungen
                </a>{' '}
                (Jax, Mainz, Mai 2019)
              </li>
              <li>
                <a
                  href="https://jax.de/web-development-javascript/moderne-frontend-architektur-mit-javascript/"
                  target="_blank"
                >
                  Moderne Frontend-Architektur mit JavaScript
                </a>{' '}
                (Mit Oliver Zeigermann, JAX, Mainz, Mai 2019)
              </li>
              <li>
                <a
                  href="https://www.md-devdays.de/Act?id=1000027"
                  target="_blank"
                >
                  Modernes React
                </a>{' '}
                (Magdeburger Developer Days, Mai 2019)
              </li>
              <li>
                <a
                  href="https://www.enterjs.de/single?id=7955&hooks%2C-concurrent-rendering%2C-suspense-api%3A-alles-neu-in-react"
                  target="_blank"
                >
                  {' '}
                  Hooks, Concurrent Rendering, Suspense API: Alles neu in React?
                </a>{' '}
                (EnterJS, Darmstadt, Juni 2019)
              </li>
              <li style={{ marginTop: '1rem' }}>
                <Link to="/posts/vergangene-talks/">Vergangene Vorträge</Link>
              </li>
            </ul>
          </section>
          <section>
            <p style={pStyle}>
              <b>Schulungen</b>:
            </p>
            <ul style={ulStyle}>
              <li>
                <a href="https://www.oose.de/seminar/web-apps/" target="_blank">
                  Single-Page-Anwendungen mit React, Redux und TypeScript
                  entwickeln
                </a>{' '}
                (OOSE, Hamburg, 29./30. August 2019)
              </li>
              <li>
                <a
                  href="https://www.enterjs.de/single?id=8565&fullstack-graphql-mit-apollo-und-react"
                  target="_blank"
                >
                  Fullstack GraphQL mit Apollo und React
                </a>{' '}
                (EnterJS, Darmstadt, 25. Juni 2019)
              </li>
              <li style={{ marginTop: '1rem' }}>
                <Link to="/react-workshops">
                  Individuelle In-House Workshops: Informationen und Anfrage
                </Link>
              </li>
            </ul>
          </section>
          <section>
            <p style={pStyle}>
              <b>Artikel</b>:
            </p>

            <ul style={ulStyle}>
              <li>
                <Link to="/posts/microfrontends/">
                  Frontend-Architektur mit JavaScript: Micro-Frontends als
                  Integration-Pattern
                </Link>
                (ObjektSpektrum, 2/2019)
              </li>
              <li>
                <Link to="/posts/react-in-enterprise-anwendungen/">
                  React in Enterprise Anwendungen
                </Link>{' '}
                (JavaMagazin, 1/2019)
              </li>
              <li>
                <Link to="/posts/graphql-mit-java-anwendungen/">
                  GraphQL mit JavaAnwendungen
                </Link>{' '}
                (heise developer, November 2018)
              </li>
              <li>
                <Link to="/posts/hilfe-ich-muss-javascript-programmieren">
                  Hilfe, ich muss JavaScript programmieren!
                </Link>{' '}
                (Java Aktuell, 5/2018)
              </li>
              <li style={{ marginTop: '1rem' }}>
                <Link to="/tags/Artikel">Artikel Übersicht</Link>
              </li>
            </ul>
          </section>
        </div>
      </article>
    </div>
  )
}
