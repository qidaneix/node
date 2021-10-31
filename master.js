const cp = require("child_process");
const cpus = require("os").cpus();
// const cluster = require("cluster");
// cluster.sh
// process.env.NODE_CLUSTER_SCHED_POLICY = "rr";
const children = [];
for (let i = 0; i < cpus.length; i++) {
  children.push(cp.fork("worker.js"));
}

const server = require("net").createServer();
server.listen(1337, () => {
  for (let i = 0; i < children.length; i++) {
    children[i].send("server", server);
  }
  server.close();
});
