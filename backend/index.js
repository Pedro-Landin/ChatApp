const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require('socket.io')(server);
server.listen(3000)

io.on("connection", socket => {
    console.log("a user connected :D");
    socket.on("chat message", msg => {
      console.log(msg);
      io.emit("chat message", msg);
    });
  });

console.log("servidor rodando");