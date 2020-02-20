// ---------------------------------------------------------------------------
// --- Nils Hartmann | http://nilshartmann.net                             ---
// ---------------------------------------------------------------------------

import React from 'react'

import { Link } from 'gatsby'

export default function About() {
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
              Ich bin Nils Hartmann, freiberuflicher Softwareentwickler,
              -Architekt, Trainer und Coach aus Hamburg und habe Erfahrung in
              der Entwicklung von Client- und Serveranwendungen
              (JavaScript/TypeScript und Java). Ich biete{' '}
              <b>Trainings und Beratung</b> rund um die Themen{' '}
              <b>React/Redux</b>, <b>TypeScript</b>,{' '}
              <b>Entwicklung von Single-Page-Anwendungen</b> und <b>GraphQL</b>{' '}
              an.
              <br />
              Hier findest Du mein{' '}
              <Link to="/react-workshops">Trainings- und Workshopangebot</Link>,
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
              src="/uploads/react-buch-v2.png"
            />
            <p>
              React - Grundlagen, fortgeschrittene Techniken und Praxistipps –
              mit TypeScript und Redux
              <br />
              2., überarbeitete und erweiterte Auflage, dpunkt-Verlag, 2019
              <br />
              <Link to="/posts/react-buch-zweite-auflage">
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
                  href="https://jax.de/web-development-javascript/javascript-moderne-react-pattern-in-der-praxis/"
                  target="_blank"
                >
                  Moderne React Pattern in der Praxis
                </a>{' '}
                (JAX, Mainz, 12. Mai 2020)
              </li>
              <li>
                <a
                  href="https://jax.de/software-architecture/moderne-frontend-architekturen-fuer-single-page-anwendungen/"
                  target="_blank"
                >
                  Moderne Frontend-Architekturen für Single-Page-Anwendungen
                </a>{' '}
                (JAX, Mainz, 13. Mai 2020)
              </li>
              <li>
                <a href="https://www.developer-week.de" target="_blank">
                  GraphQL für Java-Anwendungen
                </a>{' '}
                (Developer Week 2020, Nürnberg, 3. Juli 2020)
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
                  href="https://jax.de/web-development-javascript/einsteiger-workshop-single-page-anwendungen-mit-react-und-typescript/"
                  target="_blank"
                >
                  Einsteiger Workshop: Single-Page-Anwendungen mit React und
                  TypeScript
                </a>{' '}
                (JAX Konferenz, Mainz, 11. Mai 2020)
              </li>
              <li>
                <a href="https://www.oose.de/seminar/web-apps/" target="_blank">
                  Single-Page-Anwendungen mit React, Redux und TypeScript
                  entwickeln
                </a>{' '}
                (OOSE, Hamburg, September 2020)
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
                  href="https://www.heise.de/hintergrund/Ein-Jahr-React-Hooks-API-eine-Bilanz-4643554.html"
                  target="_blank"
                >
                  Ein Jahr React Hooks-API – eine Bilanz
                </a>{' '}
                (heise developer, Januar 2020)
              </li>
              <li>
                <a
                  href="https://webreader.javaspektrum.de/de/profiles/4967c6d5eae1-javaspektrum/editions/javaspektrum-06-2019"
                  target="_blank"
                >
                  GraphQL entschlüsselt - Konzepte der Abfragesprache am
                  Beispiel einer Java-Anwendung
                </a>{' '}
                (Java Spektrum 6/2019, November 2020)
              </li>
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
