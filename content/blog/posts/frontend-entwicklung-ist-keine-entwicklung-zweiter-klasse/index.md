---
title: '"Frontend-Entwicklung ist keine Entwicklung zweiter Klasse"'
date: '2018-11-08T07:30:00.000Z'
summaryMarkdown: 'Die Mitglieder der JavaScript Community und ganz speziell die Frontend-Entwickler haben oft mit unfairen Vorurteilen zu kämpfen. Nils Hartmann, Softwareentwickler und -architekt, räumt mit diesen Klischees im Interview zur W-JAX 2018 auf. Außerdem gibt er einen Einblick in die aktuellen Ereignisse rund um React und erklärt, was Micro Frontends sind.'
tags:
  - JavaScript
  - React
  - Artikel
  - GraphQL
---

_Dieses Interview wurde zuerst auf [JAXenter am 8. November 2018](https://jaxenter.de/frontend-entwicklung-react-graphql-interview-hartmann-77297) veröffentlicht._
_Die **Folien zu dem React-Talk "React 2018 - Context API, Suspense, Time Slicing & mehr"** findet ihr [hier auf Speakerdeck](https://speakerdeck.com/nilshartmann/react-2018-context-api-suspense-time-slicing-and-mehr). Die Folien zu dem Talk **"Micro Frontends: JavaScript Integration Pattern"** findet ihr [ebenfalls online](https://bit.ly/wjax-micro-frontends)._

**JAXenter:** Welche aktuellen Entwicklungen gibt es momentan bei React?

**Nils Hartmann:** Die Versionierung von React ist relativ konservativ, und es gibt nur selten Releases, die sich in der Erhöhung der Major-Version widerspiegeln. React 16 ist nun mittlerweile schon fast ein Jahr alt, allerdings sind im Laufe des Jahres die Versionen 16.3 bis 16.6 veröffentlicht worden, die einige interessante neue Features enthalten. So wurde mit 16.3 eine nun auch offiziell unterstützte Context-API vorgestellt, und in React 16.4 wurde Support für PointerEvents hinzugefügt. Alles in allem kann man sagen, dass sich React stetig, aber nicht im Eiltempo voran bewegt. Das liegt auch daran, dass neue Features ausreichend Stabilität haben sollen, bevor sie in ein Release aufgenommen werden. Außerdem wird viel Wert auf Abwärtskompatibilität gelegt.

Aktuell wird aber an größeren neuen Features gearbeitet, die in einer Version 16.7 eventuell gegen Ende des Jahres veröffentlicht werden (die React-Entwickler sind gewöhnlich sehr zurückhaltend, was das Ankündigen von konkreten Release-Nummern und -Erscheinungsdaten angeht). Zunächst geht es dabei um zwei Features, die auf eine verbesserte User Experience einzahlen. Zum einen geht es darum, “unwichtige” Updates der UI unterbrechen zu können und “wichtigere” Updates vorzuziehen („Time Slicing“). So kann zum Beispiel bei begrenzten CPU-Ressourcen verhindert werden, dass die Anwendung beispielsweise beim Darstellen eines Textes in einem Eingabefeld „ruckelt“, weil gerade an anderer Stelle Komponenten aktualisiert werden müssen. React würde in diesem Fall die Eingabe bzw. die Darstellung der Eingabe höher priorisieren und dafür andere Updates hinten anstellen.

Das zweite Feature, „Suspense“ erlaubt es, das Rendern von Komponenten innerhalb einer Hierarchie so lange zu unterbrechen, bis die zur Darstellung erforderlichen Daten (asynchron) geladen wurden. Sobald die Daten geladen sind, setzt React das Rendern ab der unterbrochenen Stelle automatisch fort. Damit wird es zum Beispiel sehr einfach, Nutzern der Anwendung einen Loading Indicator o.Ä. einzublenden. Hiermit könnte aus meiner Sicht ein gerade für React-Neulinge schwieriges Thema, das Arbeiten mit asynchronen Daten-Zugriffen, vereinfacht werden. Ein erster Anwendungsfall für Suspense, das Code Splitting, kann bereits mit React 16.6 eingesetzt werden.

Darüberhinaus gibt es ein Proposal für eine „Hook API“. Diese API soll es Funktionskomponenten ermöglichen, alle React Features zu nutzen, die bislang Klassenkomponenten vorenthalten waren. Also zum Beispiel das Arbeiten mit State oder das Interagieren mit dem DOM. Ein erster Entwurf dieser API ist in React 16.7-alpha enthalten und kann dort bereits ausprobiert werden.

**JAXenter:** Deine Session auf der W-JAX heißt „Micro Frontends: JavaScript Integration Patterns.“ Was sind Micro Frontends – und für welche Einsatzzwecke sind sie sinnvoll?

**Nils Hartmann:** Die Idee hinter Micro Frontends ist, dass man eine große Web-Anwendung zur Entwicklung in mehrere kleine Teile zerlegt, die unabhängig voneinander entwickelt werden können.

Heutzutage sind „moderne“ Web-Anwendungen, die in JavaScript implementiert und auf dem Client ausgeführt werden, sehr mächtig und leistungsfähig, müssen hohen Anforderungen hinsichtlich User Experience, also z.B. Performance, Stabilität, Interaktivität, gerecht werden. Wir sehen außerdem in immer mehr Fällen, dass auch Anwendungen, die in der Vergangenheit als Desktop-Anwendungen implementiert worden sind, in das Web wandern, etwa Outlook, Google Docs oder das Design-Tool Figma. Wir haben es also mit “echten” Anwendungen zu tun und damit einhergehend auch mit den gewohnten Problemen bei der Entwicklung von Anwendungen, z.B. eine große und komplexe Code-Basis, die von mehreren Entwicklerteams bearbeitet werden soll, die in unterschiedlichen Geschwindigkeiten released werden soll und so weiter.

Um darauf zu reagieren, können auch Web-Anwendungen (wie im Backend mit Microservices) in mehrere kleine Stücke aufgeteilt werden, sodass beispielsweise eine Fachlichkeit immer nur von einem Team entwickelt wird und jeweils eigenständig released werden kann.

Wenn man die Anwendung allerdings auseinandernimmt, um sie in getrennten Einheiten zu entwickeln, muss man sie – und hier passt die Analogie mit den Microservices im Backend nicht mehr richtig – spätestens zur Laufzeit wieder zusammensetzen. Und das soll natürlich möglichst nahtlos passieren, denn Anwenderinnen und Anwender sollen schließlich eine Anwendung „aus einem Guss“ erleben und nicht mehrere Einzelteile, die sich im schlimmsten Fall noch unterschiedlich darstellen und verhalten. Um diesen Widerspruch – auseinandernehmen einerseits, zusammensetzen andererseits –, und ob der überhaupt auflösbar ist, ging es in unserem Talk auf der W-JAX.

**JAXenter:** Welche Rolle spielen die JavaScript Integration Patterns bei der Implementierung von Micro Frontends?

**Nils Hartmann:** Web-Anwendungen lassen sich auf mehrere Arten entwickeln. Eine wichtige Unterscheidung ist, ob eine Anwendung mehr oder minder vollständig auf dem Server gerendert wird (und der Browser die fertige Anwendung nur noch darstellen muss), oder ob die Anwendung in JavaScript implementiert und im Client ausgeführt wird. Dementsprechend gibt es auch für diese unterschiedlichen Szenarien jeweils unterschiedliche Wege und Möglichkeiten, Micro Frontends zu bauen.

In unserem Talk konzentrierten wir uns auf die letztgenannte Variante, die JavaScript-basierten Clients, und schauten uns an, welche Möglichkeiten – oder Patterns – es gibt, Single-Page-Anwendungen in kleinere Teile aufzuteilen, so dass sie sich von mehreren Teams getrennt entwickeln lassen. Leider – soviel sei an dieser Stelle gesagt – gibt es dafür keinen Königsweg, sondern man muss immer gucken, an welcher Stelle man bereit ist, Kompromisse einzugehen: entweder in der Entwicklung oder für Anwenderinnen und Anwender.

**JAXenter:** Die JavaScript-Szene hat den Ruf, besonders schnelllebig und fragmentiert zu sein. Mit TypeScript, Node, Angular, React und Vue.js scheinen sich derzeit allerdings einige Konstanten herauszukristallisieren. Können wir da so eine Art Konsolidierung der JavaScript-Welt beobachten?

**Nils Hartmann:** Das ist richtig. Zwar gibt es noch immer nicht den _einen_ Standard-Stack für JavaScript-Anwendungen, aber es zeichnen sich doch gewisse Trends ab. Gleichzeitig bleibt es aber dabei, dass in vielen Bereichen immer noch viel Bewegung herrscht und immer wieder neue Ideen diskutiert und ausprobiert werden.

Dass das so ist und sich vermutlich auch nicht so schnell ändern wird, liegt auch in der Natur der Sache, denn es gibt im JavaScript-Umfeld nicht das _eine_ Konsortium oder die _eine_ Firma, die alles steuert, spezifiziert und weiterentwickelt (wenn man von der Sprache selber absieht). Ich finde aber, davon sollte man sich nicht verrückt machen lassen, denn man muss ja nicht jedes neue Tool und jedes neue Framework gleich in das eigene Projekt einbauen, sondern muss neue Dinge nur adaptieren, wenn man dafür Bedarf im Projekt hat.

**JAXenter:** Wenn du dir die aktuelle Szene der Webentwicklung anschaust – welcher Trend interessiert dich persönlich momentan am meisten?

**Nils Hartmann:** Aktuell finde ich das Thema GraphQL ganz spannend. GraphQL wird häufig als Alternative zu REST bezeichnet und ist eine Sprache mit der Daten vom Server abgefragt werden können. Diese Technologie verspricht etwas mehr Flexibilität als REST, da der Client selber bestimmen kann, welche Daten er für welchen Use-Case laden möchte. Außerdem verfügt GraphQL über ein Typensystem, mit dem die API beschrieben wird. Dadurch ergeben sich sehr interessante Möglichkeiten z.B. für Tooling innerhalb der IDE oder auch Prüfungen zur Laufzeit. Ich denke, GraphQL ist auch schon so weit, dass man es guten Gewissens in eigenen Anwendungen einsetzen kann. Fairerweise muss man aber auch sagen, dass es (noch) weit davon entfernt ist, Mainstream zu sein oder gar REST abzulösen. Trotzdem bin gespannt, wie sich GraphQL in Zukunft weiterentwickelt, welche Lösungen daraus hervorgehen und natürlich auch welche neuen Probleme sich ergeben.

**JAXenter:** Und welchen Missstand würdest du gerne am schnellsten behoben sehen?

**Nils Hartmann:** Ich würde mich freuen, wenn die Frontend-Entwicklung einen ähnlichen Stellenwert bekäme wie die Entwicklung von Services im Backend. Häufig wird die Frontend-Entwicklung immer noch als „Entwicklung zweiter Klasse“ angesehen und „richtige“ Entwicklung fände nur im Backend statt. Dabei ist Frontend-Entwicklung sehr viel mehr, als ein „paar Pixel“ mit CSS hin- und herzuschieben. Immerhin wollen wir, dass unsere Anwendungen auf allen möglichen Geräten in diversen Auflösungen laufen, unter allen möglichen und unmöglichen Netzwerk-Bedingungen, dass sie immer schnell reagieren und natürlich fehlerfrei sind. Das zu erreichen, ist meines Erachtens genauso „richtige“ Software-Entwicklung wie die Entwicklung von Backend-Services.
