ToDo-Liste Projekt

Dies ist ein einfaches Projekt für eine interaktive ToDo-Liste, die mithilfe von HTML, CSS und JavaScript erstellt wurde. Das Projekt verwendet Docker und Devcontainers, um eine konsistente Entwicklungsumgebung sicherzustellen.

Funktionen

Hinzufügen neuer Aufgaben zur Liste.
Löschen von Aufgaben durch Klicken auf sie.
Verschieben von Aufgaben per Drag-and-Drop.
Bearbeiten von Aufgaben durch Doppelklick und Bestätigen mit der Eingabetaste.

Projektstruktur
 
Projekt/ 
│
├── .devcontainer/ 
│   ├── devcontainer.json
│   └── Dockerfile 
│ 
├── css/ 
│ └── styles.css 
│ 
├── js/ 
│ └── script.js 
│ 
├── index.html 
└── README.md

Devcontainer verwenden

Um das Projekt in einem Devcontainer zu öffnen, folge diesen Schritten:

Stelle sicher, dass Docker auf deinem System installiert ist.
Klonen Sie das Repository auf Ihren lokalen Computer.
Öffnen Sie Visual Studio Code und navigieren Sie zum Projektverzeichnis.
Installieren Sie die empfohlenen Erweiterungen, wenn Sie dazu aufgefordert werden.
Drücken Sie F1 und wählen Sie "Remote-Container: Reopen in Container", um das Projekt im Devcontainer zu öffnen.
Lokale Installation
Wenn Sie das Projekt lokal ausführen möchten, führen Sie die folgenden Schritte aus:

Stellen Sie sicher, dass Node.js auf Ihrem System installiert ist.
Klonen Sie das Repository auf Ihren lokalen Computer.
Öffnen Sie ein Terminal und navigieren Sie zum Projektverzeichnis.
Führen Sie npm install aus, um die Abhängigkeiten zu installieren.
Führen Sie npm start aus, um die Anwendung lokal zu starten.

Autor
Tristan Thomas