---
title: "Frontend-Architektur mit JavaScript: Micro-Frontends als Integration-Pattern"
date: '2019-03-03T11:32:00.000Z'
summaryMarkdown: 'Frontend-Entwicklung wird oft stiefmütterlich behandelt. Dabei haben moderne Webanwendungen mittlerweile
einen enormen Funktionsumfang. Bisweilen werden die Anwendungen sogar so umfangreich, dass sie zur Entwicklung
durch mehrere Teams in Module aufgeteilt werden sollen. Dieser Artikel stellt drei Szenarien zur Integration dieser
Frontend-Module vor, die versuchen, unterschiedlichen Anforderungen zwischen der bestmöglichen Erfahrung für
Benutzer einerseits und einem unabhängigen Entwicklungsprozess andererseits gerecht zu werden.'
image: '/uploads/microfrontends/abb-01-anwendersicht.png'
image_position: 'before_summary'
image_expanded: 'true'
tags:
 - JavaScript
 - micro frontends
 - Architektur
 - SPA
 - Artikel und Vorträge
---

**Diesen Artikel habe ich gemeinsam mit Oliver Zeigermann geschrieben. Er erschien im Objekt Spektrum 2/2019.**

Wenn man mit Architekten über Frontend-
Architektur spricht, bekommt man
häufig amüsante Antworten. Unter den
Antworten, die wir tatsächlich bekommen
haben, sind

- „Frontend-Architektur? Ich dachte, so
  etwas gibt es gar nicht.“
- „Das Frontend kloppen wir am Ende
  einfach irgendwie drauf.“
- „Architektur für ein bisschen CSS-Pixel-
  Geschubse?“

Bei vielen Architekten ist offenbar noch
nicht angekommen, dass das Frontend
der entscheidende Teil der Anwendung
ist. Das Backend muss „nur“ funktionieren,
das Frontend jedoch muss nicht
nur funktionieren, sondern auch dem
Anwender gefallen und bedienbar sein.
Frontend-Architektur wird dennoch nicht
unbedingt immer für vollgenommen.
Auch die Erfindung des Fullstack-Entwicklers
spricht Bände über die Unterschätzung
der Frontend-Architektur. Die
Annahme, dass Backend-Entwickler nebenbei
auch die Aufgaben der Frontend-
Entwickler und dass Backend-Architekten
natürlich auch das vermeintlich
anspruchslose Frontend abdecken können,
ist nicht nur irreführend, sondern
grenzt schon an Arroganz. Ein weiteres
Zeichen für die Ungleichbehandlung
von Backend und Frontend ist, dass reine
Frontend-Entwickler-Stellen oftmals
schlechter bezahlt werden.

Dabei haben moderne, Browser-basierte
Frontends mittlerweile einen enormen
Funktionsumfang, der oftmals denen
von Desktop-Anwendungen in nichts
nachsteht. Exemplarisch dafür seien an
dieser Stelle Microsoft Office, Google
Docs, Figma oder Spotify genannt. Dabei
sind schon kleinere Anwendungen
technisch oftmals höchst anspruchsvoll.
Sie sollen

- dem Benutzer besten Bedienkomfort
  bieten,
- auf unterschiedlichsten Geräten mit
  verschiedenen Auflösungen funktionieren,
- eine schnelle erste Darstellung haben,
- möglichst auch offline arbeiten,
- verzögerungsfrei arbeiten und am besten
  flüssig mit 60 fps laufen,
- asynchron Daten vom Server laden
  und
- es sich nicht anmerken lassen, dass sie
  verteilte Systeme sind.
  Bei großen und sehr großen Anwendungen
  ergeben sich sogar zusätzlich noch
  besondere Herausforderungen. Aber der
  Reihe nach, sehen wir uns das Ganze systematisch
  an.

## Im Spannungsfeld der Anforderungen

