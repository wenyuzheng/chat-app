import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ChatRoom = ({ messages, socket }) => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim() && localStorage.getItem("username")) {
      socket.emit("message", {
        text: message,
        name: localStorage.getItem("username"),
        id: `${socket.id}${Math.random()}`,
        socketID: socket.id,
      });
    }
    setMessage("");
  };

  const handleLeaveChat = () => {
    localStorage.removeItem("username");
    navigate("/");
    window.location.reload();
  };

  return (
    <div>
      <header>
        <p>Hangout with Colleagues</p>
        <button onClick={handleLeaveChat}>LEAVE CHAT</button>
      </header>

      <div>
        {messages.map((message) =>
          message.name === localStorage.getItem("userName") ? (
            <div key={message.id}>
              <p>You</p>
              <div>
                <p>{message.text}</p>
              </div>
            </div>
          ) : (
            <div key={message.id}>
              <p>{message.name}</p>
              <div>
                <p>{message.text}</p>
              </div>
            </div>
          )
        )}
      </div>

      <div>
        <form className="form" onSubmit={handleSendMessage}>
          <input
            type="text"
            placeholder="Write message..."
            className="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ChatRoom;
