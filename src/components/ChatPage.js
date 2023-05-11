import { useEffect, useState } from "react";
import ChatRoom from "./ChatRoom";

const ChatPage = ({ socket }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("messageResponse", (data) => setMessages([...messages, data]));
  }, [socket, messages]);

  return (
    <div>
      <ChatRoom messages={messages} socket={socket} />
    </div>
  );
};

export default ChatPage;
