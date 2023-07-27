import React from "react";
import "./Loginform.css";
function Loginform() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isEmailValid, setIsEmailValid] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEyeClick = (e) => {
    e.stopPropagation();
    setShowPassword((prevShow) => !prevShow);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you can perform login validation and authentication logic.
    if (password.length < 8 || !password.includes('@') || !password.includes('$')) console.log("Enter Strong Password");
    console.log("Email:", email);
    console.log("Password:", password);
  };


  return (
    <div className="login-background ">
      <div className="login-container container" >
        <h1 className="title">Welcome Back!</h1>
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


        </form >
      </div>
    </div>
  );
}

export default Loginform;