Frontend-Architektur unterscheidet sich
in einem wesentlichen Punkt von Backend-
Architektur: Der Benutzer und sein
Erlebnis beim Benutzen der Benutzungsoberfläche
(User Interface, UI) sind Teil
des Aufgabenfelds. Für den Benutzer einer
Anwendung sind in der Regel ganz andere
Dinge wichtig als für die Entwickler der
Anwendung. Je nach Anwendungsfall
sind die Anforderungen der Benutzer aber
noch wichtiger, damit dieser gerne mit der
Anwendung arbeitet (siehe Abbildung 1).
Jeder Nutzer einer Webanwendung
wünscht sich zumindest eine schnelle,
konsistente und stimmige Darstellung der
Daten. Wen verwirrt oder gar ärgert nicht
die Anzeige, dass noch 10 Nachrichten
ungelesen sind, obwohl man gerade alle
Nachrichten durchgesehen hat. Das klingt
zwar wie eine Kleinigkeit, aber eine solche
inkonsistente Darstellung kann Effizienz
bei der Nutzung kosten. Der Benutzer
verliert die Lust, eine solche Anwendung
zu nutzen. Wenn Anwender leicht auf eine
Alternative wechseln können, die einen
solchen Fehler nicht hat, wird er das vielleicht
tun. Auf der anderen Seite wird ihn
eine stimmige, eingängige und innovative
UI, die ihn gut unterstützt, seine Aufgaben
zu erledigen, vielleicht dazu führen,
die Anwendung weiter zu empfehlen. Das
UI kann sowohl Wettbewerbsvorteil als
auch -nachteil sein.
![Abbildung 1: Anwendersicht](/uploads/microfrontends/abb-01-anwendersicht.png 'Abbildung 1: Anwendersicht')
_Abbildung 1: Anwendersicht_

Neben der Konsistenz wünschen sich
Nutzer auch unmittelbare Reaktionen
auf Eingaben oder andere Interaktionen.
Wenn jemand etwas Ungültiges in
ein Formularfeld einträgt, möchte er das
nicht erst beim oder gar nach dem Abschicken
des kompletten Formulars, sondern
direkt bei der Eingabe oder unmittelbar
nach Verlassen des Felds wissen.

## Von der klassischen Webanwendung zur Single-Page Application

Um zu prüfen, ob diese Anforderungen
umgesetzt werden können, gucken wir
uns erst einmal eine klassische, serverseitig
gerenderte Webanwendung an (siehe
Abbildung 2a). Diese wird zunächst als
statische oder generierte HTML-Seite
vom Server über HTTP geladen. Danach
stellt der Browser das geladene HTML
nur noch dar. Bei jeder Interaktion durch
den Benutzer wird nun ein neuer Request
zum Server geschickt, wo der Request verarbeitet
und eine neue HTML-Seite gerendert
wird. Diese wird vom Server zurück
an den Browser geschickt und das Spiel
beginnt von vorne.
![Abbildung 2a: Klassische, serverseitig gerenderte Webanwendung](/uploads/microfrontends/abb-02a-classic-webapp-architecture.png 'Abbildung 2a: Klassische, serverseitig gerenderte Webanwendung')
_Abbildung 2a: Klassische, serverseitig gerenderte Webanwendung_

Eine solche Architektur ist wunderbar
einfach und für viele Entwickler attraktiv.
Die Generierung von HTML-Seiten
mit Java, PHP oder C# ist gut verstanden
und es muss kein JavaScript entwickelt
werden.

Alle sind also glücklich? Leider nein,
denn auch hier vergisst man schnell den
Anwender. Pro Nutzerinteraktion einen
Roundtrip zum Server zu machen, ist für
die User-Experience (UX) fürchterlich
und teilweise auch gar nicht möglich.
Ein Browser kann zum Beispiel bei einem
Neuladen der Seite nicht sinnvoll seinen
Zustand inklusive Scroll- und Cursorposition
beibehalten. Auch Interaktionsmuster
wie Drag‘n‘Drop sind auf diese Weise
nicht umsetzbar.

