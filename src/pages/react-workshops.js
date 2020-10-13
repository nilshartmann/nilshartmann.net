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
const ulStyle = {
  marginTop: 0,
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
          'Remote',
          'Online',
        ]}
        title="React und TypeScript Schulungen und Beratung"
        description="Ich biete Dienstleistungen im Bereich Software-Entwicklung und Software-Architektur an. Schwerpunkte: Java, JavaScript, TypeScript, React, GraphQL, Redux"
      />
      <div className="Row FullPost">
        <h1 className="Title">
          React und TypeScript Schulungen, Workshops und Beratung
        </h1>
        <div className="Summary Clearfix Dienstleistungen">
          <p>
            Seit 2016 führe ich regelmäßig Schulungen und Workshops rund um das
            Thema Single-Page-Anwendungen mit React durch. Die Schwerpunkte
            liegen neben React selbst unter anderem auf TypeScript, Redux,
            GraphQL und der Strukturierung und Architektur von großen
            React-Anwendungen.
          </p>
        </div>
        <div
          className="Online"
          style={{
            padding: '0.1rem 0.5rem 0.25rem 0.5rem',
          }}
        >
          <div class="title">
            <h2>Online bzw. Remote-Angebote</h2>
          </div>
          <p>
            <b>
              Da in der derzeitigen (Corona-)Situation vielfach keine Arbeit
              Vor-Ort möglich oder empfehlenswert ist, biete ich meine
              Workshops, Schulungen und Beratungen auch online bzw. remote an.
            </b>
          </p>
          <p>
            Bei Interesse sendet mir eine Mail oder ruft mich an, dann klären
            wir neben den inhaltlichen auch die besonderen rganisatorischen und
            technischen Voraussetzungen. Natürlich tragen wir dabei den
            erschwerten Bedingungen Rechnung, die sich durch das remote arbeiten
            und damit verbundene Probleme möglicherweise ergeben. Da remote
            arbeiten häufig anstregender ist, als Vor-Ort gemeinsam zu lernen,
            können wir auch die Workshops auch halbtags durchführen. Auf diese
            Weise seid ihr auch zeitlich flexibler.
          </p>
          <p>
            <b>
              Dabei kommen die "gewohnten" Bausteine eines Workshops natürlich
              nicht zu kurz.
            </b>{' '}
            Wir besprechen im Vorweg eure gewünschten Inhalte, so dass ihr ein
            passgenaues Training bekommt. Während der Schulung gibt es eine
            Mischung aus Slides, viel Live Coding und arbeiten am Whiteboard,
            ganz so, wie im Schulungsraum oder Büro. Natürlich könnt ihr
            jederzeit Eure Fragen stellen, wir diskutieren gemeinsam über
            Problem- und Fragestellungen und machen natürlich auch Übungen, die
            ihr einzeln oder in Gruppen bearbeiten könnt und bei denen ich euch
            jederzeit per Screensharing unterstützen kann.
          </p>
          <p>
            Das alles gilt übrigens nicht nur für Schulungen sondern auch für
            andere Arten von Workshops oder Beratung, zum Beispiel Code Reviews
            oder Unterstützung bei Fragen der Anwendungsarchitektur.
          </p>
        </div>
        <div class="title">
          <h2>Individuelle In-House-Schulungen</h2>
        </div>
        <p>
          Ich biete Schulungen für dich und dein Team zur Entwicklung von{' '}
          <b>Frontends</b> und <b>Single-Page-Applications (SPAs)</b> mit{' '}
          <b>React</b>, <b>TypeScript</b>, und <b>GraphQL</b> an (weitere Themen
          auf Anfrage). Im Vorwege legen wir gemeinsam eine für Euch
          individuelle Agenda fest. Dabei berücksichtigen wir, welche
          Vorkenntnisse vorhanden und welche Schwerpunkte gewünscht sind.
          Beispielhafte Inhalte einer React Schulung findest Du{' '}
          <Link to="/react-workshops#react-schulungen-inhalte">unten</Link>,
          aber natürlich helfe ich Euch bei der Erstellung der Agenda und
          Auswahl der Themen.
        </p>

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
          <h2>
            Unterstützung beim Einstieg in die Entwicklung von
            Single-Page-Anwendungen
          </h2>
        </div>
        <p>
          <em>
            Ihr habt ein bestehende Anwendung, zum Beispiel auf{' '}
            <b>Java/JEE/Spring MVC</b>-Basis oder als Fat-Client (Swing, JavaFX)
            und wollt nun dafür ein Frontend als Single-Page-Anwendung bauen?
          </em>{' '}
          Da ich ursprünglich auch aus der Java-Entwicklung komme, habe ich
          Erfahrung darin, welche Bedenken hinsichtlich der
          JavaScript-Entwicklung bestehen und welche Schmerzen ein Umstieg
          bereiten kann. Ich kann euch aber dabei helfen, die Umstellung so
          reibungslos wie möglich zu machen:
          <ul>
            <li>
              <b>Was sind Single-Page-Anwendungen</b>, welche Features lassen
              sich damit umsetzen und wo sind ihre Grenzen?
            </li>
            <li>
              Wie kann eine <b>schrittweise Migration</b> von Eurer bestehenden
              Anwendung aussehen und welche Schrite sind dafür notwendig?
            </li>
            <li>
              Wie könnte eine tragfähige und zukunftssichere <b>Architektur</b>{' '}
              für Eure konkreten Anforderungen aussehen?
            </li>
            <li>
              Was muss beim <b>Deployment</b> beachtet werden? Wie können Build-
              und CI-Prozess aussehen?
            </li>
          </ul>
          All das sind Themen, die wir besprechen und dafür gemeinsam praxisnahe
          Lösungen für Euer Produkt erarbeiten können. Bei Bedarf meldet euch
          gerne.
        </p>

        <div class="title">
          <h2>Mehr zum Thema Frontend-Entwicklung</h2>
          <div
            style={{
              display: 'flex',
              marginBottom: '20px',
              alignItems: 'flex-start',
            }}
          >
            <img
              style={{
                marginRight: '20px',
                maxWidth: '90px',
              }}
              src="/uploads/react-buch-v2-ganz-klein.png"
              alt="Cover React Buch (dpunkt-Verlag)"
            />
            <div>
              <p>
                Neben den Schulungen habe ich ein Buch sowie mehrere Artikel
                rund um die Entwicklung moderner Frontends mit React
                geschrieben.
              </p>

              <p>
                React - Grundlagen, fortgeschrittene Techniken und Praxistipps –
                mit TypeScript und Redux
                <br />
                2., überarbeitete und erweiterte Auflage, dpunkt-Verlag, 2019
                <br />
                <a href="https://reactbuch.de">Weitere Informationen</a>
              </p>
            </div>
          </div>

          <ul style={ulStyle}>
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
              <Link to="/posts/graphql-clients-mit-react-und-apollo">
                GraphQL-Clients mit React und Apollo
              </Link>{' '}
              (heise developer, November 2018)
            </li>
            <li>
              <Link to="/posts/hilfe-ich-muss-javascript-programmieren">
                Hilfe, ich muss JavaScript programmieren!
              </Link>{' '}
              (Java Aktuell, 5/2018)
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=IadZyDwfwWI"
                target="_blank"
              >
                Let’s type! A practical introduction to TypeScript (Video)
              </a>{' '}
              (Voxxed Vienna, März 2018)
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=g4Q9M9mrVDY"
                target="_blank"
              >
                W-JAX Interview zur JavaScript-Session auf einer Java-Konferenz
                (Video)
              </a>{' '}
              (W-JAX München, November 2017)
            </li>
            <li>
              <a href="https://vimeo.com/161760971" target="blank">
                Mit React UI Komponenten für das Web entwickeln (Video)
              </a>{' '}
              (W-Jax München, November 2015)
            </li>
          </ul>
        </div>

        <div class="title" id="react-schulungen-inhalte">
          <h1>Mögliche Inhalte einer React Schulung</h1>
        </div>
        <p>
          Hier findest Du beispielhaft mögliche Inhalte einer React Schulung.
          <br />
          Die genauen Schwerpunkte und die Agenda lege ich mit euch gemeinsam im
          Vorweg fest, um auf eure individuellen Bedürfnisse einzugehen.
        </p>

        <div class="title">
          <h3>JavaScript Grundlagen und Vertiefung: ES6+</h3>
        </div>
        <p>
          Je nach Vorkenntnissen können wir in die Sprache JavaScript
          beschäftigen und Kenntnisse vertiefen bzw. auf den neusten Stand
          bringen.
        </p>
        <ul>
          <li>Was ist ES5, ES6, ES.next?</li>
          <li>
            "Moderne" JavaScript-Sprachfeatures, die häufig in React-Anwendungen
            eingesetzt werden, wie z.B. const/let, Arrow Functions,
            Destructuring und Spread-Operator
          </li>
          <li>Module und Klassen</li>
          <li>Asynchrones Arbeiten mit Promises und async/await</li>
          <li>
            Grundlagen der Web-Entwicklung mit "pure" JavaScript, die DOM API
          </li>
        </ul>

        <p>
          Das Herzstück jeder React Anwendung sind Komponenten. Angefangen wird
          mit kleinen, isolierten Komponenten, die sich gut wiederverwenden
          lassen. Diese Komponenten werden dann zu kompletten Anwendungen
          zusammengesteckt.
        </p>

        <div class="title">
          <h3>Wiederverwendbare Komponenten mit React entwickeln</h3>
        </div>

        <p>
          Das Herzstück jeder React Anwendung sind Komponenten. Angefangen wird
          mit kleinen, isolierten Komponenten, die sich gut wiederverwenden
          lassen. Diese Komponenten werden dann zu kompletten Anwendungen
          zusammengesteckt.
        </p>
        <ul>
          <li>Deklarativ Komponenten beschreiben</li>
          <li>Komponenten als Funktionen mit der Hooks API</li>
          <li>Interaktionen mit dem Benutzer</li>
          <li>Zustand und Eigenschaften von Komponenten</li>
          <li>Was ist der Virtual DOM?</li>
          <li>Lebenszyklus von Komponenten</li>
          <li>Komponenten als ES6 Klassen</li>
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
          <h3>Externes Statemangement mit Redux</h3>
        </div>

        <p>
          Wenn deine React Anwendung größer wird, benötigst du eine solide
          Architektur um deine Anwendung verständlich und wartbar zu halten; das
          betrifft insbesondere die Verwaltung des Zustands.
        </p>
        <p>
          In der Schulung diskutieren wir typische Probleme, die bei der
          Entwicklung von React-Anwendungen entstehen können und gucken uns
          mögliche Lösungen an.
        </p>
        <p>
          Dazu gehört der <b>React Context</b>, der <b>useReducer-Hook</b> und
          die Bibliotheken wie <b>Redux</b> und <b>MobX</b>, die alle Ansätze
          bieten, um den Zustand einer React-Anwendung zu verwalten. Wir
          diskutieren die Vorteile (und Nachteile) der jeweiligen Ansätze, sehen
          uns an was sie jeweils für deinen Code und die Entwicklung sowie das
          Testen bedeuten.
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
          dass du dafür einen Browser benötigst. Populäre Bibliotheken sind zum
          Beispiel Enzyme oder React Testing Library, die ich Euch zeigen kann.
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
            Fortgeschrittene Techniken wie die Context API oder Patterns wie
            Higher-Order-Components (HOCs) oder Render Properties
          </li>
          <li>
            Ausblick auf kommende React-Features, wie z.B. konkurrierendes
            Rendering oder Suspense
          </li>
          <li>
            Möglichkeiten zur Analyse und Optimierung der Performance (React
            Profiler, Code-Splitting mit React.lazy, useMemo-Hook etc)
          </li>
          <li>
            Tooling und Entwicklungsumgebung für React (welche Editoren und
            Tools bieten sich an, welche Browser-Erweiterungen? Wie kann der
            Browser oder die IDE für das Debuggen benutzt werden?)
          </li>
          <li>
            Ansätze zum Komponenten-basierten, modularen Styling (CSS Modules,
            Styled Components, ggf. mit SASS/LESS)
          </li>
          <li>
            Universal Webanwendungen mit React entwickeln - Webanwendungen, die
            auf dem Server gerendert werden
          </li>
          <li>Einbinden von Dritt-Bibliotheken, z.B. jQuery oder d3.js</li>
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
