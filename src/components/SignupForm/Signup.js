import { useState, useEffect } from "react";
import "./Signup.css";

const Signup = () => {
  const initialValues = { username: "", email: "", password: "", phone: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
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
    if (!values.username) {
      errors.username = "Username is required";
    } else if (values.username.length < 3) {
      errors.username = "Username too short!";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!emailregex.test(values.email)) {
      errors.email = "Enter a valid Email-ID ";
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
        <div className="container">
          <form onSubmit={onSubmitHandler}>
            <h1>Sign up</h1>
            <div className="ui-divider"></div>
            <div className="ui form">
              <div className="field">
                <label>Username</label>
                <input
                  type="text"
                  name="username"
                  placeholder="Enter your name"
                  value={formValues.username}
                  onChange={onChangeHandler}
                ></input>
                <span className="error-span">{formErrors.username}</span>
              </div>
              <div className="field">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your Email ID"
                  value={formValues.email}
                  onChange={onChangeHandler}
                ></input>
                <span className="error-span">{formErrors.email}</span>
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
