import { useEffect, useState } from "react";
import ChatRoom from "./ChatRoom";

const ChatPage = ({ socket, username }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("messageResponse", (data) => setMessages([...messages, data]));
  }, [socket, messages]);

  return (
    <div>
      <ChatRoom messages={messages} socket={socket} username={username} />
    </div>
  );
};

export default ChatPage;
