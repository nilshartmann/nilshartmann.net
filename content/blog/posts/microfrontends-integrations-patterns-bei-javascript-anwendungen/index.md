---
title: 'Microfrontends: Integrations-Patterns bei JavaScript-Anwendungen'
date: '2018-02-15T23:00:00.000Z'
summaryMarkdown: 'Webanwendungen werden heutzutage üblicherweise als Single-Page-Anwendung gebaut, um das bestmögliche Verhalten hinsichtlich UI und UX zu erhalten. Gerade bei größeren Anwendungen kann es sinnvoll sein, die Anwendung in kleinere Teile aufzuspalten.'
image: '/uploads/1541346675530_microfrontends.png'
image_position: 'before_summary'
image_expanded: 'true'
tags:
  - JavaScript
  - micro frontends
  - Artikel
---

**Diesen Artikel habe ich gemeinsam mit Oliver Zeigermann geschrieben. Er erschien ursprünglich bei [heise developer](https://www.heise.de/developer/artikel/Integrations-Patterns-bei-JavaScript-Anwendungen-3970085.html?seite=all)**.

Es gibt mehrere Varianten, wie Micro-Frontends entwickelt werden können, die unterschiedliche Kompromisse hinsichtlich Entwicklungsprozess oder UI/UX eingehen. Denn dem Aufteilen der Anwendung in mehrere Teile steht der Wunsch des Benutzers gegenüber, dass sich die UI einheitlich und konsistent verhalten soll.

Frontend-Architektur unterscheidet sich in einem wesentlichen Punkt von der des Backends: Der Benutzer und sein Erlebnis beim Benutzen der UI sind Teil des Aufgabenfelds. Für den Benutzer einer Anwendung sind häufig ganz andere Dinge wichtig als für die Entwickler der Anwendung. Aber je nach Anwendungsfall sind die Anforderungen der Benutzer ebenso wichtig, wenn nicht noch wichtiger.

Jeder Nutzer einer Webanwendung wünscht sich zumindest eine schnelle, konsistente und stimmige Darstellung der Daten. Wen verwirrt oder gar ärgert nicht die Anzeige, dass noch zehn Nachrichten ungelesen sind, obwohl man gerade alle durchgesehen hat. Das klingt wie eine Kleinigkeit, aber eine solche inkonsistente Darstellung kostet Effizienz bei der Nutzung. Dazu verliert man zunehmend an Lust, eine solche Anwendung zu nutzen. Wenn man leicht auf eine Alternative ohne einen solchen Fehler wechseln kann, wird man das vielleicht tun. Die UI kann sowohl Wettbewerbsvorteil als auch -nachteil sein.

Meist wünschen sich Nutzer auch unmittelbare Reaktionen auf Eingaben oder andere Interaktionen. Wenn jemand etwas Ungültiges in ein Formularfeld einträgt, möchte man das nicht erst beim Abschicken des kompletten Formulars, sondern direkt bei der Eingabe oder unmittelbar nach Verlassen des Felds wissen.

Da Roundtrips über einen Server nach jeder Interaktion zu lange dauern würden, muss dazu die Logik für die Validierung im Browser liegen. Und damit sich eine Eingabe überhaupt validieren lässt, müssen auch die erforderlichen Daten im Browser liegen. Das ermöglicht dann auch Bedienkonzepte die von Desktop-Anwendungen bekannt sind, etwa Drag'n'Drop oder interaktive Darstellungen von Grafiken und Diagrammen.

Die dazu passende Architektur ist die sogenannte Single Page Application (SPA). Sie bringt sowohl die Logik als auch die Daten in den Browser. Der Server kann entweder ganz wegfallen, nur noch als Lieferant für Daten dienen oder weiterhin die Business-Logik enthalten. Clientseitig werden SPAs in JavaScript üblicherweise mit Frameworks wie Angular oder React umgesetzt.
Fast könnte der Artikel hier zu Ende sein: Wenn man eine erstklassige UI/UX im Web braucht, die mit dem gewohnten Komfort und Prinzipien von Desktopanwendungen mithalten kann, gibt es zu einer Single Page Application keine Alternative. Das folgt aus den obigen prinzipiellen Überlegungen. Ob die Story hier zu Ende ist, hängt allerdings von der Größe der Anwendung ab und ob man diese noch mit einem einzigen Team entwickeln kann oder möchte. Denn nicht nur Anwender sind Stakeholder in der Anwendungsentwicklung, sondern auch die Entwickler und die Organisation, in der sie sich befinden.
Wer zur Entscheidung kommt, die Anwendung nicht in einem Team, sondern in mehreren zu entwickeln, zieht die Konsequenz daraus, die Anwendung in Module aufzuteilen. Jedes Modul lÃ¤sst sich dann mehr oder minder autark von einem eigenen Team entwickeln. Daraus resultiert aber eine neue Herausforderung: Wenn man für die Entwicklung mit mehreren Teams die Anwendung in Module zerteilt und somit entkoppelt, muss man sie für die konsistente UI wieder koppeln. Wie im Folgenden zu sehen, geht das leider nicht ohne Kompromisse. Man muss sich entscheiden, ob man eher beim Nutzererlebnis (UI/UX) oder beim Entwicklungsprozess Abstriche in Kauf nehmen will.

## Drei Integrationsszenarien

Im Folgenden stehen drei Szenarien mit unterschiedlichen Gewichtungen in Richtung UX oder Richtung Entwicklungsprozess andererseits zur Diskussion. Alle anderen Ansätze sind nur Spielarten dieser Integrationsszenarien.

## Ansatz 1: Modularer Deployment-Monolith

Die erste Variante integriert die einzelnen Module der Anwendung zur Build-Zeit. Man deployt ein einzelnes, integriertes Artefakt über alle Teams synchronisiert. Es ist daher von einem Deployment-Monolithen die Rede.

Eine solche Anwendung kann beliebig viele Module gleichzeitig darstellen und den Zustand der Module über einen zentralen, ebenfalls geteilten Zustand (häufig State oder Store genannt) synchronisieren. Die Idee hinter dem zentralen Zustand ist, dass er eine einzige "Quelle der Wahrheit" darstellt und somit grundsätzlich die Möglichkeit einer inkonsistenten Darstellung ausschließt. Der Zustand enthält neben den fachlichen Daten UI-relevante Informationen, zum Beispiel ob ein Menü ausgeklappt ist oder nicht. Die Tatsache, dass unterschiedliche Module zur Laufzeit denselben State teilen, mag auf den ersten Blick wie ein Anti-Pattern klingen. Sie folgt aber einer auch im Backend bekannten Logik, keine Redundanzen in einer Datenbank zu halten, da diese zu Inkonsistenzen führen können.

In letzter Konsequenz fährt dieser Ansatz im Client zu einer einzigen, normalisierten Datenquelle. Es gibt diverse, konkurrierende Patterns und Techniken, die dieses Szenario umsetzen. Zu den bekanntesten zählt das Flux Pattern mit seiner Umsetzungsvariante Redux. Als Beispiel für Deployment-Monolithen sei Google Docs herangezogen. Hier ist die Entscheidung für Deployment-Monolithen ziemlich klar. Mit dem zu bearbeitenden Dokument gibt es einen zentralen, geteilten Zustand, und auch die einzelnen Module der Anwendung werden gleichzeitig dargestellt.

Dieser Ansatz stellt der Benutzbarkeit am wenigsten Hindernisse in den Weg. Die unterschiedlichen Module können gleichzeitig und jederzeit synchron und in sich konsistent dargestellt werden. Allerdings hat die Entwicklung hier die wenigsten Freiheitsgrade. Es lÃ¤sst sich effektiv nur eine einzige Technologiie und sie sogar nur in einer einzigen Version einsetzen. Das Deployment kann nicht pro Team, sondern nur als Ganzes durchgeführt werden. Vorteilhaft und beinahe zwingend kann aber die gemeinsame Nutzung einer Komponentenbibliothek zwischen Teams sein, die wiederum die Einheitlichkeit der Darstellung und Bedienung fördert. Die Wiederverwendbarkeit der Komponenten bietet zudem Synergien. Auf der anderen Seite verlieren Teams damit noch mehr Freiheiten, da sie über eine solche Bibliothek gekoppelt werden. Auch organisatorisch kann dies schwierig sein: Welches Team entwickelt eine solche Bibliothek? Und was passiert, wenn man Komponenten braucht, die es dort noch nicht gibt, die aber mittelfristig teamübergreifend notwendig sein werden?

## Ansatz 2: Micro-Components

Ansatz 1 hatte als Schwäche, den Teams deutliche Einschränkungen bei der Wahl und sogar der Version des Frameworks aufzuerlegen. Wenn das nicht hinnehmbar ist, aber dennoch mehrere Module synchron dargestellt werden sollen, greift ein zweiter Ansatz: die sogenannten Micro-Components. Die einzelnen Module sind technisch gesehen voneinander isoliert und lassen sich jeweils mit ganz eigenem Programmier-Stack entwickeln und deployen. Ein Modul entspricht hier fast einer eigenen (Teil-)Anwendung. Die Integration der Module zur Gesamtanwendung findet erst zur Laufzeit im Browser statt, zum Beispiel über iFrames oder Web Components. Die Kommunikation zwischen den Modulen erfolgt ebenfalls über einen gemeinsamen Zustand, eher aber noch über einen Event-Bus oder sogar über direkt an den Modulen registrierte Event-Handler.

Da jedes Modul seinen komplett eigenen Technologie-Stack mitbringt, wird eine solche Applikation typischerweise groß. Dadurch eignet sie sich nicht so gut für eine Webanwendung, die man gelegentlich öffnet und/oder sich schnell darstellen muss, da der Browser zunächst eine große Menge Daten vom Server laden, interpretieren und ausführen muss. Auch sind iFrames nicht gerade der Traum von Entwicklern. Neben Problemen mit der Größenberechnung von iFrames ist die Kommunikation zwischen diesen nicht immer trivial. Wenn die Inhalte der iFrames aus derselben Quelle stammen, lässt sich der Umgang zumindest vereinfachen.

Insgesamt eignet sich dieser Ansatz eher für Intranet-Anwendungen oder auf Browsertechnik basierten Desktopanwendungen. Das Beispiel dafür ist Spotify. Die Anwendung wird typischerweise als Desktop- oder Mobile-App ausgeliefert, die auf Chromium basiert.

Auch wenn der Ansatz aus rein technischen Gründen keine schlechtere Erfahrung für den Benutzer nach sich ziehen muss als der erste, ist dies in der Praxis jedoch meist der Fall. Gerade die komplette Eigenständigkeit der Teams fördert wiederum die schlechtere Integration der Gesamtanwendung, da fachlich oder technisch übergreifende Themen aus organisatorischen Gründen eher stiefmütterlich behandelt werden. Als ein Beispiel seien die bei Spotify in einem – zudem schwer auffindbaren – Anwendungsteil gebündelten Settings genannt. Will man etwa ein Album offline über mobile Datendienste verfügbar machen, hat das aber nicht in den Settings erlaubt, muss man den Anwendungsteil, in dem das Album dargestellt wird, verlassen, die Settings finden und öffnen, die Einstellung suchen und einschalten, dann wieder in die Album-Darstellung gehen und dort das heruntergeladene Album abspielen. Das schreibt und liest sich nicht nur kompliziert, auch in der Praxis ist es kein großer Spaß.

## Ansatz 3: Integration über Links

In der dritten und letzten Variante werden unterschiedliche Anwendungsteile über Links miteinander verbunden. Diese Links sind häufig in einer Navigationsleiste gesammelt. Jeder Anwendungsteil ist als komplett eigenständige Seite implementiert und muss sich folglich um die gesamte Darstellung der Seite kümmern (inklusive Navigation, Seitenrahmen etc.). Da jeder Anwendungsteil eine eigene Seite ist, ist es nicht möglich, mehrere Anwendungsteile gleichzeitig darzustellen. Dafür lassen sich aber mehrere Teile parallel in einzelnen Browser-Tabs öffnen.

Welche Technik die einzelnen Anwendungsteile nutzen, ist dabei unerheblich. Ein Teil kann sich beispielsweise mit einer klassischen serverseitig gerenderten Technik darstellen und ein anderer als eine Single Page Application. Dabei kann, aber muss nicht jeder einzelne Anwendungsteil nur ein einzelnes Modul sein. Ein Teil kann auch aus mehreren Modulen bestehen, die dann mit Ansatz 1 oder 2 zusammengesetzt werden.

Ansatz 3 hat für den Entwicklungsprozess den größten Vorteil. Teams können maximal unabhängig voneinander arbeiten und komplett unterschiedliche Techniken und Versionen von Bibliotheken nutzen. Beispielsweise lässt sich ein contentlastiger Anwendungsteil serverseitig rendern, während ein interaktiver Teil zeitgemäße SPA-Technik nutzt. Auch für eine Migration von einer komplett serverseitigen Technik aus SPAs kann Schritt für Schritt vorgegangen werden. Ebenso kann beim Upgrade von Versionen jedes Team für sich entscheiden, ob und wann es eine neue Version einsetzt.

Schwieriger sind hier die einheitliche Darstellung und das einheitliche Benutzungsgefühl. Da man sich nicht auf ein und dieselbe Technik stützt und jedes Team autonom arbeitet, ist das Erstellen einer gemeinsamen Bibliothek nicht oder nur teilweise möglich. Daher muss sich jedes Team an eine gemeinsame, informelle Spezifikation von Darstellung und Bedienkonzept halten. Erfahrungsgemäß leidet dabei die Einheitlichkeit. Als Beispiel für dieses Szenario sei die neueste Beta-Version von Outlook Live gewählt.

Am unteren, linken Rand befindet sich die Navigationsleiste. Jeder Anwendungsteil ist damit über einen Link verbunden, und ein Klick darauf öffnet den Teil in einem neuen Tab. Derzeit wird die Outlook-Anwendung auf das SPA-Framework React umgestellt. Manche Teile nutzen aber noch eine ältere Technik, was mit diesem Ansatz besonders einfach ist. Allerdings geht dies zu Lasten zum Beispiel der Darstellung: das Menü und auch das Layout ist in den einzelnen Teilen der Awendung zumteil deutlich unterschiedlich.

Für den Nutzer ergibt sich mit diesem Szenario somit die schwächste Umsetzung. Das resultiert auch aus der schwachen Integration. Jeder Anwendungsteil muss neu aufgebaut werden, und das Teilen der Daten von einem Teil zu einem anderen ist nur schwer oder gar nicht möglich. Zumindest lässt sich durch ein gemeinsames Cookie ein Login-Token teilen, sodass jeder Anwendungsteil mit demselben Nutzer läuft und ein Anwender sich nicht für jeden Teil erneut anmelden muss. Ladezeiten beim Wechsel von einer Teilanwendung in die andere lassen sich stark verkürzen, wenn man diese Teile über Service Workers im Hintergrund nachlädt oder zumindest cacht.

## Fazit

Keiner der Ansätze ist perfekt und damit automatisch der richtige Weg in allen Fällen. Wichtig ist, dass man sich über seine Ziele und Anforderungen im Klaren ist und sich bewusst macht, was die Entscheidung für die eine oder andere Richtung, bestmögliche Erfahrung für den Benutzer versus unabhängiger Entwicklungsprozess, für Konsequenzen bedeutet.

Sofern eine Applikation aufgeteilt werden soll, empfehlen die Autoren, als erstes die Anwendung so weit wie möglich in eigenständige Teile beziehungsweise Seiten zu zerteilen und über Links zu verbinden. Dieser Kombination von Ansatz 3 und 1 folgen unter anderen Google Drive, der Outlook Web Client, XING und Facebook.

Nur bei einer desktopartigen oder Intranet-Anwendung, die aus organisatorischen Gründen einerseits komplett eigenständige Teams erfordert, aber andererseits nicht auf eine gleichzeitige Darstellung verzichten kann, sei Ansatz 2 empfohlen. Er mag auf den ersten Blick am attraktivsten oder wie ein guter Mittelweg aussehen, allerdings sind die notwendigen Techniken eher brüchig und der Widerspruch zwischen komplett eigenständiger Entwicklung und gemeinsamer und stimmiger Darstellung kommt am stärksten zum Tragen.
