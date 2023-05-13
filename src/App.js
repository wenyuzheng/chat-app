import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ChatPage from "./components/ChatPage";
import socketIO from "socket.io-client";

import "./App.css";
import { useState } from "react";

const server = "http://localhost:4000";
const socket = socketIO.connect(server);

function App() {
  const [username, setUsername] = useState("");

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<Home socket={socket} setUsername={setUsername} />}
          ></Route>
          <Route
            path="/chat"
            element={<ChatPage socket={socket} username={username} />}
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
