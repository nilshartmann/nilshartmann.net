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
              Ich bin Nils Hartmann, freiberuflicher Softwareentwickler,
              -Architekt, Trainer und Coach aus Hamburg und habe Erfahrung in
              der Entwicklung von Client- und Serveranwendungen
              (JavaScript/TypeScript und Java). Ich biete{' '}
              <b>Trainings und Beratung</b> rund um die Themen{' '}
              <b>React/Redux</b>, <b>TypeScript</b>,{' '}
              <b>Entwicklung von Single-Page-Anwendungen</b> und <b>GraphQL</b>{' '}
              an. Hier findest Du meine{' '}
              <Link to="/dienstleistungen">Dienstleistungen</Link> und meine{' '}
              <Link to="/contact">Kontaktdaten</Link>.
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
              <a href="https://reactbuch.de">Weitere Informationen</a>
            </p>
          </section>
          <section style={{ clear: 'both' }} className="Clearfix">
            <p style={pStyle}>
              <b>Aktuelle Vorträge</b>:
            </p>
            <ul style={ulStyle}>
              <li>
                <a
                  href="https://jax.de/web-development-javascript/react-2019-alles-neu/"
                  target="_blank"
                >
                  React 2019 - alles neu?
                </a>{' '}
                (W-JAX München, 5. November 2019)
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
              <li>
                <a
                  href="https://www.meetup.com/de-DE/softwarearchitektur-hamburg/events/265875130/"
                  target="_blank"
                >
                  GraphQL: Teufelszeug oder Heilsbringer - Eine interaktive
                  Einführung
                </a>{' '}
                (Softwarearchitektur Meetup, Hamburg, 11. November 2019)
              </li>
              <li>
                <a
                  href="https://www.ittage.informatik-aktuell.de/programm/2019/moderne-apis-mit-graphql/"
                  target="_blank"
                >
                  Moderne APIs mit GraphQL
                </a>{' '}
                (IT Tage, Frankfurt, 10. Dezember 2019)
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
                  href="https://jax.de/software-architecture/workshop-graphql-fuer-java-eine-praktische-einfuehrung/"
                  target="_blank"
                >
                  GraphQL für Java – eine praktische Einführung
                </a>{' '}
                (W-JAX, München, 4. November 2019)
              </li>
              <li>
                <a href="https://jobs.eos-karriere.de/techlab" target="_blank">
                  Hands-on React Hackathon
                </a>{' '}
                (EOS Tech Lab, Hamburg, 15./16. November 2019)
              </li>
              <li>
                <a href="https://www.oose.de/seminar/web-apps/" target="_blank">
                  Single-Page-Anwendungen mit React, Redux und TypeScript
                  entwickeln
                </a>{' '}
                (OOSE, Hamburg, Januar 2020)
              </li>
              <li>
                <a
                  href="https://ctwebdev.de/programm.html?lectureId=MK33ARcAvSfEyfMiMvF3"
                  target="_blank"
                >
                  React - Eine praktische Einführung mit Hooks und TypeScript
                </a>{' '}
                (c't webdev, Köln, 4. Februar 2020)
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
