---
title: "Von Wordpress nach React..."
date: '2015-08-16T20:32:04.000Z'
summaryMarkdown: 'Schon seit einer ganzen Weile wollte ich meine Wordpress-basierte Homepage auf ein "leichtgewichtigeres" System umstellen. Ursprünglich hatte ich dazu Jekyll vorgesehen, doch dann kam React...'
image: '/uploads/blaubeeren.jpg'
tags:
 - JavaScript
 - React
 - Softwareentwicklung
 - Jekyll
 - Hapi
 - iojs
---

Die letzten beiden "Versionen" meiner Homepage waren zunächst Drupal- dann Wordpress-basiert. Ein Problem an den beiden Systemen: sie sind für so kleine Seiten wie diese hier aus meiner Sicht völlig überdimensioniert. Auf Grund der Komplexität der Systeme stehen die damit verbundenen Aufwände zur Administration und individuellen Anpassung (Styling, Layout, ...) in keinem Verhältnis zum  Nutzen bei einer so kleinen Seite. Zudem gibt es sehr häufig (Sicherheits-)Updates, die eingespielt werden müssen. Aus diesem Grund wollte ich schon länger einen weiteren Technologiewechsel wagen.

Dafür hatte ich zunächst [Jekyll](http://jekyllrb.com/) ins Auge gefasst: ein sehr einfaches System, das statische Webseiten generieren kann. Perfekt auch geeignet, um die Seiten z.B. über *GitHub Pages* zu hosten. Dann aber habe ich mich mehr und mehr mit [React](http://facebook.github.io/react/) beschäftigt und einen Prototypen gebaut. Das hat so gut geklappt, dass ich gleich dabei geblieben bin. Dazu habe ich Seite einfach in diverse (React-)Komponenten aufgeteilt. Es beispielsweise eine Komponente, die sich um das Layout kümmert, eine Komponente für Listendarstellungen, eine Komponente zum Anzeigen von [Flickr-Bildern](https://www.flickr.com/photos/nilsha) und eine Komponente zum Schreiben und Bearbeiten der Inhalte. 

Was mir sehr gut dabei gefällt ist, dass es sehr einfach ist, die Seite zu verändern, zum Beispiel das Layout umzustellen oder neue Features hinzuzufügen - denn ich habe noch eine ganze Reihe von Ideen, die ich noch umsetzen möchte. Die Anwendung ist natürlich auch deshalb sehr einfach, weil ich nicht den Anspruch habe, diese als "generische" und allgemein einsetzbare Lösung zu entwickeln. Falls ich jemals auf die Idee kommen sollte, weitere Websites zu bauen, kann ich ja immer noch Abstraktionen zur Wiederverwendung einziehen. Aber dafür muss es erstmal den Bedarf geben...

Auf dem Server läuft übrigens [iojs](https://iojs.org/en/index.html) mit [Hapi](http://hapijs.com/). Darüber werden sowohl die statischen als auch dynamischen (über REST-Api) Inhalte zur Verfüng gestellt.

Sobald ich die Zeit finde, werde ich den Source Code für die Seite auf GitHub veröffentlichen (trotz der Konzentration auf konkret  *diese* Seite, ist ja vielleicht die eine oder andere Idee für Euch auch interessant). Vorher will ich dann aber doch den Source-Code noch ein kleines bisschen aufräumen, denn wie in jedem "echten" Projekt sind zum Schluss ein paar technische Schulden gemacht worden ;-)  
