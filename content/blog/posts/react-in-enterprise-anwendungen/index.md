---
title: 'React in Enterprise-Anwendungen'
date: '2019-02-01T23:00:00.000Z'
summaryMarkdown: 'Die Entwicklung von Komponenten und Anwendungen mit React ist nicht schwierig, weil  die API von React sehr schmal und deswegen schnell erlernbar ist. Für große Enterprise-Anwendungen kommen aber eine ganze Reihe von Fragen ins Spiel, für die React keine fertige Antwort mitbringt.'
image: '/uploads/1541346675530_microfrontends.png'
image_position: 'before_summary'
image_expanded: 'true'
tags:
  - JavaScript
  - React
  - Artikel
---

**Dieser Artikel ist ursprünglich im Java Magazin, [Ausgabe 1/2019](https://entwickler.de/leseproben/react-enterprise-579868787.html) erschienen**.

„Enterprise Anwendungen“ zeichnen sich in der Regel dadurch aus, dass die Anwendungen zum einen eine große Code-Basis haben, die von einer Vielzahl von Entwicklern und Teams über einen langen Zeitraum entwickelt und gewartet wird.
Dadurch ergeben sich auch im Bereich der Frontend-Entwicklung eine ganze Reihe von Fragestellungen. Wie kann der Code so strukturiert werden, dass möglichst mehrere Teams damit unabhängig voneinander arbeiten können? Wie kann sichergestellt werden, dass der Code auch nach mehreren Monaten oder gar Jahren noch verstanden und verändert werden kann? Und: wie kann der Code überhaupt getestet werden? Im Folgenden wollen wir uns einige dieser Probleme ansehen und schauen, welche Möglichkeiten es gibt, sie mit React zu lösen.

## Code-Struktur

Um die Orientierung in Source Code einer großen Anwendung nicht zu verlieren, ist es wichtig, eine vernünftige Struktur dafür zu wählen. Im Gegensatz zu Java-Projekten, wo es mit Maven einen De-facto-Standard für Projekt-Layouts und mit der Java Sprachspezifikation genaue Vorgaben gibt, wie Dateien für Klassen heißen und wo sie liegen müssen, können diese Entscheidungen in JavaScript- und React-Anwendungen nahezu nach Belieben getroffen werden. Das ist einerseits sehr praktisch, weil Strukturen je nach Vorlieben des Teams geschaffen werden können, auf der anderen Seite ist das Team aber auch „verpflichtet“ sich damit auseinanderzusetzen. Ähnlich wie beim Thema „Tabs oder Spaces“ oder der Suche nach der „richtigen“ Code-Formatierung kann auch das Thema Code-Struktur intensiv diskutiert werden. In der Dokumentation von React findet sich diesbezüglich lediglich der Hinweis, dass Code, der in der Regel gemeinsam verändert wird, auch „nahe beieinander“ sein sollte („Colocation“).

Dan Abramov, einer der React Core-Entwickler, hat seine Meinung zu dem Thema so zusammengefasst: [„Move files around until it feels right“](http://react-file-structure.surge.sh/) und weiter: [„start by putting everything in one file; when it feels like it’s annoying, start splitting them up; when that gets annoying, maybe add some folders”](https://mobile.twitter.com/dan_abramov/status/1027248875072114689). Aus meiner Sicht ist das eine sehr gute und vor allem pragmatische herangehensweise, insbesondere weil je nach Projektgröße und -entwicklung andere Strukturen sinnvoll sein können. Zu Beginn eines Projektes, wenn vielleicht noch nicht zu einhundert Prozent klar ist, wie genau die Anwendung aussehen und funktionieren soll, kann es sehr praktisch sein, möglichst viel Code in einer Datei zu haben um schnell Änderungen durchführen zu können, ohne viel in der IDE oder dem Editor hin- und her navigieren zu müssen. Wenn die Anforderungen im Laufe der Zeit klarer und die Anwendung entsprechend stabiler wird oder das Entwickler-Team größer wird, kann es Sinn machen, große Komponenten in kleinere aufzuteilen und auch auf mehrere Dateien zu verteilen. Diese lassen sich dann vielleicht einfacher testen und außerdem können mehrere Entwickler parallel im Code arbeiten ohne sich in die Quere zu kommen.
Sehen wir uns also an, welche Möglichkeiten es gibt, den Code für eine Komponente zu strukturieren und wie eine solche „Evolution“ aussehen kann. Als Beispiel soll dazu die Komponente _Greeting_ dienen, die einen fiktiven Gruß ausgibt.

**Listing 1:**

```jsx
export default class Greeting extends React.Component {
  render() {
    const { greeting, name } = this.props;
    return (
      <>
        <h1>Greeting for {name}</h1>
        <div>{greeting}</div>
      </>
    );
  }
}
```

In Listing 1 sehen wir den Ausgangspunkt unserer Komponente, die aus einer _render_-Methode besteht, in der direkt zwei Elemente, ein _h1_ für die Überschrift und ein div für einen Gruß gerendert wird. Wir müssen nicht zwischen verschiedenen Stellen im Editor hin- und her navigieren, um zu verstehen, wie die Komponente funktioniert und was sie ausgibt.

Während der weiteren Entwicklung der Komponente wird die Logik zum Rendern der Überschrift oder des Grußes jedoch komplexer, vielleicht müssen zum Beispiel Event-Listener oder Styling hinzugefügt werden. Vielleicht soll auch abhängig von einem der beiden Properties unterschiedlich gerendert werden. Jedenfalls wird die _render_-Methode langsam unübersichtlich. Die nächste Stufe im Evolutionsprozess könnte aussehen, wie in Listing 2 dargestellt: das konkrete Rendern der beiden Teile (Überschrift, Gruß) wird in eigene Methoden ausgelagert, die aber innerhalb der Komponenten-Klasse verbleiben. Vorteil dieses Ansatzes: die _render_-Methode wird wieder übersichtlich, da sie nur noch als eine Art Wrapper dient. Die „wirkliche“ Funktionalität ist aber weiterhin sehr nahe beieinander. Außerdem müssen wir bei diesem Refaktoring noch nicht anfangen, Properties und/oder State an die extrahierten Methoden zu übergeben, da diese genau wie die _render_-Methode auf Properties und State zugreifen können.

**Listing 2:**

```jsx
export default class Greeting extends React.Component {
  renderName() {
    return (
      <h1 style={myStyles} onClick={myClickHandler}>
        {this.props.name}
      </h1>
    );
  }

  renderPhrase() {
    /*... */
  }
  render() {
    return (
      <>
        {this.renderName()}
        {this.renderPhrase()}
      </>
    );
  }
}
```

Irgendwann reicht aber auch diese Aufteilung möglicherweise nicht mehr aus. Es fällt zum Beispiel schwer, die beiden extrahierten _render_-Methoden einzeln zu testen. Aus diesem Grund können nun für Titel und Gruß eigene Komponenten extrahiert werden, die allerdings zunächst „privat“ sind, also innerhalb derselben Datei wie die _Greeting_-Komponente verbleiben und nicht oder nur für den Test exportiert werden (Listing 3).

**Listing 3:**

```jsx
// GreetingName und GreetingPhrase sind nicht außerhalb dieser Datei
// sichtbar
class GreetingName extends React.Component {
  /* ... */
}
class GreetingPhrase extends React.Component {
  /* ... */
}

export default class Greeting extends React.Component {
  render() {
    return (
      <>
        <GreetingName name="..." />
        <GreetingTitle phrase="..." />
      </>
    );
  }
}
```

Werden die beiden extrahierten Komponenten zu groß, so dass die ganze Datei unübersichtlich wird, oder die Komponenten zum Beispiel auch an anderen Stellen der Anwendung wiederverwendet werden sollen, werden sie schließlich in jeweils eigene Dateien verschoben. Je nach Fachlichkeit, können sie im selben Ordner wie die Greeting-Komponente verblieben (Listing 4).

**Listing 4:**

```jsx
// GreetingName.js
export default class GreetingName extends React.Component {
  /* ... */
}


// GreetingPhrase.js
export default class GreetingPhrase extends React.Component {
  /* ... */
}


// Greeting.js
import GreetingName from "./GreetingName";
import GreetingPhrase from "./GreetingPhrase";
export default class Greeting extends React.Component{
  /* ... */
}

```

Besteht die Anwendung aus mehr als nur einem fachlichen Modul, können die Komponenten, die jeweils Modul-spezifisch sind und zu einer Fachlichkeit gehören, in eigenen Ordnern zusammengefasst werden. Hierbei empfiehlt es sich, nach Fachlichkeit und nicht nach Technik zu gruppieren. Innerhalb eines solchen „Feature-Verzeichnisses“ kann die zentrale Komponente, die von anderen Teilen der Anwendung genutzt werden soll, über die _index.js_-Datei exportiert werden. Auf diese Weise können die Verwender der Komponente beim Import einfach den Namen des Verzeichnisses hinschreiben, unabhängig davon, wie das Feature-Verzeichnis intern aufgebaut ist (Listing 5). Außerdem kann auf diesem Weg kontrolliert werden, dass die weiteren „privaten“ Komponenten innerhalb des Verzeichnisses nicht von außerhalb verwendet werden.

**Listing 5:**

```jsx
// AccountSettings/index.js
export { default } from "./AccountSettingsComponent";

// Greeting/index.js
export { default } from "./Greeting";


// GreetingApp.js
// (Verwender; import erfolgt über den Verzeichnisnamen)
import Greeting from "./Greeting";
import AccountSettings from "./AccountSettings";
```

Gemäß dem oben genannten Colocation-Prinzip gehören in diese Feature-Verzeichnisse nicht nur die Komponenten selber, sondern auch alle weiteren Artefakte, die von der Komponente genutzt werden, beispielsweise CSS-Dateien, Redux Reducer oder auch die Test-Klassen. Eine exemplarische Ordner- und Dateistruktur ist in Abbildung 1 zu sehen.

![Abbildung 1:](/uploads/react-enterprise/react-enterprise-1.png 'Abbildung 1: Komponenten mit all ihren Artefakten werden in Feature-Verzeichnissen zusammengefasst')

_Abbildung 1: Komponenten mit all ihren Artefakten werden in Feature-Verzeichnissen zusammengefasst_

Die nächste Stufe in der Evolution kann jetzt das rauslösen einzelner Feature-Verzeichnisse zu eigenständigen npm-Modulen sein. Das kann zum Beispiel dann sinnvoll sein, wenn unterschiedliche Teams die Module bearbeiten sollen oder die Komponenten in weiteren Projekten verwendet werden sollen. Die Module können dann in eigenen Git-Repositories verwaltet und als npm-Modul den anderen Teams zur Verfügung gestellt werden. Zum Veröffentlichen von npm-Paketen wird eine Registry (ähnlich wie bei Maven) benötigt. Hierfür kann zum Beispiel Nexus verwendet werden. Alternativ gibt es mit [Verdaccio](https://verdaccio.org/) eine sehr leichtgewichtige Open-Source-Registry, die sehr gut für das interne Hosting von npm-Paketen geeignet ist. Möchte man sich den Overhead mit eigenständigen Git-Repositories für jedes Modul sparen, kann man den Mono-Repo Ansatz verfolgen. Hierbei werden mehrere Module innerhalb eines einzigen Git-Repositories versioniert, aber jeweils eigenständig veröffentlicht. Passende Tools dafür sind [Yarn Workspaces](https://yarnpkg.com/lang/en/docs/workspaces) und [Lerna](https://lernajs.io/).

## Fehlerbehandlung zur Laufzeit

Seit React 16.3 gibt es eine neue „virtuelle“ Komponente in React, die während der Entwicklung hilft, typische Programmierfehler mit React zu verhindern. Diese Komponente nennt sich _StrictMode_ und kann auf oberster Ebene der eigenen Komponentenhierarchie, also beispielsweise in der App-Komponente eingebunden werden. Wenn die Komponente verwendet wird, gibt React – nur im Entwicklungsmodus – auf der Browser Konsole mögliche Probleme in der Anwendung aus, etwa wenn Lifecycle-Methoden verwendet werden, die deprecated sind. Die konkreten Prüfungen, die durch die Verwendung der _StrictMode_-Komponente durchgeführt werden, sollen stetig erweitert werden und werden wohl insbesondere mit den angekündigten Features zum asynchronen Rendering noch relevanter werden, da hier ein höheres Fehlerpotential etwa bei der falschen Nutzung von Lifecycle-Methoden vorhanden ist. In Listing 6 ist die exemplarische Verwendung der Komponente zu sehen, Abbildung 2 zeigt die Ausgabe einiger von der Komponente gefundenen Probleme auf der Konsole.

![Abbildung 2:](/uploads/react-enterprise/react-enterprise-2.png 'Abbildung 2: Der StrictMode gibt potentielle Problem aus')

_Abbildung 1: Der StrictMode gibt potentielle Problem aus_

**Listing 6:**

```jsx
import React from 'react';

class GreetingApp extends React.Component {
  render() {
    return <React.StrictMode>hier kommt die Anwendung</React.StrictMode>;
  }
}
```

Natürlich kann es trotz _StrictMode_-Komponente zur Laufzeit weiterhin zu Fehlern kommen. Werden diese beim Rendern nicht ordentlich behandelt, führt das häufig dazu, dass statt der Anwendung im Browser nur noch eine leere Seite zu sehen ist, was für Anwender nicht sehr hilfreich ist.
Um dieses Problem zu adressieren, ist mit React 16 eine neue Lifecycle-Methode eingeführt werden, die _componentDidCatch_ heißt. Diese Methode wird von React aufgerufen, wenn es in einer unterliegenden Komponente beim Rendern zu einem Fehler gekommen ist. Die Methode kann dann auf diesen Fehler reagieren, in dem sie zum Beispiel eine aussagekräftige Fehlermeldung rendert oder die Daten zur Alarmierung an einen Logserver schickt. Komponenten, die diese Methode implementieren werden Error Boundaries genannt, weil sie verhindern, dass Fehler in der Anwendung weiter nach oben durchschlagen. Sie können je nach gewünschter Fehlerbehandlung auf jeder Ebene in der Komponentenhierarchie der Anwendung hinzugefügt werden. Fehler, die beim Rendern in einer Komponente aufgetreten sind, werden von React in der Komponenten-Hierarchie solange nach oben weitergereicht, bis eine Error Boundary-Komponente gefunden wurden. Listing 7 zeigt die Verwendung einer solchen Komponente.

**Listing 7:**

```jsx
// Komponente zur Fehlerbehandlung (“Error Boundary”)
class ErrorHandler extends React.Component {
  componentDidCatch(error, errorInfo) {
    // Fehler ist aufgetreten
    // An dieser Stelle könnte der Fehler auch an einen
    // Log- oder Monitoring-Dienst gesendet werden
    this.setState({ hasError: true });
  }

  render() {
    return this.state.hasError ? (
      <h1>Ein Fehler aufgetreten!</h1>
    ) : (
      this.props.children
    );
  }
}

// Verwendung des Error Handlers in der App-Komponente
// (kann auch auf jeder anderen Ebene in der Komponentenhierarchie erfolgen)
class GreetingApp extends React.Component {
  render() {
    return (
      <ErrorHandler>
        <Greeting />
      </ErrorHandler>
    );
  }
}
```

## TypeScript

Ein Problem bei der Entwicklung von JavaScript- bzw React-Anwendung ist, dass die Sprache nicht über ein statisches Typ-System, wie etwa Java, verfügt. Dadurch ist das Schreiben von Code nicht immer einfach, weil es zum Beispiel nicht immer offensichtlich ist, welche Parameter eine Funktion erwartet, von welchem Typ diese sein müssen, und was die Funktion zurückliefert.

Mit den _PropTypes_ in React gibt es immerhin eine Möglichkeit, die erwarteten Properties, und damit die Schnittstelle, einer Komponente zu beschreiben. Dieser Ansatz ist jedoch nur bedingt ausreichend: zum einen erfolgt die Überprüfung, ob die Komponente korrekt verwendet wird (also ob alle erwarteten Properties korrekt übergeben wurden) erst zur Laufzeit und nicht schon während des Builds bzw zur Entwicklungszeit. Zum anderen können mit den PropTypes lediglich die Properties einer Komponente beschrieben werden. Der weitere JavaScript-Code der Anwendung profitiert nicht von den PropTypes. Konsequenter ist da die Verwendung eines statischen Typ-Systems für JavaScript. Grundsätzlich gibt es mit [Flow](https://flow.org/) und [TypeScript](http://www.typescriptlang.org/) zwei solcher Systeme, die Typ-Sicherheit in JavaScript-Anwendungen bringen und die beide hervorragend zusammen mit React funktionieren. Auf Grund der sehr hohen Verbreitung und der guten Toolunterstützung ist aus meiner Sicht TypeScript die bessere Wahl - insbesondere wenn es um langlebige Projekte geht (man würde übrigens von TypeScript-Code und -Know-How auch dann noch profitieren, wenn das Projekt auf Angular oder Vue umgestellt würde, denn auch mit diesen beiden Frameworks lässt sich TypeScript entwickeln). Die neue Outlook Webanwendung von Microsoft ist übrigens ebenfalls mit React und TypeScript entwickelt.

Im Gegensatz zu Flow ist TypeScript nicht nur ein Typ-System, sondern eine eigene Sprache, die auf JavaScript aufbaut. So ist jeder gültige JavaScript-Code grundsätzlich auch gültiger TypeScript-Code. Mit TypeScript lässt sich der eigene Code also einerseits um Typ-Informationen ergänzen, andererseits bringt TypeScript auch einige Erweiterungen für JavaScript mit, beispielsweise Sichtbarkeiten (_private_ und _protected_) an Klassen oder Aufzählungstypen (_enum_).

Um TypeScript für React-Komponenen zu verwenden, werden Typ-Definitionen für die Properties sowie den State einer Komponente angelegt. Der TypeScript Compiler ist dann bereits zur Entwicklungszeit in der Lage zu erkennen, ob eine Komponente korrekt aufgerufen wird, also ob alle erforderlichen Properties übergeben wurden und ob diese vom erwarteten Typ sind. Außerdem stellt TypeScript die korrekte Verwendung des _state_-Objektes sicher. Zum einen wird definiert, wie das State-Objekt überhaupt aussieht, das heißt, aus welchen Einträgen es sich zusammensetzt, wie diese heißen und von welchem Typ sie sind. Wird in der Komponente auf einen Eintrag im State zugegriffen, der gar nicht definiert ist, gibt es bereits in der IDE eine Fehlermeldung. Dasselbe gilt auch für das Setzen des States: TypeScript stellt sicher, dass nur Eigenschaften gesetzt werden, die für den State definiert sind und dass diese vom korrekten Typ sind. Dieses Verhalten erinnert sehr an die gewohnte Entwicklung von Java-Anwendungen.

TypeScript stellt übrigens auch sicher, dass die Properties einer Komponente innerhalb der Komponenten nicht versehentlich verändert werden und das auch das Verändern des State-Objektes korrekt ist. So gibt TypeScript beispielsweise eine Fehlermeldung aus, wenn der State versehentlich nicht mit _setState_ sondern – außerhalb des Konstruktors - durch eine Zuweisung an _this.state_ verändert wird.

Um Properties und State für die eigene Komponente festzulegen, wird jeweils ein Interface dafür angelegt. Im Gegensatz zu Java-Interfaces können TypeScript-Interfaces auch Felder enthalten. Außerdem muss in TypeScript explizit angegeben werden, wenn ein Feld den Wert _null_ oder _undefined_ annehmen darf.

Listing 8 zeigt die Definition der Properties und des States für die Komponente _GreetingEditor_. Die Komponente erwartet demnach als Properties ein String mit dem Namen _initialName_ und eine Callback-Funktion mit dem Namen _onSave_. Die Callback-Funktion wiederrum wird mit einem Parameter aufgerufen (_newGreeting_) und liefert nichts zurück.

Der interne State der Komponente besteht aus den zwei Pflicht-Feldern _name_ und _phrase_, die jeweils vom Typ _String_ sind.

An der Komponenten-Klasse werden die beiden Interfaces als Type-Argument ähnlich wie bei einem Generic in Java angegeben.

**Listing 8:**

```tsx
interface GreetingEditorProps {
  initialName: string;
  onSave(newGreeting: NewGreeting): void;
}

interface GreetingEditorState {
  name: string;
  phrase: string;
}

class GreetingEditor extends React.Component<
  GreetingEditorProps,
  GreetingEditorState
> {
  // Initialer State
  readonly state: GreetingEditorState = {
    phrase: '',
    name: '',
  };

  render() {
    /* ... */
  }
}
```

Für den Verwender der Komponente ändert sich syntaktisch nichts. Allerdings gibt TypeScript einen Fehler aus, wenn die Properties nicht korrekt angegeben werden. Abbildung 2 zeigt exemplarisch, zwei Fehlermeldungen – im ersten Beispiel wird die _GreetingEditor_-Komponente nicht korrekt aufgerufen (das Pflicht-Property _intialGreeting_ ist nicht angegeben) und im unteren Beispiel wird innerhalb der Komponente auf eine Eigenschaft im State zugegriffen, die nicht vorhanden ist.

![Abbildung 3:](/uploads/react-enterprise/react-enterprise-3.png 'Abbildung 3: TypeScript Fehlermeldungen ')

Neben dem frühzeitigen Erkennen von Fehlern schon während der Entwicklung in der IDE und im Build-Prozess hilft TypeScript auch bei der Suche nach Referenzen auf Variablen, Methoden und Klassen und bietet sehr hilfreiches Code-Completion. Auch Refaktoring von Code, wie aus der Java-Entwicklung gewohnt, etwa umbenennen von Methoden und Variablen sind mit TypeScript möglich. Gerade aus diesem Grund ist die Verwendung von TypeScript in React-Projekten für mich nahezu unumgänglich.

## Testen von React-Anwendungen

React-Anwendungen lassen sich sehr gut mit Unit- und Integrationtests testen. Üblicherweise kommt hierbei das Testframework [Jest](https://jestjs.io/) zum Einsatz. Jest enthält alle Bestandteile, die für das Testen notwendig sind, neben einem Test-Runner, Assertions und einer Mock API auch eine fertig konfigurierte DOM Umgebung, so dass React Komponenten im Test sogar mit dem DOM interagieren können. Auf diese Weise kann nicht nur sichergestellt werden, dass eine Komponente korrekt gerendert wird (also die erwarteten DOM Elemente erzeugt werden) sondern dass auch Lifecycle-Methoden wie _componentDidMount_ und Interaktionen korrekt funktionieren (zum Beispiel Events).

Eine Besonderheit in Jest sind die sogenannten Snapshot Tests. Dabei wird ein JSON-Objekt beim ersten Testlauf in eine Datei geschrieben, die auch in die Versionsverwaltung eingecheckt wird. Bei allen folgenden Testdurchläufen wird das im Test neu erzeugte JSON-Objekt mit dem gespeicherten Objekt (Snapshot) verglichen. Gibt es Unterschiede zwischen den beiden Objekten schlägt der Test zunächst fehl. Sind die Unterschiede erwartet, weil sich das Verhalten der getesteten Anwendung verändert hat, kann der Snapshot aktualisiert werden. Ansonsten handelt es sich um einen „echten“ Fehler, der in der Anwendung behoben werden muss. Auf diese Weise lässt sich auch recht schnell sicherstellen, dass eine React-Komponente korrekt gerendert wird, denn das Ergebnis eines Renderings lässt sich als JSON-Objekt abfragen. Dieses Objekt wird dann von Jest persistiert und mit dem Ergebnis der folgenden Renderings verglichen. Hat sich das Ergebnis verändert, schlägt der Test zunächst fehl und man kann überprüfen, ob die Änderung erwartungsgemäß war (und dann den Snapshot aktualisieren) oder ob es sich tatsächlich um einen Fehler in der Komponente handelt. Auf diese Weise lassen sich sehr schnell erste Tests für die eigenen Komponenten entwickeln.

Um innerhalb des Tests nicht nur das Render-Ergebnis zu überüfen, sondern auch mit der Komponente zu interagieren um die korrekte Funktionalität sicherzustellen, wird in der Regel das Framework [enzyme](https://airbnb.io/enzyme/) verwendet. Dieses Framework stellt unter anderem Hilfsfunktionen zur Verfügung, mit denen innerhalb einer Komponente im Test nach DOM-Elementen gesucht werden können. Die gefunden Elemente lassen sich dann überprüfen (z.B. ob ein bestimmtes Property gesetzt ist) und es können darauf Events simuliert werden (z.B. Textänderungen in einem Eingabefeld oder das Klicken eines Buttons).

Da diese Art von Tests nicht im Browser laufen, ist deren Ausführung in der Regel auch relativ schnell, so dass sie kontinuierlich während der Entwicklung ausgeführt werden können. Jest verfügt über einen watch-Modus, in dem bei Code-Änderungen sogar nur die relevanten Tests neu ausgeführt werden.

**Listing 9:**

```jsx
test('it should render correct', () => {
  // Komponente in JSON Objekt rendern
  const tree = renderer.create(<GreetingEditor onSave={jest.fn()} />).toJSON();

  // Sicherstellen, dass das JSON Objekt mit der gerenderten Komponente
  // der bisher gespeicherten Version entspricht
  expect(tree).toMatchSnapshot();
});

test('enablement should work', () => {
  // Komponente mit Enzyme rendern
  const greetingDetail = enzyme.shallow(<GreetingEditor onSave={jest.fn()} />);

  // Sicherstellen, dass Save Button disabled ist
  expect(greetingDetail.find('button[children="Save"]').prop('disabled')).toBe(
    true
  );

  // Eingaben in Textfeldern simulieren
  greetingDetail
    .find('input[name="name"]')
    .simulate('change', changeEvent('name', 'Susi'));
  greetingDetail
    .find('input[name="greeting"]')
    .simulate('change', changeEvent('greeting', 'Hello'));

  // Sicherstellen, dass der Save Button nun enabled ist
  expect(greetingDetail.find('button[children="Save"]').prop('disabled')).toBe(
    false
  );
});
```

Listing 9 zeigt zwei Testfälle für die _GreetingEditor_-Komponente, die aus zwei Textfeldern (_name_ und _greeting_) und einem Button zum Speichern besteht. Der erste Testfall stellt mit einem Snapshot-Test lediglich sicher, dass die Komponente wie erwartet gerendert wird. Im zweiten Test wird das Ausfüllen die beiden Eingabefelder simuliert und hinterher überprüft, dass der Speichern-Button enabled ist.

## End-to-End-Tests mit TestCafe

Um sicherzustellen, dass die eigene React-Anwendung auch im Browser unter realen Bedingungen wie gewünscht funktioniert, müssen end-2end-Tests geschrieben werden, die im Browser ausgeführt werden und gegen die richtige Anwendung laufen. Innerhalb des Browsers wird das User-Verhalten simuliert, in dem zum Beispiel in Eingabefelder oder Buttons geklickt wird. Das alles spielt sich auf Ebene des DOMs ab, es werden keine React- oder Anwendungsspezifischen APIs verwendet, da die Anwendung als Black-Box betrachtet wird. Im Java-Umfeld ist Selenium ein weitverbreitetes Tool zum Entwickeln von end-2end-Tests, das auch für React-Anwendungen genutzt werden kann.

Mit dem Open-Source-Tool [TestCafe](https://devexpress.github.io/testcafe/) gibt es aber eine sehr interessante Alternative zu Selenium. TestCafe wird als npm-Modul dem eigenen Projekt hinzugefügt und bringt von Haus aus Support für viele gängige Browser mit. Unterstützung für weitere Browser können über Plug-ins zusätzlich installiert werden. Das npm-Modul mit dem Plug-in für den [Puppeteer-Browser](https://pptr.dev/) (eine headless-Variante von Chrome) installiert dabei nicht nur das entsprechende Plug-in, sondern auch Puppeteer selber. Zum Ausführen der Tests auf einem CI Server ist das sehr praktisch, denn dort reicht ein gewöhnliches _npm install_, um Testcafe samt Abhängigkeiten und Browser zu installieren und die Tests ausführen zu können.

TestCafe-Tests werden in JavaScript oder TypeScript geschrieben, so dass man die Sprache verwenden kann, mit der auch die zu testende React-Anwendung geschrieben ist. Sie beginnen mit einem _Fixture_, mit dem unter anderem festgelegt wird, mit welcher URL im Browser der Test beginnen soll. Innerhalb der Testfälle werden dann mit _Selektoren_ DOM Elemente im Browser gesucht, die überprüft oder gesteuert werden sollen. Die Suche erfolgt in der Regel an Hand von CSS Regeln (zum Beispiel einem Klassennamen oder der ID eines Elementes), wobei TestCafe so schlau ist, eine Zeitlang zu warten, wenn das Element nicht sofort im Browser vorhanden ist. Auf diese Weise muss man sich im Testfall in der Regel keine Gedanken um Timeouts oder Verzögerungen machen, etwa wenn man auf ein Element wartet, das erst nach der Verarbeitung einer asynchronen Server-Anfrage in der Anwendung erscheint.

Auf den selektierten Elementen können dann Aktionen, wie Button Klicks oder Texteingaben, ausgeführt werden. Anschließend wird mit Assertions sichergestellt, dass die Eigenschaften der Elemente den erwarteten Werten entsprechen, also zum Beispiel, ob ein Button nach der Eingabe in ein Textfeld den korrekten _enabled_-Wert aufweist. Die entsprechende TestCafe API ist dabei eingängig bedienbar, so dass die Tests zügig zu schreiben sind und gut verständlich bleiben - insbesondere wenn die Tests mit TypeScript implementiert werden. Mit [TestCafe Live](https://github.com/DevExpress/testcafe-live) steht eine – experimentelle – Erweiterung für TestCafe zur Verfügung, mit der Testfälle automatisch erneut ausgeführt werden, sobald sich der Test- oder Anwendungscode in der IDE verändert hat. Da dabei nicht für jede Testausführung eine neue Browser-Instanz gestartet wird, geht die Ausführung eines Tests auch relativ schnell.

Wenn während der Testausführung Fehler auftreten, weil ein Element nicht gefunden wird oder eine Assertion fehlschlägt, kann TestCafe automatisch in den Debug-Modus wechseln. Im Debug-Modus kann die gerade angezeigte Seite mit den im Browser verfügbaren Entwicklertools untersucht werden und der Testfall Schritt-für-Schritt weitergeführt werden. Werden die Tests auf einem CI-Server ausgeführt, wo der Debug-Modus nicht weiterhilft, kann TestCafe bei Fehlern automatisch Screenshots erstellen (funktioniert auch bei Browsern, die headless ausgeführt werden) und die Ausgaben auf der Browser-Console aufbewahren. Auf diese Weise kann auch die Ursache für einen auf dem Server fehlgeschlagenen Test meist schnell gefunden werden.

In Listing 10 ist ein Testfall für die _GreetingEditor_-Komponente implementiert. Der Test füllt zunächst die beiden Eingabe-Felder aus und überprüft dann, ob der Speichern Button _enabled_ ist. Der Testfall entspricht inhaltlich dem oben genannten Jest-Test, wird jetzt allerdings im realen Browser ausgeführt.

**Listing 10:**

```jsx
import { Selector } from 'testcafe';
fixture`Greeting Editor`.page`http://localhost:8080`;

test('enablement of save button', async t => {
  const nameSelector = Selector("input[name='name']");
  const phraseSelector = Selector("input[name='phrase']");
  const saveSelector = Selector('button').withText('Save');

  await t
    // Save Button soll disabled sein
    .expect(saveSelector.hasAttribute('disabled'))
    .ok()

    // Eingabefelder ausfuellen
    .typeText(nameSelector, 'Susi')
    .typeText(phraseSelector, 'Hello')

    // Save Button soll jetzt nicht mehr disabled sein
    .expect(saveSelector.hasAttribute('disabled'))
    .notOk();
});
```

## Fazit

React selber macht kaum eine Aussage darüber, wie Anwendung strukturiert sein sollten oder wie die Architektur auszusehen hat. Allerdings ist React sehr flexibel, so dass die Verwendung auf eigene Projekt-Bedürfnisse abgestimmt werden kann. Durch die Verwendung eines statischen Typ-Systems, wie TypeScript können viele Fehler bereits in der Entwicklung erkannt und vermieden werden. Darüber hinaus gibt es sowohl für Unit- und Integrationtests als auch für end-to-end-Tests sehr ansprechende Lösungen, die – wie von Backend-Anwendungen gewohnt – innerhalb des CI-Builds ausgeführt werden können. Es spricht also nichts dagegen, React auch im Enterprise Kontext einzusetzen!
