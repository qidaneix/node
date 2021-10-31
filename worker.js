const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "text/plan" });
  res.end("handled by child, pid is " + process.pid + "\n");
});

let worker;
process.on("message", (m, tcp) => {
  if (m === "server") {
    worker = tcp;
    worker.on("connection", (socket) => {
      server.emit("connection", socket);
    });
  }
});

process.on("uncaughtException", () => {
  worker.close(() => {
    process.exit();
  });
});
