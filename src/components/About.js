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
                  href="https://jax.de/web-development-javascript/javascript-moderne-react-pattern-in-der-praxis/"
                  target="_blank"
                >
                  Moderne React Pattern in der Praxis
                </a>{' '}
                (JAX, <b className="Online">Online</b>, 8. September 2020)
              </li>
              <li>
                <a
                  href="https://jax.de/software-architecture/moderne-frontend-architekturen-fuer-single-page-anwendungen/"
                  target="_blank"
                >
                  Moderne Frontend-Architekturen für Single-Page-Anwendungen
                </a>{' '}
                (JAX, <b className="Online">Online</b>, 9. September 2020)
              </li>

              <li>
                <a href="https://cyberjug.de/vortrag/graphql/" target="_blank">
                  GraphQL für Java-Anwendungen
                </a>{' '}
                (CyberJUG, <b className="Online">Online</b>, 21. September 2020)
              </li>

              <li>
                <a
                  href="https://enterjs.de/lecture.php?id=11214&source="
                  target="_blank"
                >
                  Fortgeschrittene React Patterns
                </a>{' '}
                (EnterJS, <b className="Online">Online</b>, 29. September 2020)
              </li>

              <li>
                <a
                  href="https://www.web-developer-conference.de/programm-2020/#/talk/advanced-react-patterns"
                  target="_blank"
                >
                  Advanced React Patterns
                </a>{' '}
                (Web Developer Conference, <b className="Online">Online</b>, 14.
                Oktober 2020)
              </li>
              <li>
                <a href="https://www.developer-week.de" target="_blank">
                  GraphQL für Java-Anwendungen
                </a>{' '}
                (Developer Week 2020, Nürnberg, 5. November 2020)
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
                  href="https://api-summit.de/api/apis-mit-graphql-teufelszeug-oder-heilsbringer-eine-einfuehrung/"
                  target="_blank"
                >
                  APIs mit GraphQL: Teufelszeug oder Heilsbringer – Eine
                  Einführung
                </a>{' '}
                (API Summit, <b className="Online">Online</b>, November 2020)
              </li>
              <li>
                <a href="https://www.oose.de/seminar/web-apps/" target="_blank">
                  Single-Page-Anwendungen mit React und TypeScript
                </a>{' '}
                (OOSE, <b className="Online">Online</b>, 21.-29. Januar 2021)
              </li>
              {/* <li>
                <a
                  href="https://jax.de/web-development-javascript/einsteiger-workshop-single-page-anwendungen-mit-react-und-typescript/"
                  target="_blank"
                >
                  Einsteiger Workshop: Single-Page-Anwendungen mit React und
                  TypeScript
                </a>{' '}
                (JAX Konferenz, Mainz bzw. <b className="Online">Online</b>, 7.
                September 2020)
              </li> */}
              {/* <li>
                <a
                  href="https://www.web-developer-conference.de/programm-2020/#/talk/ein-praktischer-einstieg-in-react-und-typescript"
                  target="_blank"
                >
                  Ein praktischer Einstieg in React und TypeScript
                </a>{' '}
                (Web Developer Conference, <b className="Online">Online</b>, 12.
                Oktober 2020)
              </li> */}

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
                  href="https://www.linux-magazin.de/ausgaben/2020/07/graphql-2/"
                  target="_blank"
                >
                  GraphQL: Klienten am Infopoint
                </a>{' '}
                (Linux Magazin 07/2020)
              </li>

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