Eine Lösung für dieses Problem ist, an
den Stellen, wo hohe Interaktivität gefordert
ist, in einem Ad-hoc-Stil JavaScript-
Schnipsel hinzuzufügen, die direkt Logik
im Browser ausführen. Der Code kann
zum Beispiel bestimmte Teile eines Formulars
einblenden, wenn eine Checkbox gesetzt
ist, oder neue HTML-Schnipsel vom
Server laden, um nur einen Teil der bestehenden
Seite zu aktualisieren. Diese Idee
hat in den 2000er Jahren jquery zu großer
Popularität verholfen. Die passende Architektur
ist in Abbildung 2b sichtbar.
Nun ist jquery nicht mehr ganz so populär
und die Antwort auf die Warum-Frage
ist ebenfalls in Abbildung 2b sichtbar. Die
Architektur ist fürchterlich. Bald wird
auf dem Server, bald auf dem Client gerendert.
Bald wird eine ganze Seite geladen,
bald nur ein Seiten-Schnipsel und als
Nächstes etwas Daten als JSON. Oft haben
sich in diesem Ad-hoc-Stil ganze Anwendungsteile
in JavaScript entwickelt,
die dann nur noch eher schlecht als recht
in Frameworks versteckt wurden. Das
perfide daran ist auch, dass die Aufwände
zur Umsetzung erst langsam ansteigen
und auch der Code immer nur langsam
unübersichtlicher wird. Wenn man dies
nicht rechtzeitig bemerkt, hat man schnell
eine unwartbare Anwendung.
![Abbildung 2b: Webanwendung mit Ad-hoc-JavaScript-Schnipseln](/uploads/microfrontends/abb-02b-classic-webapp-with-spa-architecture.png 'Abbildung 2b: Webanwendung mit Ad-hoc-JavaScript-Schnipseln')
_Abbildung 2b: Webanwendung mit Ad-hoc-JavaScript-Schnipseln_

Nun sind also auch die Entwickler nicht
mehr zufrieden. Ein Teil der emotionalen
Ablehnung JavaScript gegenüber stammt
übrigens genau aus dieser Phase. Die
Sprache wurde und wird mit diesem Hack
gleichgesetzt.

Die architektonisch saubere Konsequenz
sind die sogenannten Single-Page Applications
(kurz SPA), die in Abbildung 2c
dargestellt sind. Hier sind sowohl UI-Logik
als auch Daten im Browser. Der
Server kann entweder ganz wegfallen,
dient nur noch als Lieferant für Daten
oder enthält weiterhin die Business-
Logik. Das Verschieben zumindest von
Teilen der Business-Logik in den Browser
ermöglicht die Offline-Fähigkeit der Anwendung.
Im Google Inbox Client etwa
lassen sich E-Mails auch lesen und schreiben
und sogar sichern, wenn keine Internetverbindung
besteht. Gesendet wird die
geschriebene E-Mail dann unmittelbar,
sobald wieder eine Internetverbindung
zustande kommt.
![Abbildung 2c: Single-Page-Application](/uploads/microfrontends/abb-02c-spa-webapp-architecture.png 'Abbildung 2c: Single-Page-Application')
_Abbildung 2c: Single-Page-Application_

Client-seitig werden die SPAs in JavaScript
üblicherweise mit Frameworks
wie Angular, React oder Vue umgesetzt.
Dabei kommen ein Komponentenansatz
und auch häufig mit TypeScript eine typisierte
Sprache und mit Redux ein zentrales
Zustandsmanagement zum Einsatz.
Microsoft Outlook etwa ist genau mit
diesem Stack gebaut (React, TypeScript,
Redux). Für die Entwicklung stehen dabei
unverzichtbare Werkzeuge und Tools
zur Verfügung, die aus der klassischen
Backend-Entwicklung bekannt sind: IDEs
mit Refactoring-Möglichkeiten, Testframeworks,
Build-Tools für CI-Prozesse
und so fort.

