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
              <img
                className="ProfilePic"
                src="/uploads/nh.jpg"
                alt="Nils Hartmann"
              />
              Ich bin Nils Hartmann, freiberuflicher Softwareentwickler,
              -Architekt, Trainer und Coach aus Hamburg und habe Erfahrung in
              der Entwicklung von Client- und Serveranwendungen
              (JavaScript/TypeScript und Java). Ich biete{' '}
              <b>Trainings und Beratung</b> rund um die Themen{' '}
              <b>React/Redux</b>, <b>TypeScript</b>,{' '}
              <b>Entwicklung von Single-Page-Anwendungen</b> und <b>GraphQL</b>{' '}
              an (auch online bzw. remote).
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
              src="/uploads/react-buch-v2-ganz-klein.png"
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

          <section
            style={{
              clear: 'both',
              padding: '0.2rem 0.5rem',
            }}
            className="Clearfix Online"
          >
            <p style={{ ...pStyle }}>
              <b>
                <a href="/react-workshops">
                  +++ Online bzw. remote Angebote +++
                </a>
              </b>
              :
            </p>
            <p>
              Da auf Grund der aktuellen Situation und der vielen
              Einschränkungen zum Schutz der Gesundheit nahezu alle
              Vor-Ort-Veranstaltung unmöglich sind, biete ich meine
              Dienstleistungen <b>auch online bzw. remote</b> an. Wenn ihr also
              auch jetzt{' '}
              <a href="/react-workshops">
                Beratungen, Workshops oder Schulungen
              </a>{' '}
              benötigt, sprecht mich gerne an, dann klären wir die
              organisatorischen und technischen Voraussetzungen - dabei gehe ich
              natürlich flexibel auf Eure Anforderungen ein. In jedem Fall
              wünsche ich Euch, dass ihr gut und unbeschadet durch diese Zeit
              kommt!
            </p>
          </section>
          <section style={{ marginTop: '1rem' }}>
            <p style={pStyle}>
              <b>Kommende Vorträge</b>:
            </p>
            <ul style={ulStyle}>
              <li>
                <a
                  href="https://programm.javaland.eu/2021/#/scheduledEvent/606327"
                  target="_blank"
                  rel="noopener"
                >
                  GraphQL: Außenseiter oder Mainstream?
                </a>{' '}
                (JavaLand, <b className="Online">Online</b>, 17. März 2021)
              </li>
              <li>
                <a
                  href="https://programm.javaland.eu/2021/#/scheduledEvent/606464"
                  target="_blank"
                  rel="noopener"
                >
                  TypeScript: Grundlagen und fortgeschrittene Techniken
                </a>{' '}
                (JavaLand, <b className="Online">Online</b>, 17. März 2021)
              </li>
              <li>
                <a
                  href="https://www.web-developer-conference.de/programm-2/#/talk/react-server-components"
                  target="_blank"
                  rel="noopener"
                >
                  React Server Components
                </a>{' '}
                (Web Developer Conference, <b className="Online">Online</b>, 28.
                April 2021)
              </li>
              <li>
                <a
                  href="https://jax.de/web-development-javascript/einsteigen-und-loslegen-eine-praktische-einfuehrung-in-react/"
                  target="_blank"
                  rel="noopener"
                >
                  Einsteigen und loslegen – eine praktische Einführung in React
                </a>{' '}
                (JAX, Mainz <b className="Online">Online</b>, 6. Mai 2021)
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
                  href="https://api.bettercode.eu/lecture_compact1.php?id=12807&source=0"
                  target="_blank"
                  rel="noopener"
                >
                  Workshop: GraphQL für Java-Anwendungen
                </a>{' '}
                (BetterCode API 2021, <b className="Online">Online</b>, 24. März
                2021)
              </li>
              <li>
                <a
                  href="https://apiconference.net/api-development/graphql-apis-a-practical-introduction-with-java/"
                  target="_blank"
                  rel="noopener"
                >
                  GraphQL APIs – A practical introduction with Java
                </a>{' '}
                (API Conference Den Haag, <b className="Online">Online</b>, 12.
                April 2021)
              </li>
              <li>
                <a
                  href="https://www.web-developer-conference.de/programm-2/#/talk/modernes-statemanagement-fur-react"
                  target="_blank"
                  rel="noopener"
                >
                  Modernes Statemanagement für React (DevSession)
                </a>{' '}
                (Web Developer Conference, <b className="Online">Online</b>, 28.
                April 2021)
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
                  href="https://www.heise.de/ratgeber/The-Art-of-State-Zustandsmanagement-in-React-Anwendung-Teil-2-4990188.html"
                  target="_blank"
                  rel="noopener"
                >
                  The Art of State: Zustandsmanagement in React-Anwendungen,
                  Teil 2
                </a>{' '}
                (heise developer, 18.12.2020)
              </li>
              <li>
                <a
                  href="https://www.heise.de/ratgeber/The-Art-of-State-Zustandsmanagement-in-React-Anwendungen-4934595.html"
                  target="_blank"
                  rel="noopener"
                >
                  The Art of State: Zustandsmanagement in React-Anwendungen,
                  Teil 1
                </a>{' '}
                (heise developer, 30.10.2020)
              </li>
              <li>
                <a
                  href="https://www.linux-magazin.de/ausgaben/2020/07/graphql-2/"
                  target="_blank"
                  rel="noopener"
                >
                  GraphQL: Klienten am Infopoint
                </a>{' '}
                (Linux Magazin 07/2020)
              </li>

              <li>
                <a
                  href="https://www.heise.de/hintergrund/Ein-Jahr-React-Hooks-API-eine-Bilanz-4643554.html"
                  target="_blank"
                  rel="noopener"
                >
                  Ein Jahr React Hooks-API – eine Bilanz
                </a>{' '}
                (heise developer, Januar 2020)
              </li>
              <li>
                <a
                  href="https://webreader.javaspektrum.de/de/profiles/4967c6d5eae1-javaspektrum/editions/javaspektrum-06-2019"
                  target="_blank"
                  rel="noopener"
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
                  rel="noopener"
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
