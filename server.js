const http = require("http");
const express = require("express");
const { setupWSServer } = require("y-websocket");

const app = express();
const server = http.createServer(app);

// Starte den WebSocket-Server für Yjs
setupWSServer(server);

app.use(express.static("public"));

server.listen(8081, "0.0.0.0", () => {
    console.log("✅ Y-WebSocket Server läuft auf Port 8081");
});
