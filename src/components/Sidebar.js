import React from 'react'
import { Link, withPrefix } from 'gatsby'

export default function Sidebar() {
  return (
    <>
      <section className="Section">
        <h1 className="Title">Bücher</h1>
        <div className="Item">
          <a className="ReadMore" href="https://reactbuch.de">
            <img src={withPrefix('/uploads/react-buch-v2.png')} />
            React - Grundlagen, fortgeschrittene Techniken und Praxistipps
            <br />
            (2., überarbeitete und erweiterte Auflage, dpunkt-Verlag, Dez. 2019)
          </a>
        </div>
        <div className="Item">
          <a className="ReadMore" href="/posts/react-buch-erschienen">
            <img src={withPrefix('/uploads/react-buch-titel.jpg')} />
            React - Die praktische Einf&uuml; hrung in React, React Router und
            Redux (Juni 2016){' '}
          </a>
        </div>
        <div className="Item">
          <Link className="ReadMore" to="/posts/das-osgi-buch">
            <img
              src={withPrefix('/uploads/die_osgi_service_platform_01.jpg')}
            />
            Die OSGi Service Platform (April 2008){' '}
          </Link>
        </div>
      </section>
      <section className="Section">
        <h1 className="Title">Workshops</h1>

        <div className="Item">
          <a
            className="Abstract"
            href="https://www.oose.de/seminar/web-apps/"
            target="_blank"
          >
            Single-Page-Anwendungen mit React, Redux und TypeScript entwickeln
          </a>

          <p className="Location">
            OOSE, Hamburg,
            <br />
            27./28. Januar 2020
          </p>
        </div>

        <div className="Item">
          <a
            className="Abstract"
            href="https://ctwebdev.de/programm.html?lectureId=MK33ARcAvSfEyfMiMvF3"
            target="_blank"
          >
            React - Eine praktische Einführung mit Hooks und TypeScript
          </a>

          <p className="Location">
            ct webdev, Köln,
            <br />
            4. Februar 2020
          </p>
        </div>

        <div className="Item">
          <Link to="/react-workshops" style={{ textDecoration: 'none' }}>
            <p className="Abstract">
              Interne Workshops und Coaching u.a. zu React, TypeScript, GraphQL
            </p>
          </Link>
          <Link to="/react-workshops" style={{ textDecoration: 'none' }}>
            <p className="Location">
              <b>Auf Anfrage, hier weitere Informationen</b>
            </p>
          </Link>
        </div>
      </section>
      <section className="Section">
        <h1 className="Title">Talks</h1>
        <div className="Item">
          <p>
            <b>OOSE Abendveranstaltung, Hamburg, 20. Januar 2020</b>
          </p>
          <p style={{ marginBottom: '0.5em' }}>
            <a
              className="ReadMore"
              href="https://www.oose.de/abendvortrag/moderne-react-patterns/"
              target="_blank"
            >
              Moderne React Patterns
            </a>
          </p>
        </div>
        <div className="Item">
          <img
            src={withPrefix('/uploads/1498424152641_nils-im-workshop.jpeg')}
          />
          <p>
            <b>Vergangene Talks</b>
          </p>
          <a className="ReadMore" href="/posts/vergangene-talks">
            Übersicht über vergangene Talks
          </a>
        </div>
      </section>
      <section className="Section">
        <Link className="ReadMore" to="/dienstleistungen">
          <h1 className="Title">Leistungen</h1>
        </Link>
        <span className="ReadMore">
          Ich unterstütze euch gerne in eurem Projekt, sei es durch gemeinsame
          Code-Reviews, Architektur-Diskussionen oder beim programmieren. Rund
          um die Themen React, TypeScript und GraphQL biete ich auch
          individuelle{' '}
          <b>
            <Link to="/react-workshops">Trainings und Workshops</Link>
          </b>{' '}
          an.
          <p>
            <Link className="ReadMore" to="/dienstleistungen">
              <i>
                <b>Mehr...</b>
              </i>
            </Link>
          </p>
        </span>
      </section>
      <section className="Section">
        <h1 className="Title">Kontakt</h1>
        <div className="Item">
          <p className="ReadMore">Nils Hartmann</p>
          <p className="ReadMore">Buckhorn 41b</p>
          <p className="ReadMore">22359 Hamburg</p>
          <p className="ReadMore" style={{ marginTop: '5px' }}>
            Tel: 0173 / 286 30 76
          </p>
          <p className="ReadMore" style={{ marginTop: '5px' }}>
            E-Mail:{' '}
            <a href="mailto:nils@nilshartmann.net">nils@nilshartmann.net</a>
          </p>
          <p className="ReadMore" style={{ marginTop: '5px' }}>
            <a href="https://twitter.com/nilshmann">Twitter</a>
          </p>
          <p className="ReadMore" style={{ marginTop: '5px' }}>
            <a href="https://www.xing.com/profile/Nils_Hartmann2">Xing</a>
          </p>
          <p className="ReadMore" style={{ marginTop: '5px' }}>
            <a href="https://github.com/nilshmann">GitHub</a>
          </p>
        </div>
      </section>
    </>
  )
}
