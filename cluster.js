const cluster = require("cluster");
const cpus = require("os").cpus();
// const http = require("http");

cluster.setupMaster({
  exec: "worker.js",
});

for (let i = 0; i < cpus.length; i++) {
  cluster.fork();
}

// if (cluster.isMaster) {
//   for (let i = 0; i < cpus.length; i++) {
//     cluster.fork();
//   }

//   cluster.on("exit", (worker, code, signal) => {
//     console.log(`worker ${worker.process.pid} died`);
//   });
// } else {
//   http
//     .createServer((req, res) => {
//       res.writeHead(200);
//       res.end("hello world\n");
//     })
//     .listen(8000);
// }
