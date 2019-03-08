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
          <img src="/uploads/nh.jpg" />
          Ich entwickle seit zwanzig Jahren Software in unterschiedlichen
          Programmiersprachen und Technologien. Dabei habe ich in
          unterschiedlichen Firmen und Branchen gearbeitet und neben der{' '}
          <b>Programmierung</b> auch immer wieder <b>Architektur-Aufgaben</b>{' '}
          übernommen, <b>Schulungen und Traninings</b> gegeben und andere
          Entwickler gecoached.
        </div>
        <p style={{ marginTop: '1.2rem' }}>
          Mein Schwerpunkt liegt auf der Entwicklung von Webanwendungen und
          konkret <b>Single-Page-Applications</b>. Diesen Bereich finde ich
          einerseits sehr herausfordernd (zum Beispiel weil sich Technologien
          und Methoden sehr schnell wandeln und weiterentwickeln) andererseits
          aber auch sehr spannend, hier soviel Neues entsteht und das "Web als
          Applikationsplatform" sehr viel potential hat. Ich mache aber auch{' '}
          <b>Backendentwicklung</b> und beschäftige mich mit Themen Rund um{' '}
          <b>Versionsverwaltung</b>, <b>Build- und Deploymentprozessen</b>.
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
          anfangen und dann skalieren bzw anpassen.
        </p>
        <p style={{ marginTop: '1.2rem' }}>
          <b>Ich suche</b> Aufgaben im Bereich der Frontend- und/oder
          Backend-Entwicklung, wobei ich mich mit den unten stehenden
          Technologien besonders gut auskenne (meine ich jedenfalls...). Da ich
          gerne remote arbeite, bevorzuge ich besonders Aufträge, bei denen es
          nicht erforderlich ist, (ständig) vor Ort zu sein.
        </p>
        <h2>Java-Entwicklung</h2>
        <ul>
          <li>
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
        <h2>JavaScript-Entwicklung</h2>
        <ul>
          <li>
            Schwerpunkte: <b>JavaScript/ES6+</b>, <b>TypeScript</b>,{' '}
            <b>React</b>, <b>Redux</b>, <b>GraphQL</b>, <b>HTML/CSS</b>
          </li>
          <li>
            Konzeption und Implementierung von Single-Page-Applications auf
            Basis von React
          </li>
          <li>
            Beratung hinsichtlich der Architektur von React-Anwendungen und
            Microfrontends
          </li>
          <li>
            Erarbeitung von Migrationsszenarien zu React (z.B. von einer
            serverseitig gerenderten Web-Anwendung)
          </li>
          <li>
            Hilfe bei der Auswahl eines geeigneten Technologie Stacks für
            React-Anwendungen unter Unterstützung bei der Einführung von React
            in neuen Projekten
          </li>
          <li>
            Schulung, Trainings, Code-Review (
            <Link to="/react-workshops">Weitere Informationen hier)</Link>
          </li>
        </ul>
        <h2>Build-, Deployment- und Automatisierungsprozesse</h2>
        <ul>
          <li>
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
        <h2>Trainings und Coaching</h2>
        <p>
          Seit einigen Jahren gebe ich zu unterschiedlichen Themen sowohl
          öffentliche als auch nicht-öffentliche Workshops und Trainings.
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
        <h1 className="Title">Kontakt</h1>
        <div className="Contact">
          <div>
            <p>Nils Hartmann</p>
            <p>Buckhorn 41b</p>
            <p>22359 Hamburg</p>
            <p>Tel: 0173 / 286 30 76</p>
          </div>
          <div>
            <p className="SocialMedia">
              <i className="fa fa-envelope fa-lg" />
              <a href="mailto:nils@nilshartmann.net">nils@nilshartmann.net</a>
            </p>
            <p className="SocialMedia">
              <i className="fa fa-twitter fa-lg" />
              <a href="https://twitter.com/nilshmann">Twitter</a>
            </p>
            <p className="SocialMedia">
              <i className="fa fa-xing fa-lg" />
              <a href="https://www.xing.com/profile/Nils_Hartmann2">Xing</a>
            </p>
            <p className="SocialMedia">
              <i className="fa fa-github fa-lg" />
              <a href="https://github.com/nilshmann">GitHub</a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