Fast könnte der Artikel hier zu Ende sein:
Wenn man erstklassige UI/UX im Web
braucht, die mit dem gewohnten Komfort
und den Prinzipien von Desktop-Anwendungen
mithalten kann, gibt es zu einer
Single-Page Application keine Alternative.
Das folgt bereits aus den obigen prinzipiellen
Überlegungen.

Ob die Story hier zu Ende ist, hängt allerdings
von der Größe der Anwendung ab
und ob man diese noch mit einem einzigen
Team entwickeln kann und möchte.
Denn nicht nur der Anwender ist ein Stakeholder
in der Anwendungsentwicklung,
sondern auch die Entwickler und die Organisation,
in der sie sich befinden (siehe
Abbildung 3). Und am Ende wollen alle
fröhlich und zufrieden sein.
![Abbildung 3: Entwicklerteams als Stakeholder](/uploads/microfrontends/abb-03-entwicklerteams-und-anwender.png 'Abbildung 3: Entwicklerteams als Stakeholder')
_Abbildung 3: Entwicklerteams als Stakeholder_

Wenn man zu der Entscheidung kommt,
dass man die Anwendung nicht in genau
einem Team, sondern in mehreren Teams
entwickeln möchte, ist die Konsequenz
daraus, die Anwendung in Module aufzuteilen.
Jedes Modul kann dann mehr
oder minder autark von einem eigenen
Team entwickelt werden. Daraus entsteht
aber die entscheidende Herausforderung:

- _Wenn man für die Entwicklung mit mehreren Teams die Anwendung in Module zerteilt und somit entkoppelt, muss man sie für das konsistente UI wieder koppeln._

Wie wir im Folgenden sehen werden, geht
das leider nicht ohne Kompromisse. Man
muss sich entscheiden, ob man eher bei
der Erfahrung des Nutzers (UI/UX) oder
beim Entwicklungsprozess Abstriche in
Kauf nehmen will.

## Drei Integrationsszenarien

Im Folgenden stellen wir drei Szenarien
mit unterschiedlichen Abwägungen in
Richtung UX einerseits und Entwicklungsprozess
andererseits zur Diskussion.
Alle anderen Ansätze sind nur Spielarten
dieser drei Integrationsszenarien.

### Ansatz 1: Modularer Deployment-Monolith

Die erste Variante integriert die einzelnen
Module der Anwendung zur Build-Zeit.
Wir deployen daher ein einzelnes, integriertes
Artefakt über alle Teams synchronisiert.
Man spricht daher auch von einem
Deployment-Monolithen.

Eine solche Anwendung (siehe Abbildung 4) kann beliebig viele Module gleichzeitig
darstellen und den Zustand der Module
über einen zentralen, ebenfalls geteilten
Zustand (häufig State oder Store genannt)
synchronisieren. Die Idee hinter dem zentralen
Zustand ist, dass er eine einzige
„Quelle der Wahrheit“ darstellt und somit
grundsätzlich die Möglichkeit einer
inkonsistenten Darstellung ausschließt.
Der Zustand enthält neben den fachlichen
Daten dabei auch UI-relevante Informationen,
zum Beispiel ob ein Menü ausgeklappt
ist oder nicht.
![Abbildung 4: Bei einem Deployment-Monolithen werden die einzelnen Module zur Build-Zeit integriert und als ein Artefakt ausgeliefert](/uploads/microfrontends/abb-04-modularer-deployment-monolith.png 'Abbildung 4: Bei einem Deployment-Monolithen werden die einzelnen Module zur Build-Zeit integriert und als ein Artefakt ausgeliefert')
_Abbildung 4: Bei einem Deployment-Monolithen werden die einzelnen Module zur Build-Zeit integriert und als ein Artefakt ausgeliefert_

