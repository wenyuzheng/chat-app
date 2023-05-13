import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ setUsername }) => {
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState("");

  const signIn = () => {
    if (userInput) {
      //   localStorage.setItem("username", username);
      setUsername(userInput);
      navigate("/chat");
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <input
        type="text"
        placeholder="Username"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button onClick={signIn}>Sign In</button>
    </div>
  );
};

export default Home;
