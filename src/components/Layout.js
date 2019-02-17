import React from 'react'
import { Link, withPrefix } from 'gatsby'

import SocialIcons from './SocialIcons'

export default class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div className="Background">
        <header className="PageHeader">
          <div className="HeaderInner">
            <Link className="Title" to="/">
              Nils Hartmann
            </Link>
            <div>Software-Entwicklung | Software-Architektur</div>
          </div>
          <SocialIcons />
        </header>
        <div className="Main">
          <div className="Clearfix">
            <main>
              <div className="Container">{children}</div>
            </main>

            <aside>
              <section className="Section">
                <Link className="ReadMore" to="/dienstleistungen">
                  <h1 className="Title">Mein Angebot</h1>
                </Link>
                <span className="ReadMore">
                  Ich unterstütze euch gerne in eurem Projekt, sei es durch
                  gemeinsame Code-Reviews, Architektur-Diskussionen oder beim
                  programmieren. Rund um die Themen React, TypeScript und
                  GraphQL biete ich auch individuelle{' '}
                  <b>Trainings und Workshops</b> an.
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
              </section>
              <section className="Section">
                <h1 className="Title">Workshops</h1>
                <div className="Image">
                  <a
                    className="Abstract"
                    href="https://www.oose.de/seminar/web-apps/"
                    target="_blank"
                  >
                    Single-Page-Anwendungen mit React, Redux und TypeScript
                    entwickeln
                  </a>
                  <p className="Location">
                    OOSE, Hamburg,
                    <br /> 07./08. März 2019
                  </p>
                </div>
                <div className="Image">
                  <p className="Abstract">
                    Interne Workshops u.a. zu React, TypeScript, GraphQL
                  </p>
                  <p className="Location">
                    <a href="mailto:nils@nilshartmann.net">Auf Anfrage</a>
                  </p>
                </div>
              </section>
              <section className="Section">
                <h1 className="Title">Talks</h1>
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
              </section>
              <section className="Section">
                <h1 className="Title">Kontakt</h1>
                <div className="Image">
                  <p className="ReadMore">Nils Hartmann</p>
                  <p className="ReadMore">Buckhorn 41b</p>
                  <p className="ReadMore">22359 Hamburg</p>
                  <p className="ReadMore" style={{ marginTop: '5px' }}>
                    Tel: 0173 / 286 30 76
                  </p>
                  <p className="ReadMore" style={{ marginTop: '5px' }}>
                    E-Mail:{' '}
                    <a href="mailto:nils@nilshartmann.net">
                      nils@nilshartmann.net
                    </a>
                  </p>
                  <p className="ReadMore" style={{ marginTop: '5px' }}>
                    <a href="https://twitter.com/nilshmann">Twitter</a>
                  </p>
                  <p className="ReadMore" style={{ marginTop: '5px' }}>
                    <a href="https://www.xing.com/profile/Nils_Hartmann2">
                      Xing
                    </a>
                  </p>
                  <p className="ReadMore" style={{ marginTop: '5px' }}>
                    <a href="https://github.com/nilshmann">GitHub</a>
                  </p>
                </div>
              </section>
            </aside>
          </div>

          <footer>
            <nav>
              <Link to="/dienstleistungen">Dienstleistungen</Link>
              &nbsp;|&nbsp;
              <Link to="/pages/impressum">Impressum</Link>&nbsp;|&nbsp;
              <Link to="/pages/datenschutzerklaerung">
                Datenschutzerklärung
              </Link>
            </nav>
          </footer>
        </div>
      </div>
    )
  }
}
