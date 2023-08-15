import { useState, useEffect } from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const initialValues = { usernameOrEmail: "", password: "", phone: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const navigate = useNavigate();
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    try {
      const response = await fetch("http://localhost:5500/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formValues })

      });
      const data = await response.json();
      const { userId } = data;

      if (response.ok) {
        console.log("Signup successful!");
        // Redirect to the dashboard or desired page after successful login

        navigate(`/faculty-dashboard/${userId}`);
      } else {
        console.log("Signup failed!");

      }
    }
    catch (err) {
      console.log(err);
    }

  };
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit === true) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const emailregex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
    const nonNumericPattern = /[^\d]/;

    //comblined both username and email validation
    if (!values.usernameOrEmail) {
      errors.usernameOrEmail = "Username or Email is required";
    } else if (!emailregex.test(values.usernameOrEmail)) {
      errors.usernameOrEmail = "Enter a valid Username or Email";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password too short!";
    }
    if (!values.phone) {
      errors.phone = "Phone Number is required";
    } else if (nonNumericPattern.test(values.phone)) {
      errors.phone = "Enter a valid Phone number";
    }
    return errors;
  };
  return (
    <>
      {Object.keys(formErrors).length === 0 && isSubmit === true ? (
        <div className="ui message success">Signed in Successfully</div>
      ) : (
        <div className="signup-container">
          <div className="sign-up-header">Welcome</div>
          <form onSubmit={onSubmitHandler}>
            <h1>Sign up</h1>
            <div className="ui-divider"></div>
            <div className="ui form">
              <div className="field">
                <label>Username or Email</label>
                <input
                  type="text"
                  name="usernameOrEmail"
                  placeholder="Enter your username or email"
                  value={formValues.usernameOrEmail}
                  onChange={onChangeHandler}
                />
                <span className="error-span">{formErrors.usernameOrEmail}</span>
              </div>
              <div className="field">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter a password"
                  value={formValues.password}
                  onChange={onChangeHandler}
                ></input>
                <span className="error-span">{formErrors.password}</span>
              </div>
              <div className="field">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter Mobile no."
                  value={formValues.phone}
                  onChange={onChangeHandler}
                ></input>
                <span className="error-span">{formErrors.phone}</span>
              </div>
              <button className="fluid ui button">Submit</button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Signup;