Die Tatsache, dass unterschiedliche Module
zur Laufzeit denselben State teilen,
mag auf den ersten Blick wie ein Anti-
Pattern klingen, folgt aber einer auch im
Backend bekannten Logik, nach Möglichkeit
keine Redundanzen in einer Datenbank
zu halten, da diese zu Inkonsistenzen
führen können.

In letzter Konsequenz führt dieser Ansatz
auch im Client zu einer einzigen, normalisierten
Datenquelle. Es gibt diverse, konkurrierende
Patterns und Techniken, die
diesen Ansatz umsetzen. Zu den bekanntesten
zählt das Flux-Pattern mit seiner
Umsetzungsvariante Redux.

Als Beispiel für diesen Ansatz haben wir
Google Docs ausgewählt. Hier ist die Entscheidung
für Deployment-Monolithen
ziemlich klar. Wir haben mit dem Dokument,
das wir bearbeiten, einen zentralen,
geteilten Zustand und auch die einzelnen
Module der Anwendung werden gleichzeitig
dargestellt. In Abbildung 5 etwa ist
zu sehen, dass die Anzeigen in der Toolbar
(etwa Schriftfarbe und -größe) dem
Text an der Cursorposition im Dokument
entsprechen. Auch der Outline-View ist
konsistent. Die Anwendung verhält sich
damit genau so, wie es Anwender intuitiv
erwarten.
![Abbildung 5: Google Docs: Die Toolbar stellt konsistent zur Markierung die Schriftgröße, -Farbe etc dar](/uploads/microfrontends/abb-05-screenshot-google-docs-format.png 'Abbildung 5: Google Docs: Die Toolbar stellt konsistent zur Markierung die Schriftgröße, -Farbe etc dar')
_Abbildung 5: Google Docs: Die Toolbar stellt konsistent zur Markierung die Schriftgröße, -Farbe etc dar_

Dieser Ansatz stellt der Benutzbarkeit am
wenigsten Hindernisse in den Weg. Die
unterschiedlichen Module können gleichzeitig
und jederzeit synchron und in sich
konsistent dargestellt werden. Allerdings
hat die Entwicklung hier die wenigsten
Freiheitsgrade. Es kann effektiv beispielsweise
nur ein einziges Framework und
auch nur in einer einzigen Version eingesetzt
werden. Das Deployment kann nicht
pro Team, sondern nur als Ganzes durchgeführt
werden.

Der Ansatz ermöglicht aber die gemeinsame
Nutzung einer Komponenten-Bibliothek
zwischen allen Teams, die wiederum
die Einheitlichkeit der Darstellung und
Bedienung fördert. Die Wiederverwendbarkeit
der Komponenten bietet zudem
Synergien. Auf der anderen Seite verlieren
Teams damit noch mehr Freiheiten, da
sie über eine solche Bibliothek gekoppelt werden. Auch organisatorisch kann dies
schwierig sein: Welches Team entwickelt
eine solche Bibliothek? Und was passiert,
wenn man Komponenten braucht, die es
dort noch nicht gibt, die aber mittelfristig
teamübergreifend notwendig sein werden?

### Ansatz 2: Micro Components

Ansatz 1 hatte als Schwäche, den Teams
deutliche Einschränkungen bei der Wahl
der Technologie und sogar der Version
des Frameworks aufzuerlegen. Wenn dies
nicht hinnehmbar ist, aber dennoch mehrere
Module gleichzeitig und synchron
dargestellt werden sollen, kommen wir
beim zweiten Ansatz an: den Micro Components.

