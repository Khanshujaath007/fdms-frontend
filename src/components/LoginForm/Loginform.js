import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Loginform.css";
function Loginform() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [emailError, setEmailError] = useState('');
  const [showPassword, setShowPassword] = React.useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const validateEmail = (email) => {

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return emailPattern.test(email);
  };
  const handleEyeClick = (e) => {
    e.stopPropagation();
    setShowPassword((prevShow) => !prevShow);
  };

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Here, you can perform login validation and authentication logic.
    if (validateEmail(email)) {
      setEmailError("");
      try {
        const response = await fetch("http://localhost:5500/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        const { token, user } = data;

        const { userId } = user;

        localStorage.setItem('token', token);
        localStorage.setItem('userId', userId);

        if (response.ok) {
          console.log("Login successful!");
          // Redirect to the dashboard or desired page after successful login

          navigate(`/faculty/home/${userId}`);
        } else {
          console.log("Login failed!");
          // Handle login failure, show error message, etc.
        }
      } catch (error) {
        console.error("Error logging in:", error);
      }
    } else {
      setEmailError("Invalid Email");
    }
  };


  return (
    <div className="login-background ">
      <div className="login-container" >
        <h1 className="login-title">Welcome Back!</h1>
        <form onSubmit={handleSubmit} method="POST">

          <div class="field field1">
            <p class="control has-icons-left has-icons-right">
              <input
                class="input is-medium"
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
              />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-check"></i>
              </span>
            </p>
            {emailError && <p className="help is-danger">{emailError}</p>}

          </div>
          <div class="field field2">
            <p class="control has-icons-left">
              <input
                class="input is-medium"
                style={{ paddingRight: '2.5rem' }}
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={handlePasswordChange}
              />
              <a href="local" class="is-size-7 has-text-primary" style={{ "color": "black" }}>forget password?</a>
              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
              <span
                className="icon is-small is-right is-clickable"
                onClick={handleEyeClick}
                style={{ position: 'absolute', top: '50%', right: '0rem', transform: 'translateY(-50%)', paddingBottom: '10px' }} // Absolute positioning styles for the eye icon

              >
                <i className={`eye-button fas ${showPassword ? 'fa-eye-slash is-right' : 'fa-eye ia-right'}`}></i>
              </span>
            </p>

          </div>
          <div class="field" >
            <button class="button is-primary is-fullwidth" type="submit">Login</button>
          </div>

          {/* <div className="has-text-centered" style={{ margin: '10px 0' }}>
            <hr />
            <span style={{ verticalAlign: 'middle', padding: '0 10px' }}>OR</span>
            <hr />
          </div> */}
        </form >
      </div>
    </div>
  );
}

export default Loginform;
