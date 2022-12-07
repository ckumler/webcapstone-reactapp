import React from "react";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username === "admin" && password === "secure") {
      navigate("/dashboard")
    } else {
      alert('Incorrect username/password')
    }
  };

  return (
    <div
      name="login"
      className="w-full h-screen bg-[#FAEBAD] flex justify-center items-center p-4"
    >
      <form
        onSubmit={handleSubmit}
        className="flex flex-col max-w-[600px] w-full  bg-[#eb5031af] p-4"
      >
        <div className="pb-8">
          <p className="text-4xl font-semibold flex justify-center items-center px-4">
            Employee Login
          </p>
        </div>
        <input
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          className="my-4 p-2"
          type="username"
          placeholder="Username"
          name="username"
        />
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="p-2"
          name="password"
          rows="10"
          placeholder="Password"
        ></input>
        <button
          type="submit"
          className="border-2 group border-gray-800 px-4 py-3 my-8 mx-auto flex items-center hover:bg-white hover:border-white"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LogIn;
