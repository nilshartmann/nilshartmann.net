---
title: "Fünf Gründe für React"
date: '2015-08-11T22:00:00.000Z'
summaryMarkdown: 'React ist ein JavaScript-Framework für die Entwicklung von UI-Komponenten. Dabei lassen sich die Komponenten sowohl im Web als auch nativ auf Mobilgeräten darstellen. Für die Website JAXenter habe ich fünf Gründe aufgeschrieben, warum es sich lohnt, sich React genauer anzusehen.'
image_position: 'before_summary'
image_expanded: 'true'
tags:
 - JavaScript
 - React
---

*Dieser Artikel ist ursprünglich auf [JAXenter](https://jaxenter.de/5-gruende-sich-das-javascript-framework-react-genauer-anzuschauen-24769) erschienen.*

Das React Framework wurde 2013 von Facebook als Open-Source-Lösung zur Verfügung gestellt und erfreut sich seitdem zunehmender Beliebtheit unter Web-Entwicklern. So gibt es schon eine ganze Reihe namhafter Webseiten, die React bereits im produktiven Einsatz haben. Neben Facebooks eigenen Anwendungen sowie Instagram kommt das Framework beispielsweise auf der Website des Wall Street Journals, des Foto-Dienstes Smugmug oder auch bei Airbnb zum Einsatz.

Im Folgenden möchte ich einige Gründe nennen, warum es sich lohnt, sich mit dem Framework näher zu beschäftigen und es für eigene Projekte in Betracht zu ziehen.

**Einfachheit:** React hat eine sehr steile Lernkurve, denn es ist sehr einfach, damit Komponenten zu bauen. Eine Komponente ist in React nicht viel mehr als eine JavaScript-Klasse, die die gesamte Logik zur Darstellung der Komponente enthält. Um eine Komponente zu schreiben, muss man nicht einmal eine Template-Sprache lernen, denn der UI-Teil einer Komponente wird in React mit JavaScript geschrieben. Damit dieser Code auch lesbar bleibt, bringt React eine JavaScript-Erweiterung mit dem Namen JSX mit, die insbesondere das Schreiben von DOM-Elementen in JavaScript vereinfacht.

**Kontinuität:** Bislang gibt es noch keine stabile Version 1.0 von React, dafür werden aber regelmäßige Minor-Versionen veröffentlicht. Dabei kommt es natürlich auch immer wieder zu (kleineren) inkompatiblen API-Changes. Diese sind aber immer explizit dokumentiert, und es ist jeweils beschrieben, wie bestehende Anwendungen ggf. angepasst werden müssen. Da Facebook das Framework intern selber verwendet, achten die Entwickler natürlich schon aus eigenem Interesse auf einen sauberen und einfachen Migrationspfad.

**Integrierbarkeit:** React versteht sich als reines View-Framework. Es macht darüber hinaus keine Annahmen, wie die anderen Teile einer Anwendung aussehen sollten: Man kann selber entscheiden, wie man Routing umsetzt, Server-Zugriffe gestaltet oder andere Nicht-UI-Dienste implementiert. Dadurch lässt sich React hervorragend mit anderen Bibliotheken kombinieren. Für bereits bestehende Anwendungen ist ein sanfter Migrationspfad möglich. Man kann neue Komponenten einfach in React schreiben und bestehende Komponenten nach und nach auf React portieren. Wer Backbone oder AngularJS verwendet, kann React für die View-Schicht einer Anwendung einsetzen.

**Lebendiges Öko-System:** Wie beschrieben, fokussiert sich React auf genau einen Aspekt in der Anwendungsentwicklung. Wenn man Anwendungen baut, möchte man aber auch für die anderen Anwendungsaspekte das Rad nicht immer neu erfinden und beispielsweise einen eigenen Router programmieren müssen. Hier hilft einerseits, wie beschrieben, die sehr gute Integrierbarkeit von React weiter. Andererseits gibt es mittlerweile ein prosperierendes React-Ökosystem, das bereits eine ganze Reihe von maßgeschneiderten React-Komponenten enthält. Neben einem Router gibt es Frameworks zum Animieren und Stylen von Komponenten, zur Integration von Graphikbibliotheken wie D3js und viele weitere. Mit React Native steht ein Projekt zur Verfügung, das Komponenten auf Mobilgeräten nativ darstellen kann. Dadurch lässt sich die gleiche Technologie zur Entwicklung sowohl von Web- als auch von nativen Anwendungen verwenden.

Für die Entwicklung großer Anwendungen steht das von Facebook beschriebene Architekturmodell “Flux” zur Verfügung, von dem es bereits zahlreiche Implementierungen gibt.

**Entwicklertools:**  „Um gute UIs und gute Anwendungen entwickeln zu können, braucht es auch gute Entwickertools“ – das ist ein Grundsatz der React Community. Und so wird neben der Weiterentwicklung des Frameworks auch immer aktiv an einer guten Unterstützung für Entwicklung und Entwicklungsprozesse gearbeitet. Dazu gehören neben Editoren, die heute schon React-Unterstützung beinhalten (unter anderem IntelliJ IDEA und Webstorm, der Open-Source-Editor atom.io oder Visual Studio) auch Tools zur Qualitätssicherung (z.B. ES6Lint) und den Buildprozess (z.B. Webpack).

Wenn Sie gerne mit einem Typensystem arbeiten, stehen dafür mit Flow von Facebook sowie TypeScript von Microsoft zwei Systeme zur Verfügung, die Unterstützung für React bzw JSX mitbringen.

## Fazit

Obwohl React noch nicht in einer Version 1.0 vorliegt, kann ich nur empfehlen, sich das Framework sehr genau anzusehen und für den Einsatz in eigenen Projekten schon jetzt in Erwägung zu ziehen. React ist sehr stabil und hat sich bereits in vielen Projekten in der Praxis bewährt. Dazu gibt es eine sehr aktive und offene Community, die ein lebendiges Ökosystem geschaffen hat, das bereits auf viele Fragen und Problemstellungen solide Antworten bietet.  
