# Verwende das offizielle Node.js Image als Basis
FROM node:14

# Setze das Arbeitsverzeichnis im Container
WORKDIR /Users/tristanthomas/Documents/Modul347/Projekt/.devcontainer

# Kopiere die Paketkonfiguration und installiere Abhängigkeiten
COPY package*.json ./
RUN npm install

# Kopiere den Rest des Anwendungscodes
COPY . .

# Port freigeben
EXPOSE 3000

# Befehl zum Starten der Anwendung
CMD ["npm", "start"]