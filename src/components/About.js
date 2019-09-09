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
                  href="https://www.meetup.com/de-DE/Hamburg-React-js-Meetup/events/264375945/"
                  target="_blank"
                >
                  React Hooks, one year later - A (critical) review
                </a>{' '}
                (React Meetup, Hamburg, 8. Oktober 2019)
              </li>
              <li>
                <a
                  href="https://www.codetalks.de/program#talk-701?event=5"
                  target="_blank"
                >
                  State of the Art React 2019
                </a>{' '}
                (Code Talks, Hamburg, 24./25. Oktober 2019)
              </li>

              <li>
                <a
                  href="https://www.oose.de/abendvortrag/keine-angst-vor-der-single-page-anwendung/"
                  target="_blank"
                >
                  Keine Angst vor der Single-Page-Anwendung!
                </a>{' '}
                (OOSE Abendvortrag, Hamburg, 28. Oktober 2019)
              </li>
              <li>
                <a
                  href="https://jax.de/web-development-javascript/mit-welchem-framework-soll-ich-meine-single-page-app-bauen/"
                  target="_blank"
                >
                  Mit welchem Framework soll ich meine Single-Page-App bauen?
                </a>{' '}
                (Mit Oliver Zeigermann, W-JAX, München, November 2019)
              </li>
              <li style={{ marginTop: '1rem' }}>
                <Link to="/posts/vergangene-talks/">Vergangene Vorträge</Link>
              </li>
            </ul>
          </section>
          <section>
            <p style={pStyle}>
              <b>Schulungen und Workshops</b>:
            </p>
            <ul style={ulStyle}>
              <li>
                <a
                  href="https://www.web-developer-conference.de/programm/#/talk/einfuhrung-in-react-und-redux"
                  target="_blank"
                >
                  Einführung in React und Redux
                </a>{' '}
                (Web Developer Conference, Hamburg, 16. Oktober 2019)
              </li>
              <li>
                <a
                  href="https://jax.de/software-architecture/workshop-graphql-fuer-java-eine-praktische-einfuehrung/"
                  target="_blank"
                >
                  GraphQL für Java – eine praktische Einführung
                </a>{' '}
                (W-JAX, München, 4. November 2019)
              </li>
              <li>
                <a href="https://www.oose.de/seminar/web-apps/" target="_blank">
                  Single-Page-Anwendungen mit React, Redux und TypeScript
                  entwickeln
                </a>{' '}
                (OOSE, Hamburg, Januar 2020)
              </li>
              <li style={{ marginTop: '1rem' }}>
                <Link to="/react-workshops">
                  Individuelle In-House Trainings, Workshops und Coaching:
                  Informationen und Anfrage
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
                <a
                  href="https://www.heise.de/select/ix/2019/6/1909808311106276205?wt_mc=rss.ix.beitrag.atom"
                  target="_blank"
                >
                  Gezielte Auswahl - Typsichere GraphQL-APIs mit Java und React
                </a>{' '}
                (iX, 6/2019)
              </li>
              <li>
                <Link to="/posts/microfrontends/">
                  Frontend-Architektur mit JavaScript: Micro-Frontends als
                  Integration-Pattern
                </Link>{' '}
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
                  GraphQL mit Java Anwendungen
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
