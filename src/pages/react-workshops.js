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
          'JavaScript',
          'React',
          'Redux',
          'TypeScript',
          'Workshop',
          'Training',
          'React Workshop',
          'Seminar',
        ]}
        title="React und TypeScript Schulungen und Beratung"
        description="Ich biete Dienstleistungen im Bereich Software-Entwicklung und Software-Architektur an. Schwerpunkte: Java, JavaScript, TypeScript, React, GraphQL, Redux"
      />
      <div className="Row FullPost">
        <h1 className="Title">
          React und TypeScript Schulungen, Workshops und Beratung
        </h1>
        <div className="Summary Clearfix Dienstleistungen">
          Im Juni 2016 erschien die 1. Auflage meines{' '}
          <Link to="/posts/react-buch-erschienen/">React-Buches</Link>, in dem
          ihr einen Einstieg in die Entwicklung von React-Anwendungen bekommt.
          Ich biete aber auch individuelle In-House-Schulungen und Workshops
          rund um das Thema React an, um dich und dein Team beim Einstieg und
          der Arbeit mit React zu unterstützen. Falls ihr schon React im Einsatz
          habt, führe ich auch Code-Reviews mit Euch durch (auch remote) oder
          berate Euch bei konkreten Fragestellungen, zum Beispiel zur
          Architektur oder Technologieauswahl.
        </div>
        <div class="title">
          <h2>Mögliche Inhalte einer Schulung</h2>
        </div>
        <p>
          Hier findest Du beispielhaft mögliche Inhalte einer React Schulung.
          Die genauen Schwerpunkte und die Agenda lege ich mit euch gemeinsam im
          Vorweg fest, um auf eure individuellen Bedürfnisse einzugehen.
        </p>

        <div class="title">
          <h3>Wiederverwendbare Komponenten mit React antwickeln</h3>
        </div>

        <p>
          Das Herzstück jeder React Anwendung sind Komponenten. Angefangen wird
          mit kleinen, isolierten Komponenten, die sich gut wiederverwenden
          lassen. Diese Komponenten werden dann zu kompletten Anwendungen
          zusammengesteckt.
        </p>
        <ul>
          <li>Deklarativ Komponenten beschreiben</li>
          <li>Komponenten als ES6 Klassen und Funktionen</li>
          <li>Interaktionen mit dem Benutzer</li>
          <li>Zustand und Eigenschaften von Komponenten</li>
          <li>Lebenszyklus von Komponenten</li>
          <li>Hooks</li>
        </ul>

        <div class="title">
          <h3>Die JavaScript Spracherweiterung JSX</h3>
        </div>

        <p>
          Komponenten werden in React ohne Templatesprache programmiert!
          Stattdessen kommt React mit einer JavaScript Spracherweiterung mit dem
          Namen JSX her, die es erlaubt, HTML-artigen Code direkt in deinen
          JavaScript-Code zu schreiben. Im Workshop sehen wir uns an, wie die
          JSX Syntax aussieht und wie du deine in JSX geschriebenen Anwendungen
          in gültiges, für den Browser verständliches, JavaScript compilieren
          kannst.
        </p>

        <div class="title">
          <h3>Typsichere React Anwendungen mit TypeScript</h3>
        </div>
        <p>
          TypeScript bietet die Möglichkeit, getyptes JavaScript zu entwickeln.
          Viele potentielle Programmierfehler können dadurch bereits während der
          Entwicklung in der IDE oder dem Build-Prozess erkannt und vermieden
          werden. Gerade in Anwendungen, die von mehreren Personen gebaut und
          über einen längeren Zeitraum weiterentwickelt und gepflegt werden
          sollen, empfehle ich den Einsatz von TypeScript. In der Schulung gebe
          ich Euch eine Einführung in die Sprache TypeScript, wie ihr sie in
          Euren React-Anwendungen einsetzt und wie ihr von der Typ-Sicherheit
          profitieren könnt.
        </p>

        <div class="title">
          <h3>Arbeiten mit Hooks</h3>
        </div>
        <p>
          Die Hooks API wurde in React 16.8 eingeführt. Mit Hooks kannst Du
          Zustand in deiner Anwendung verwalten, mit dem DOM interagieren und
          einiges mehr. Außerdem kannst Du eigene Hooks definieren, um häufig
          verwendeten Code nicht doppelt schreiben zu müssen. An Hand
          praktischer Beispiele sehen wir uns die wichtigsten Hooks vor,
          diskutieren wo und wann deren Einsatz sinnvoll ist und schauen uns an,
          wie Du eigene Hooks für deine Anwendung bauen kannst.
        </p>

        <div class="title">
          <h3>Das Flux Architekturmodell - am Beispiel von Redux</h3>
        </div>

        <p>
          Wenn deine React Anwendung größer wird, benötigst du eine solide
          Architektur um deine Anwendung verständlich und wartbar zu halten. Mit{' '}
          <b>Flux</b> hat Facebook ein Architekturmodell vorgestellt, das
          typische Probleme von (React-basierten) Webanwendungen lösen soll.
        </p>
        <p>
          In der Schulung schauen wir uns dazu die Bibliothek <b>Redux</b> an,
          die mittlerweile im React-Umfeld etabliert ist. Wir schauen uns an,
          wie du mit Redux den kompletten Zustand deiner Anwendung aus deinen
          Komponenten herausziehen und zentral verwalten kann. Wir diskutieren
          die Vorteile (und Nachteile) dieser Idee, sehen uns an was das für
          deinen Code und die Entwicklung sowie das Testen bedeutet.
        </p>
        <div class="title">
          <h3>Serverzugriffe</h3>
        </div>

        <p>
          In der Regel müssen Anwendungen Daten von einem Server lesen oder
          schreiben. React macht keine Aussage dazu, wie die Kommunikation mit
          einem Backend, z.B. über eine REST-Schnittstelle, aussehen muss.
        </p>
        <p>
          Wir sehen uns an, wo und wie du die Serverzugriffe am Besten in deinen
          React Komponenten machst und welche Auswirkungen sich dadurch auf die
          Architektur der Anwendung ergeben. Auch schauen wir uns an, wie mit
          dem <b>Suspense</b>-Feature von React die Behandlung von asynchronem
          Code aussehen kann und wie die Anwendung mit Hilfe des React Caches
          optimiert werden kann.
        </p>
        <p>
          Eine mittlerweile populäre Alternative zu REST ist die Abfragesprache{' '}
          <b>GraphQL</b>, die sich sehr gut mit React verwenden lässt. Auch den
          Einsatz von GraphQL, etwa am Beispiel von Apollo GraphQL, kann ich bei
          Interesse vorstellen.{' '}
        </p>
        <div class="title">
          <h3>React Anwendungen testen (mit und ohne Browser)</h3>
        </div>

        <p>
          React Anwendungen lassen sich sehr gut testen, und zwar auch ohne,
          dass du dafür einen Browser benötigst.
        </p>
        <div class="title">
          <h3>Arbeiten mit dem React Router und der History</h3>
        </div>

        <p>
          Ein häufige Anforderung an Single Page Anwendungen ist es, dass man
          darin über URLs bzw die History-Funktion des Browsers genauso gut
          navigieren kann, wie "klassische" Webanwendungen was natürlich auch
          bedeutet, dass der Back-Button zuverlässig funktioniert und dass man
          Links auf einzelne Seiten oder Bereiche der Anwendung verschicken oder
          speichern kann.
        </p>
        <p>
          Dazu gibt es mit dem React Router Projekt eine de-facto-Standard
          Lösung für React-basierte Anwendungen. Du lernst, wie du URLs auf
          Komponenten mappen kannst, wie du auf URL-Parameter zugreifen und über
          die History navigieren kannst.
        </p>

        <div class="title">
          <h3>Mögliche weitere Themen</h3>
        </div>

        <ul>
          <li>
            Fortgeschrittene Techniken wie konkurrierendes Rendering, die
            Context API oder Patterns wie Higher-Order-Components (HOCs) oder
            Render Properties
          </li>
          <li>
            ECMAScript 2015ff - Einführung und Vertiefung in die Sprache
            JavaScript
          </li>
          <li>
            Universal Webanwendungen mit React entwickeln - Webanwendungen, die
            auf dem Server gerendert werden
          </li>
          <li>Einbinden von Dritt-Bibliotheken, z.B. jQuery oder d3.js</li>
        </ul>

        <div class="title">
          <h2>Workshops und Beratungen</h2>
        </div>
        <p>
          Neben den Schulungen biete ich auch Workshops und Beratung rund um die
          Entwicklung von React-basierten Single-Page-Anwendungen an. Dabei
          können wir zum Beispiel über mögliche Architekturen für Eure
          Anwendungen sprechen, Code-Reviews durchführen oder uns einen
          Überblick über das JavaScript-/React-Ökosystem verschaffen, um du
          diskutieren, wie ein passender Technologie-Stack für aussehen kann.
        </p>

        <div class="title">
          <h2>Unterstützung bei Migrationen</h2>
        </div>
        <p>
          <em>
            Ihr habt ein bestehende Anwendung, zum Beispiel auf{' '}
            <b>Java/JEE/Spring MVC</b>-Basis und wollt nun dafür ein Frontend
            als React Single-Page-Anwendung bauen?
          </em>{' '}
          Da ich ursprünglich auch aus der Java-Entwicklung komme, habe ich
          Erfahrung darin, welche Bedenken hinsichtlich der
          JavaScript-Entwicklung bestehen und welche Schmerzen ein Umstieg
          bereiten kann. Ich kann euch aber dabei helfen, die Umstellung so
          reibungslos wie möglich zu machen:
          <ul>
            <li>
              Wie könnte eine tragfähige und zukunftssichere Architektur für
              Eure konkreten Anforderungen aussehen?
            </li>
            <li>
              Was muss beim Deployment beachtet werden? Wie können Build- und
              CI-Prozess aussehen?
            </li>
            <li>
              Wie kann die eigentliche Migration aussehen und welche Schrite
              sind dafür notwendig?
            </li>
          </ul>
          All das sind Themen, die wir besprechen und dafür gemeinsam praxisnahe
          Lösungen für Euer Produkt erarbeiten können. Bei Bedarf meldet euch
          gerne.
        </p>

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
