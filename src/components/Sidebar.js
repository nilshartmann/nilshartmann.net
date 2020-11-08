import React from 'react'
import { Link, withPrefix } from 'gatsby'

export default function Sidebar() {
  return (
    <>
      <section className="Section">
        <h1 className="Title">Bücher</h1>
        <div className="Item">
          <a className="ReadMore" href="/posts/react-buch-zweite-auflage">
            <img
              src={withPrefix('/uploads/react-buch-v2-ganz-klein.png')}
              alt="Cover React Buch"
            />
            React - Grundlagen, fortgeschrittene Techniken und Praxistipps
            <br />
            (2., überarbeitete und erweiterte Auflage, dpunkt-Verlag, Dez. 2019)
          </a>
        </div>

        <div className="Item">
          <Link className="ReadMore" to="/posts/das-osgi-buch">
            <img
              src={withPrefix('/uploads/die_osgi_service_platform_01.jpg')}
              alt="Cover OSGi Buch"
            />
            Die OSGi Service Platform (April 2008){' '}
          </Link>
        </div>
      </section>
      <section className="Section">
        <h1 className="Title">Workshops</h1>
        <div className="Item">
          <Link to="/react-workshops" style={{ textDecoration: 'none' }}>
            <p className="Abstract">
              Interne Workshops und Coaching u.a. zu React, TypeScript, GraphQL
              (auch online bzw. remote!)
            </p>
          </Link>
          <Link to="/react-workshops" style={{ textDecoration: 'none' }}>
            <p className="Location">
              <b>Auf Anfrage, hier weitere Informationen</b>
            </p>
          </Link>
        </div>

        <div className="Item">
          <a
            className="Abstract"
            href="https://api-summit.de/api/apis-mit-graphql-teufelszeug-oder-heilsbringer-eine-einfuehrung/"
            target="_blank"
            rel="noopener"
          >
            APIs mit GraphQL: Teufelszeug oder Heilsbringer – Eine Einführung
          </a>

          <p className="Location">
            API Summit, <b className="Online">Online</b>,
            <br />
            November 2020
          </p>
        </div>

        <div className="Item">
          <a
            className="Abstract"
            href="https://www.oose.de/seminar/web-apps/"
            target="_blank"
            rel="noopener"
          >
            Single-Page-Anwendungen mit React und TypeScript
          </a>

          <p className="Location">
            OOSE, <b className="Online">Online</b>,
            <br />
            27.-29. Januar 2021
          </p>
        </div>
      </section>
      <section className="Section">
        <h1 className="Title">Talks</h1>
        {/*
        <div className="Item">
          <p>
            <b>
              EnterJS, <b className="Online">Online</b>, 29. September 2020
            </b>
          </p>
          <p style={{ marginBottom: '0.5em' }}>
            <a
              className="ReadMore"
              href="https://enterjs.de/lecture.php?id=11214&source="
              target="_blank"
              rel="noopener"
            >
              Fortgeschrittene React Patterns
            </a>
          </p>
        </div> */}

        {/* <div className="Item">
          <p>
            <b>Developer Week, Nürnberg, November 2020</b>
          </p>
          <p style={{ marginBottom: '0.5em' }}>
            <a
              className="ReadMore"
              href="https://www.developer-week.de"
              target="_blank"
              rel="noopener"
            >
              GraphQL für Java-Anwendungen
            </a>
          </p>
        </div> */}
        <div className="Item">
          <img
            alt="Nils im Workshop"
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
            <a href="https://twitter.com/nilshartmann">Twitter</a>
          </p>
          <p className="ReadMore" style={{ marginTop: '5px' }}>
            <a href="https://www.xing.com/profile/Nils_Hartmann2">Xing</a>
          </p>
          <p className="ReadMore" style={{ marginTop: '5px' }}>
            <a href="https://github.com/nilshartmann">GitHub</a>
          </p>
        </div>
      </section>
    </>
  )
}
