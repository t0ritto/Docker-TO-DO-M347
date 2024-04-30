## ToDo-Liste Dokumentation

Einführung

Dokumentation für ToDO Applikation in Docker. Voraussetzungen

Bevor du mit der Verwendung der ToDo-Liste beginnen kannst, musst du sicherstellen, dass die folgenden Softwarepakete auf deinem System installiert sind:

Visual Studio Code: IDE für code bearbeitung und Benutzung für Docker.
Docker: Eine Container-Plattform, die verwendet wird, um die Anwendung in einem isolierten und konsistenten Umfeld auszuführen.
Git: Ein Versionskontrollsystem, das zum Klonen des Projektrepositorys verwendet wird.
Installation

Projekt klonen: Klonen Sie das ToDo-Liste-Projektrepository auf Ihren lokalen Computer.

git clone https://github.com/t0ritto/Docker-TO-DO-M347.git
Öffnen in Visual Studio Code: Öffnen Sie das geklonte Repository in Visual Studio Code.

Starten des Dev-Containers: Öffnen Sie das Projekt in einem Dev-Container, um eine konsistente Entwicklungsumgebung zu gewährleisten.

Stellen Sie sicher, dass Docker auf Ihrem System ausgeführt wird.
Öffnen Sie Visual Studio Code und navigieren Sie zum geklonten Repository.
Wählen Sie "Remote-Container öffnen" aus dem Befehlspalette-Menü und wählen Sie das Verzeichnis aus.
Wählen Sie den gewünschten Dev-Container-Typ (z.B. Node.js), wenn Sie dazu aufgefordert werden.
Der Dev-Container wird automatisch erstellt, und Sie können im integrierten Terminalfenster in VS Code arbeiten.
Starten der Anwendung: Nachdem der Dev-Container gestartet wurde, können Sie die ToDo-Liste-Anwendung starten.

Öffnen Sie ein neues Terminalfenster in VS Code.
Navigieren Sie zum Projektverzeichnis und führen Sie den folgenden Befehl aus, um die Anwendung zu starten:
npm start

Zugriff auf die Anwendung: Öffnen Sie Ihren bevorzugten Webbrowser und navigieren Sie zu http://localhost:8080, um auf die ToDo-Liste zuzugreifen.
