import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ setUsername }) => {
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    if (userInput) {
      setUsername(userInput);
      navigate("/chat");
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={signIn}>
        <input
          type="text"
          placeholder="Username"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button>Sign In</button>
      </form>
    </div>
  );
};

export default Home;
