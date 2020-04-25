const { PeerServer } = require("peer");
const { createServer } = require("cors-anywhere");
const checkRateLimit = require("cors-anywhere/lib/rate-limit");

PeerServer({ port: 9000, path: "/peerjs" });
createServer({
  checkRateLimit: checkRateLimit(
    "0 1 ficha-git-develop.robclouth.now.sh ficha.now.sh"
  )
}).listen(9001);
