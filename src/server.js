const server = require("http").createServer();

const io = require("socket.io")(server, {
  cors: {
    // origin: ["http://localhost:3000", "https://chat-app-a74c75.netlify.app"],
    orgin: "*",
  },
});

const PORT = 4000;

io.on("connection", (socket) => {
  console.log(`${socket.id} user just connected!`);

  socket.on("message", (data) => {
    io.emit("messageResponse", data);
  });

  socket.on("disconnect", () => {
    console.log(`${socket.id} disconnected`);
  });
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
