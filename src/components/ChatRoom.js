import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ChatRoom = ({ messages, socket, username }) => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim() && username) {
      socket.emit("message", {
        text: message,
        name: username,
        id: `${socket.id}${Math.random()}`,
        socketID: socket.id,
      });
    }
    setMessage("");
  };

  const handleLeaveChat = () => {
    navigate("/");
    window.location.reload();
  };

  return (
    <div>
      <header style={{ margin: 20 }}>
        <h2>Chat Room</h2>
        <button onClick={handleLeaveChat}>LEAVE CHAT</button>
      </header>

      <div style={{ border: "black 1px solid", height: 400 }}>
        {messages.map(
          (message) => (
            //   message.name === localStorage.getItem("username") ? (
            //     <div key={message.id}>
            //       <p>You</p>
            //       <div>
            //         <p>{message.text}</p>
            //       </div>
            //     </div>
            //   ) : (
            <div key={message.id}>
              <p>
                {message.name}: {message.text}
              </p>
            </div>
          )
          //   )
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
