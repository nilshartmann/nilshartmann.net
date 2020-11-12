// ---------------------------------------------------------------------------
// --- Nils Hartmann | http://nilshartmann.net                             ---
// ---------------------------------------------------------------------------

import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import { Link } from '@reach/router'

const imgStyle = {
  float: 'left',
  maxWidth: '210px',
  marginRight: '10px',
}

export default function Angebot() {
  return (
    <Layout>
      <SEO
        keywords={[
          'Java',
          'JavaScript',
          'Spring Boot',
          'React',
          'TypeScript',
          'GraphQL',
          'Backend Entwicklung',
          'Frontend Entwicklung',
          'Fullstack Entwicklung',
          'Dienstleistungen',
          'Software-Architektur',
          'Software-Entwicklung',
        ]}
        title="Dienstleistungen"
        description="Ich biete Dienstleistungen im Bereich Software-Entwicklung und Software-Architektur an. Schwerpunkte: Java, JavaScript, TypeScript, React, GraphQL"
      />
      <div className="Row FullPost">
        <h1 className="Title">Meine Dienstleistungen</h1>
        <div className="Summary Clearfix Dienstleistungen">
          <img src="/uploads/nh.jpg" alt="Nils Hartmann" />
          Ich entwickle seit zwanzig Jahren Software in unterschiedlichen
          Programmiersprachen und Technologien. Dabei habe ich in
          unterschiedlichen Firmen und Branchen gearbeitet und neben der{' '}
          <b>Programmierung</b> auch immer wieder <b>Architektur-Aufgaben</b>{' '}
          übernommen, <b>Schulungen und Traninings</b> gegeben und andere
          Entwickler gecoached.
        </div>
        <p style={{ marginTop: '1.2rem' }}>
          Mein Schwerpunkt liegt auf der Beratung und Unterstützung von
          Entwickler-Teams, die Webanwendungen und konkret{' '}
          <b>Single-Page-Applications</b>, bauen wollen. Ich helfe dabei, Teams
          mit der JavaScript- bzw. Frontend-Entwicklung vertraut zu machen.
          Dafür biete ich Schulungen und Workshops an. Gemeinsam mit den Teams
          erarbeite ich, welche Tools, Methoden und Architekturen für ein
          Projekt am besten passen.
        </p>{' '}
        <p style={{ marginTop: '1.2rem' }}>
          Ich mache aber auch <b>Backend-Entwicklung</b> und beschäftige mich
          mit Themen Rund um <b>Versionsverwaltung</b> sowie{' '}
          <b>Build- und Deploymentprozessen</b>.
        </p>
        <p style={{ marginTop: '1.2rem' }}>
          Grundsätzlich ist es mir wichtig, für Kunden Lösungen zu finden, die
          den <b>individuellen Bedürfnisse und Anforderungen</b> gerecht werden
          und die die konkreten Gegebenheiten im Projekt nicht aus den Augen
          lassen. Dazu ist es meiner Meinung nach notwendig immer zu schauen,
          welche Konsequenzen (sowohl positiv wie auch negativ) eine
          Entscheidung für oder gegen eine Technologie, eine Architektur oder
          ein Vorgehen hat. Etwas nur zu machen, weil "man das so macht" führt
          häufig in die Irre. Im Zweifel plädiere ich dafür, lieber klein
          anzufangen und dann später zu skalieren bzw anzupassen.
        </p>
        <h2>Trainings und Coaching</h2>
        <p>
          Ich gebe zu unterschiedlichen Themen sowohl öffentliche als auch
          nicht-öffentliche Schulungen, Workshops und Trainings.
        </p>
        <ul>
          <li>
            Trainings und Schulungen rund u.a. um <b>React</b>, <b>Redux</b>,{' '}
            <b>JavaScript/TypeScript</b> und <b>GraphQL</b>
          </li>
          <li>Workshops zu Architektur-Themen (Frontend und Backend)</li>
          <li>
            Durchführung von <b>Code Reviews</b> (auch remote)
          </li>
          <li>
            <Link to="/react-workshops">Weitere Informationen hier</Link>
          </li>
        </ul>
        <h2>JavaScript-Entwicklung</h2>
        <ul>
          <li style={{ marginBottom: '0.5rem' }}>
            Schwerpunkte: <b>JavaScript/ES6+</b>, <b>TypeScript</b>,{' '}
            <b>React</b>, <b>Redux</b>, <b>GraphQL</b>, <b>HTML/CSS</b>
          </li>
          <li>
            Beratung hinsichtlich der <b>Architektur</b> von React-Anwendungen
            und <b>Microfrontends</b> und Entwicklung von Prototypen
          </li>
          <li>
            Unterstützung bei der <b>Migration bestehender Anwendungen</b>, z.B.
            von einer <b>Java/JEE/Spring MVC</b>-basierten Anwendung hin zu
            einer Single-Page-Anwendung auf Basis von React.
          </li>
          <li>
            Hilfe bei der Auswahl eines geeigneten Technologie Stacks für
            React-Anwendungen unter Unterstützung bei der Einführung von React
            in neuen Projekten
          </li>
          <li>
            Konzeption und Implementierung von Single-Page-Applications auf
            Basis von React
          </li>
          <li>
            Schulung, Trainings, Code-Review (
            <Link to="/react-workshops">Weitere Informationen hier)</Link>
          </li>
        </ul>
        <h2>Java-Entwicklung</h2>
        <ul>
          <li style={{ marginBottom: '0.5rem' }}>
            Schwerpunkte: <b>Spring</b> / <b>Spring Boot</b>, <b>GraphQL</b>,{' '}
            <b>JEE</b>, <b>JPA</b>, <b>OSGi</b>
          </li>
          <li>
            Konzeption und Entwicklung von Java-basierten (Backend-)Anwendungen
          </li>
          <li>Unterstützung bei technischen Fragestellungen und Problemen</li>
          <li>
            Beratung und Diskussion von Architektur-Fragen insbesondere auch
            rund um das Thema Modularisierung großer Anwendungen
          </li>
        </ul>
        <h2>Build-, Deployment- und Automatisierungsprozesse</h2>
        <ul>
          <li style={{ marginBottom: '0.5rem' }}>
            Schwerpunkte: <b>Git</b>, <b>Jenkins</b>, <b>Docker</b>
          </li>
          <li>Konzeption von CI/CD-Prozessen</li>
          <li>
            Entwicklung automatisierter Build- und Deploymentpipelines für
            Backend- und Frontend-Anwendungen
          </li>
          <li>
            Ausarbeitung von Deployment- und Releasemodellen, die den konkreten
            Projekt-Anforderungen angemessen sind
          </li>
        </ul>
        <h1>Was ich bevorzugt suche</h1>
        <p style={{ marginTop: '1.2rem' }}>
          Zum einen biete ich{' '}
          <Link to="/react-workshops">Schulungen, Trainings und Workshops</Link>
          . Darüberhinaus suche ich aber auch spannende Aufgaben im Bereich der
          Frontend- und/oder Backend-Entwicklung, wobei ich mich mit den oben
          genannten Technologien besonders gut auskenne (meine ich
          jedenfalls...).
        </p>
        <ul>
          <li style={{ marginBottom: '0.5rem' }}>
            <b>Migrations- und Evaluationsprojekte</b>, in denen ich Euch zum
            Beispiel helfen kann, von einer "klassischen" Web-Architektur (Java,
            JEE, Spring MVC) zu einer Single-Page-Anwendung mit React und
            TypeScript zu kommen.
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            Tätigkeiten/Beratung mit <b>klarem Schwerpunkt und Zielsetzung</b>{' '}
            in einem der oben genannten Bereiche.
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            Ein <b>nettes Team</b>, in dem man sich gegenseitig wertschätzt und
            einen persönlichen Umgang miteinander pflegt ist mir sehr wichtig.
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            Ich <b>arbeite gerne remote</b>, deswegen bevorzuge ich besonders
            Aufträge, bei denen es nicht erforderlich ist, (ständig) vor Ort zu
            sein.
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            Da ich auch Trainings und Schulungen gebe sowie auf Konferenzen und
            Meetups spreche, kann ich auf Grund von Vorbereitungs- und Reisezeit
            im Schnitt <b>maximal 3-4 Tage/Woche</b> im Projekt mitarbeiten.
          </li>
        </ul>
        <p>Wenn das für Euch passt, meldet Euch gerne bei mir!</p>
        <h1 className="Title">Kontakt</h1>
        <div className="Contact">
          <div>
            <p>Nils Hartmann</p>
            <p>Buckhorn 41b</p>
            <p>22359 Hamburg</p>
          </div>
          <div>
            <p className="SocialMedia">
              <i className="fa fa-envelope fa-lg" />
              <a href="mailto:nils@nilshartmann.net">nils@nilshartmann.net</a>
            </p>
            <p className="SocialMedia">
              <i className="fa fa-twitter fa-lg" />
              <a href="https://twitter.com/nilshartmann">Twitter</a>
            </p>
            <p className="SocialMedia">
              <i className="fa fa-xing fa-lg" />
              <a href="https://www.xing.com/profile/Nils_Hartmann2">Xing</a>
            </p>
            <p className="SocialMedia">
              <i className="fa fa-github fa-lg" />
              <a href="https://github.com/nilshartmann">GitHub</a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
