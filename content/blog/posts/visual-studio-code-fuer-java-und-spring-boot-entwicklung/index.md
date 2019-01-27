---
title: 'Visual Studio Code für Java und Spring Boot Entwicklung'
date: '2018-10-12T13:53:30.000Z'
summaryMarkdown: 'Mit dem Open-Source-Editor *Visual Studio Code* lässt sich auch Java entwickeln. Wie das funktioniert, demonstriere ich in einem kurzen Video'
image: '/uploads/using-vscode-for-java-and-spring.png'
image_expanded: 'true'
tags:
  - Video
  - Java
  - Softwareentwicklung
  - Visual Studio Code
  - Spring Boot
---

Für die Webentwicklung mit JavaScript und TypeScript verwende ich meistens den Open-Source-Editor [Visual Studio Code](https://code.visualstudio.com/). Der Support für das Schreiben von JavaScript und TypeScript Code ist ausgezeichnet, es gibt Refaktoring-Support und Code Completions, außerdem
kann man Web-Anwendung direkt im Editor oder im Browser debuggen.

Seit einiger Zeit gibt es für den Editor auch [Unterstützung für Java](https://code.visualstudio.com/docs/languages/java). Das Tooling basiert auf dem [Eclipse JDT Projekt](https://www.eclipse.org/jdt/), das das Handling des Projekt-Setups (Klassenpfad etc) übernimmt. Für Spring Boot-Anwendungen
gibt es die [Spring Tools 4](https://spring.io/tools), die neben anderen Editoren und IDEs auch in VS Code verwendet werden kann. Die Toolsuite bietet
diverse Hilfen beim Arbeiten mit Spring Boot, etwa eine Sicht, in der zur Laufzeit die Instanzen injizierten Beans direkt im Source Code innerhalb des Editors angezeigt werden.

**Wie das Arbeiten in der Kombination Visual Studio Code, Java und Spring Boot aussehen kann, habe ich in einem [kleinen Video](https://www.youtube.com/watch?v=tbIobgNz2n8) aufgenommen.**

Mein bisheriges Fazit: in der Kombination steckt eine Menge Potential und sehr viele Dinge funktionieren schon jetzt out-of-the-Box. Ich hatte zum Beispiel kein Problem, ein existierendes Gradle-basiertes Spring Boot-Projekt in VS Code zu öffnen. Der Editor hat die Dependencies heruntergeladen, die korrekten Klassenpfade gesetzt und auch Lombok funktionierte. Nach dem öffnen des Projektes konnte ich die Anwendung aus dem Editor starten, debuggen und Tests ausführen.
Für "ernsthafte" Entwicklung fehlen mir allerdings noch Refactoring Möglichkeiten, so dass ich in der Regel doch noch IntelliJ oder Eclipse für die Java Entwicklung verwenden. Es lohnt sich aber meines Erachtens auf jeden Fall, den weiteren Fortgang des VS Code Java Toolings im Auge zu behalten.
