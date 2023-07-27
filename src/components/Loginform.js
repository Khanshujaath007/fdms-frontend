import React from "react";
function Loginform() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you can perform login validation and authentication logic.
    if (password.length < 8 || !password.includes('@') || !password.includes('$')) console.log("Enter Strong Password");
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <form onSubmit={handleSubmit} method="POST">
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  );
}

export default Loginform;
