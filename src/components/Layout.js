import React from 'react'
import { Link, withPrefix } from 'gatsby'

import SocialIcons from './SocialIcons'

export default class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div className="Background">
        <div className="Header">
          <Link className="Title" to="/">
            Nils Hartmann
          </Link>
          <SocialIcons />
        </div>
        <div className="Main">
          <div className="Clearfix">
            <div className="Container">{children}</div>

            <div className="Sidebar">
              <div className="Section">
                <h1 className="Title">Mein Angebot</h1>
                <span className="ReadMore">
                  Ich unterstütze dich gerne in deinem Projekt, sei es beim
                  programmieren, in Architektur-Fragen oder zum Beispiel durch
                  gemeinsame Code-Reviews (auch Remote). Rund um die Themen
                  React, JavaScript, TypeScript und GraphQL biete ich auch
                  individuelle <b>Trainings und Workshops</b> (auch In-House)
                  an. Wenn Du Interesse hast, schreibe mir doch einfach eine{' '}
                  <a href="mailto:nils@nilshartmann.net">E-Mail</a>, dann
                  schauen wir gemeinsam, was am besten passt.
                </span>
              </div>
              <div className="Section">
                <h1 className="Title">Bücher</h1>
                <div className="Image">
                  <a className="ReadMore" href="/posts/react-buch-erschienen">
                    <img src={withPrefix('/uploads/react-buch-titel.jpg')} />
                    React - Die praktische Einf&uuml; hrung in React, React
                    Router und Redux (Juni 2016){' '}
                  </a>
                </div>
                <div className="Image">
                  <Link className="ReadMore" to="/posts/das-osgi-buch">
                    <img
                      src={withPrefix(
                        '/uploads/die_osgi_service_platform_01.jpg'
                      )}
                    />
                    Die OSGi Service Platform (April 2008){' '}
                  </Link>
                </div>
              </div>
              <div className="Section">
                <h1 className="Title">Talks und Workshops</h1>
                <div className="Image">
                  <p>
                    <b>JavaLand, Brühl, März 2019</b>
                  </p>
                  <p style={{ marginBottom: '0.5em' }}>
                    <a
                      className="ReadMore"
                      href="https://programm.javaland.eu/2019/#/scheduledEvent/569601"
                      target="_blank"
                    >
                      GraphQL für Java-Entwickler
                    </a>
                  </p>
                </div>
                <div className="Image">
                  <p>
                    <b>JAX, Mainz, Mai 2019</b>
                  </p>
                  <p style={{ marginBottom: '0.5em' }}>
                    <a
                      className="ReadMore"
                      href="https://jax.de/web-development-javascript/moderne-frontend-architektur-mit-javascript/"
                      target="_blank"
                    >
                      Moderne Frontend-Architektur mit JavaScript
                    </a>
                  </p>
                  <p style={{ marginBottom: '0.5em' }}>
                    <a
                      className="ReadMore"
                      href="https://jax.de/serverside-enterprise-java/graphql-fuer-java-anwendungen/"
                      target="_blank"
                    >
                      GraphQL für Java Anwendungen
                    </a>
                  </p>
                </div>
                <div className="Image">
                  <p>
                    <b>Magdeburger Developer Days, Mai 2019</b>
                  </p>
                  <p style={{ marginBottom: '0.5em' }}>
                    <a
                      className="ReadMore"
                      href="https://www.md-devdays.de/Act?id=1000027"
                      target="_blank"
                    >
                      Modernes React
                    </a>
                  </p>
                  <p style={{ marginBottom: '0.5em' }}>
                    <a
                      className="ReadMore"
                      href="https://www.md-devdays.de/Act?id=1000026"
                      target="_blank"
                    >
                      Einführung in GraphQL mit Java
                    </a>
                  </p>
                </div>
                <div className="Image">
                  <img
                    src={withPrefix(
                      '/uploads/1498424152641_nils-im-workshop.jpeg'
                    )}
                  />
                  <p>
                    <b>Vergangene Talks</b>
                  </p>
                  <a className="ReadMore" href="/posts/vergangene-talks">
                    Übersicht über vergangene Talks
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="Footer">
            <Link to="/pages/impressum">Impressum</Link>&nbsp;|&nbsp;
            <Link to="/pages/datenschutzerklaerung">Datenschutzerklärung</Link>
          </div>
        </div>
      </div>
    )
  }
}
