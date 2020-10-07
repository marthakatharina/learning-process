const cluster = require("cluster");
const os = require("os");

const numCpus = os.cpus().length;

cluster.setupMaster({
    exec: __dirname + "/index.js",
    // "/index.js" is the file that sends requests and listens for responses
});

for (let i = 0; i < numCpus; i++) {
    // spawn my worker
    cluster.fork();
    // cluster.fork(); creates child worker and runs  "/index.js" on seperate cores
}

cluster.on("exit", (worker) => {
    // (worker) => {} this callback function runs when worker dies
    console.log("this worker has died", worker.process.pid);
    cluster.fork(); // replacing the worker which has died
}); // used when a worker dies