Die einzelnen Module sind dabei technisch
gesehen mehr oder minder voneinander
isoliert und können jeweils mit
ganz eigenem Technologie-Stack entwickelt
und deployt werden. Die Integration
der Module zur Gesamtanwendung findet
erst zur Laufzeit im Browser statt, zum
Beispiel über iFrames oder Web Components.
Die Kommunikation zwischen den
Modulen erfolgt ebenfalls über gemeinsamen
Zustand, eher aber noch über einen
Event-Bus oder sogar über direkt an den
Modulen registrierte Event-Handler (siehe
Abbildung 6).
![Abbildung 6: Micro Components erlauben die Verwendung unterschiedlicher Technologien innerhalb der Anwendung](/uploads/microfrontends/abb-06-eigenstaendige-anwendungen.png 'Abbildung 6: Micro Components erlauben die Verwendung unterschiedlicher Technologien innerhalb der Anwendung')
_Abbildung 6: Micro Components erlauben die Verwendung unterschiedlicher Technologien innerhalb der Anwendung_

Je nachdem, wie klein die einzelnen Module
sind und wie viel Interaktion zwischen
ihnen notwendig ist, entstehen
mehr oder weniger große Aufwände, um
eine für den Anwender reibungslose Integration
hinzubekommen.

Da jedes Modul seinen komplett eigenen
Technologie-Stack (Frameworks, Bibliotheken)
mitbringt, wird eine solche
Anwendung als Ganzes typischerweise
groß. Dadurch eignet sie sich nicht so gut
für eine Webanwendung, die man gelegentlich
öffnet oder die sich sehr schnell
darstellen muss, da der Browser zunächst
eine große Menge Daten vom Server laden,
interpretieren und ausführen muss.
Auch sind iFrames nicht gerade der
Traum eines jeden Entwicklers. Neben
Problemen mit der Größenberechnung
von iFrames ist auch die Kommunikation
zwischen diesen nicht immer trivial.
Wenn die Inhalte der iFrames aus derselben
Quelle stammen, kann der Umgang
zumindest vereinfacht werden. Werden
statt iFrames Web Components eingesetzt,
gibt es keine vollständige technische
Isolierung der Komponenten, sodass es
grundsätzlich passieren
kann, dass sich unterschiedliche
Frameworks
in die Quere kommen.
Insgesamt eignet sich
dieser Ansatz eher für
Intranet-Anwendungen
oder auf Browsertechnik
basierende Desktop-Anwendungen.
Unser Beispiel
für diesen Ansatz ist
Spotify (siehe Abbildung
7). Die Anwendung wird
typischerweise als Desktop
oder Mobile App
ausgeliefert, welche auf
[Chromium](https://www.quora.com/What-is-the-technology-stack-behind-the-Spotify-web-client/) basieren.

![Abbildung 7: Die Spotify App besteht aus einzelnen, unabhängigen Modulen oder Teil-Anwendungen](/uploads/microfrontends/abb-07-screenshot-spotify.png 'Abbildung 7: Die Spotify App besteht aus einzelnen, unabhängigen Modulen oder Teil-Anwendungen')
_Abbildung 7: Die Spotify App besteht aus einzelnen, unabhängigen Modulen oder Teil-Anwendungen_

Auch wenn dieser Ansatz
aus rein technischen
Gründen zwangsläufig
keine schlechtere Erfahrung
für den Benutzer
fördern muss als
der erste, ist dies in der
Praxis jedoch meist der
Fall. Gerade die komplette
Eigenständigkeit der Teams fördert nämlich die schlechtere
Integration der Gesamtanwendung,
da fachlich oder technisch übergreifende
Themen aus organisatorischen Gründen
eher stiefmütterlich behandelt werden.

Als ein Beispiel nennen wir die bei Spotify
in einem – zudem schwer auffindbaren
– Anwendungsteil gebündelten
Einstellungen („Settings“). Will man ein
Album offline über mobile Datendienste
verfügbar machen, hat dies aber nicht in
den Settings erlaubt, so muss man den
Anwendungsteil, in dem das Album dargestellt
wird, verlassen, die Settings finden
und öffnen, in diesen die entsprechende
Einstellung suchen und einschalten, dann
wieder in die Album-Darstellung gehen
und dort dann das heruntergeladene Album
abspielen. Dies schreibt und liest sich
nicht nur kompliziert, auch in der Praxis
ist dies kein großer Spaß.

### Ansatz 3: Integration über Links

In der dritten und letzten Variante werden
unterschiedliche Anwendungsteile über
Hyperlinks miteinander verbunden. Diese
Links werden häufig in einer Navigationsleiste
gesammelt. Ein Klick auf einen der
Links öffnet den dazu passenden Anwendungsteil
(siehe Abbildung 8). Da jeder
Anwendungsteil eine eigene Seite ist, ist es
nicht möglich, mehrere Anwendungsteile
gleichzeitig im selben Fenster darzustellen.
Dafür ist es aber möglich, mehrere
Teile parallel in einzelnen Browser-Tabs
zu öffnen.
![Abbildung 8: Die unterschiedlichen Teil einer Anwendung werden über Links aus einer Navigation heraus angesprungen](/uploads/microfrontends/abb-08-link-integration.png 'Abbildung 8: Die unterschiedlichen Teil einer Anwendung werden über Links aus einer Navigation heraus angesprungen')
_Abbildung 8: Die unterschiedlichen Teil einer Anwendung werden über Links aus einer Navigation heraus angesprungen_

Da jeder Anwendungsteil als komplett eigenständige
Seite implementiert ist, muss
er sich folglich auch um die gesamte Darstellung
der Seite kümmern (inklusive Navigation,
Seitenrahmen usw.). Mit welcher
Technik die einzelnen Anwendungsteile
implementiert sind, ist dabei unerheblich.
Ein Teil kann sich beispielsweise mit einer
klassischen serverseitig gerenderten
Technik darstellen und ein anderer Teil als
eine Single-Page Application. Dabei kann
jeder Anwendungsteil ein einzelnes Modul
sein. Ein Anwendungsteil kann aber
auch aus mehreren Modulen bestehen, die
dann mit Ansatz 1 oder 2 zusammengesetzt
werden.

Dieser dritte Ansatz ist der für den Entwicklungsprozess
vorteilhafteste. Teams
können wirklich maximal unabhängig
voneinander arbeiten und auch komplett
unterschiedliche Techniken und
Versionen von Bibliotheken nutzen. Beispielsweise
kann ein sehr contentlastiger
Anwendungsteil serverseitig gerendert
werden (etwa aus einem CMS), während
ein hoch interaktiver Teil moderne SPATechnik
nutzt.

Auch für eine Migration einer komplett
serverseitigen Technik aus SPAs kann hier
Schritt für Schritt vorgegangen werden.
Ebenso kann beim Upgrade von Versionen
jedes Team für sich entscheiden, ob
und wann es eine neue Version einsetzt.
Schwieriger ist hier die wirklich einheitliche
Darstellung und das einheitliche
Benutzungsgefühl. Da man sich nicht auf
ein und dieselbe Technik stützt und jedes
Team autonom arbeitet, ist die Erstellung
einer gemeinsamen Bibliothek nicht oder
nur teilweise möglich. Daher muss sich jedes
Team an gemeinsame, informelle Spezifikationen
von Darstellung und Bedienkonzept
halten. Erfahrungsgemäß leidet
dabei die Einheitlichkeit.

Als Beispiel für diesen Ansatz haben wir
Outlook gewählt (siehe Abbildung 9). Am
unteren, linken Rand ist die Navigationsleiste.
Jeder Anwendungsteil ist damit
über einen Link verbunden und ein Klick
darauf öffnet den Teil in einem neuen Tab.
In den vergangenen Monaten wurde
die Outlook-Anwendung auf das SPAFramework
React umgestellt. In dieser
Zeit konnte man beobachten, dass einige
Anwendungsteile (z. B. der Kalender) weiterhin
eine ältere Technik verwendeten,
das Menü anders darstellten und auch ansonsten
ein deutlich anderes Layout nutzten.
Solche Migrationsstrategien sind mit
diesem Ansatz besonders einfach möglich.

![Abbildung 9: Microsoft Outlook: Die einzelnen Teile von Outlook sind über Links in einer Navigationsleiste integriert](/uploads/microfrontends/abb-09-screenshot-outlook.png 'Abbildung 9: Microsoft Outlook: Die einzelnen Teile von Outlook sind über Links in einer Navigationsleiste integriert')
_Abbildung 9: Microsoft Outlook: Die einzelnen Teile von Outlook sind über Links in einer Navigationsleiste integriert_

Für den Nutzer haben wir mit diesem
Ansatz somit vielleicht die schwächste
Lösung, was sich auch aus der schwachen
Integration ergibt: Jeder Anwendungsteil
muss neu aufgebaut werden und das
Teilen der Daten von einem Teil zu einem
anderen ist nur schwer oder gar nicht
möglich. Zumindest kann durch ein gemeinsames Cookie oder den Browser-Storage
ein Login-Token geteilt werden, sodass
jeder Anwendungsteil mit demselben
Nutzer läuft und ein Anwender sich nicht
für jeden Teil erneut anmelden muss.
Ladezeiten beim Wechsel von einer Teil-
Anwendung in die andere können stark
verkürzt werden, wenn man diese Teile
über Service Workers im Hintergrund
nachlädt oder zumindest in einem Cache
puffert.

Dieser Ansatz bietet sich vor allem dann
an, wenn man die fachlichen Teile der
Anwendung sinnvoll auf jeweils eigene
Seiten aufteilen kann. Dass in Outlook
beispielsweise Kalender und Mails in eigenen
Seiten angezeigt werden, ist nachvollziehbar
und zudem seit Jahren aus der
Desktop-Variante bekannt.

## Fazit

Keiner der Ansätze ist perfekt und damit
automatisch der richtige Weg in allen
Fällen. Wichtig ist, dass man sich über
seine Ziele und Anforderungen im Klaren
ist und was die Entscheidung für die
eine oder andere Richtung (bestmögliche
Erfahrung für den Benutzer versus unabhängiger
Entwicklungsprozess) für Konsequenzen
bedeutet. Insbesondere beim
Entwickeln neuer Anwendungen, bei denen
am Anfang die genauen Anforderungen
hinsichtlich Verhalten und Aussehen
unklar sind, kann eine zu frühe Aufteilung
hinderlich sein, da es dadurch technisch
und organisatorisch nur sehr schwer
möglich ist, ein Team-übergreifendes Verständnis
für diese Themen zu bekommen.
Sofern eine Anwendung aufgeteilt werden
soll, empfehlen wir als erstes die Anwendung
so weit wie möglich in eigenständige
Teile beziehungsweise Seiten zu zerteilen
und über Links zu verbinden (Ansatz 3).
Die einzelnen Teile sollten dabei immer so
groß wie möglich sein, um die Unterschiede
hinsichtlich UI so klein wie möglich zu
halten und die technischen Problem der
Integration zu minimieren. Die einzelnen
Seiten können dann beispielsweise jeweils
als Deployment-Monolith (Ansatz 1) entwickelt
werden. Dieser Kombination von
Ansatz 3 und 1 folgen neben Outlook
auch Google Drive, XING, Facebook und
viele andere.

Nur bei einer desktopartigen oder Intranet-
Anwendung, die aus organisatorischen
Gründen einerseits komplett
eigenständige Teams erfordert, aber andererseits
nicht auf eine gleichzeitige Darstellung
verzichten kann, empfehlen wir
Ansatz 2. Dieser Ansatz mag zwar auf den
ersten Blick am attraktivsten oder wie ein
guter Mittelweg aussehen, allerdings sind
die notwendigen Techniken eher brüchig
und der Widerspruch zwischen komplett
eigenständiger Entwicklung und gemeinsamer
und stimmiger Darstellung kommt
am stärksten zum Tragen.
