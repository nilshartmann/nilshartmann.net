// ---------------------------------------------------------------------------
// --- Nils Hartmann | http://nilshartmann.net                             ---
// ---------------------------------------------------------------------------

import React from 'react'

import FlickrBar from './FlickrBar'
import { getFlickrImages } from './flicker'
import { Link } from 'gatsby'

export default function About() {
  const imgStyle = {
    float: 'right',
    maxWidth: '160px',
    marginLeft: '10px',
  }

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
    <div>
      <article>
        <div className="Row Clearfix">
          <header>
            <div className="TitlePanel Title ">Willkommen!</div>
          </header>
          <section>
            <p style={pStyle}>
              <img style={imgStyle} src="/uploads/nh.jpg" />
              Ich bin Nils Hartmann, freiberuflicher Softwareentwickler und
              -Architekt aus Hamburg und beschäftige mich mit <b>
                Java
              </b> und <b>JavaScript/TypeScript</b> (insbesondere{' '}
              <b>Spring Boot</b>, <b>GraphQL</b>, <b>React</b>). 2016 habe ich
              ein{' '}
              <a href="/posts/react-buch-erschienen">
                <b>Buch über React</b>
              </a>{' '}
              veröffentlicht.
            </p>

            <p style={pStyle}>
              Ich unterstütze dich und dein Team gerne in eurem Projekt, sei es
              beim programmieren, in Architektur-Fragen oder zum Beispiel durch
              gemeinsame Code-Reviews (auch Remote). Rund um die Themen React,
              JavaScript, TypeScript und GraphQL biete ich auch individuelle{' '}
              <Link to="/react-workshops">
                <b>Trainings und Workshops</b>
              </Link>{' '}
              (auch In-House) an. Wenn Du Interesse hast, schreibe mir doch
              einfach eine <a href="mailto:nils@nilshartmann.net">E-Mail</a>,
              dann schauen wir gemeinsam, was am besten passt. Hier findest Du{' '}
              <Link to="/dienstleistungen">
                <b>weitere Informationen</b>
              </Link>
              .
            </p>
          </section>
          <section>
            <p style={pStyle}>
              Regelmäßig halte ich auch <b>Vorträge</b>:
            </p>
            <ul style={ulStyle}>
              <li>
                <a
                  href="https://programm.javaland.eu/2019/#/scheduledEvent/569601"
                  target="_blank"
                >
                  GraphQL für Java-Entwickler
                </a>{' '}
                (JavaLand, Brühl, März 2019)
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
            </ul>
          </section>
        </div>
        <div className="Row NoSidePadding">
          <FlickrBar flickrImages={getFlickrImages(10)} />
        </div>
      </article>
    </div>
  )
}
