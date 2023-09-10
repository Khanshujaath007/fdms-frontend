import { useState, useEffect } from "react";
// import "./Signup.css";
import styles from "./Signup.module.css";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const initialValues = {
    email: "",
    password: "",
    contact: "",
    username: "",
    firstName: "",
    lastName: "",
    age: "",
    dateOfBirth: "",
    confirmPassword: "",
    fullAddress: "",
    city: "",
    state: "",
    contact: "",
    university: "",
    universityId: "",
    department: "",
    code: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [verificationMessage, setVerificationMessage] = useState("");

  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const navigate = useNavigate();

  const sendOtp = async () => {
    try {
      const response = await fetch("http://localhost:5500/sendotp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ contact: formValues.contact }),
      });

      if (response.ok) {
        setOtpSent(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const verifyOtp = async () => {
    try {
      const response = await fetch("http://localhost:5500/verifyotp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          code: formValues.code,
          contact: formValues.contact,
        }),
      });

      const data = await response.json();
      const { message } = data;
      setVerificationMessage(message);
      if (response.ok) {
        setIsOtpVerified(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    if (otpSent && !isOtpVerified) {
      verifyOtp();
      return;
    }
    try {
      const response = await fetch("http://localhost:5500/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formValues }),
      });
      const data = await response.json();
      const { user } = data;

      console.log(user.userId);
      if (response.ok) {
        console.log("Signup successful!");
        // Redirect to the dashboard or desired page after successful login
        localStorage.setItem("userId", user.userId);
        navigate(`/faculty/home/${user.userId}`);
      } else {
        console.log("Signup failed!");
      }
    } catch (err) {
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
    if (!values.contact) {
      errors.contact = "Phone Number is required";
    } else if (nonNumericPattern.test(values.contact)) {
      errors.contact = "Enter a valid Phone number";
    }
    if (!values.firstName) {
      errors.firstName = "First Name is required";
    }
    if (!values.lastName) {
      errors.lastName = "Last Name is required";
    }
    if (!values.age) {
      errors.age = "Age is required";
    }
    if (!values.dateOfBirth) {
      errors.dateOfBirth = "Date of Birth is required";
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "Confirm Password is required";
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "Passwords do not match";
    }
    if (!values.fullAddress) {
      errors.fullAddress = "Full Address is required";
    }
    if (!values.city) {
      errors.city = "City is required";
    }
    if (!values.state) {
      errors.state = "State is required";
    }
    if (!values.contact) {
      errors.contact = "Contact is required";
    }
    if (!values.university) {
      errors.university = "University is required";
    }
    if (!values.universityId) {
      errors.universityId = "University ID is required";
    }
    if (!values.department) {
      errors.department = "Department is required";
    }
    return errors;
  };
  return (
    <>
      {Object.keys(formErrors).length === 0 && isSubmit === true ? (
        <div className="ui message success">Signed in Successfully</div>
      ) : (
        <div className={styles["signup-container"]}>
          <div className={styles["sign-up-header"]}>Welcome! Register here</div>
          <form
            onSubmit={onSubmitHandler}
            className={styles["single-page-form"]}
          >
            <div className={styles["ui-divider"]}></div>
            <div className="ui form">
              <div className={styles["field"]}>
                <label>
                  First Name<span className={styles["star"]}>*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Enter your first name"
                  value={formValues.firstName}
                  onChange={onChangeHandler}
                />
                <span className={styles["error-span"]}>
                  {formErrors.firstName}
                </span>
              </div>
              <div className={styles["field"]}>
                <label>
                  Last Name<span className={styles["star"]}>*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter your last name"
                  value={formValues.lastName}
                  onChange={onChangeHandler}
                />
                <span className={styles["error-span"]}>
                  {formErrors.lastName}
                </span>
              </div>
              <div className={styles["field"]}>
                <label>
                  Email<span className={styles["star"]}>*</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                  value={formValues.email}
                  onChange={onChangeHandler}
                />
                <span className={styles["error-span"]}>{formErrors.email}</span>
              </div>
              <div className={styles["field"]}>
                <label>
                  Password<span className={styles["star"]}>*</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formValues.password}
                  onChange={onChangeHandler}
                />
                <span className={styles["error-span"]}>
                  {formErrors.password}
                </span>
              </div>
              <div className={styles["field"]}>
                <label>
                  Confirm Password<span className={styles["star"]}>*</span>
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Enter your password again"
                  value={formValues.confirmPassword}
                  onChange={onChangeHandler}
                />
                <span className={styles["error-span"]}>
                  {formErrors.confirmPassword}
                </span>
              </div>
              <div className={styles["field"]}>
                <label>
                  Phone Number<span className={styles["star"]}>*</span>
                </label>
                <div className="phone-field">
                  <input
                    type="text"
                    name="contact"
                    placeholder="Enter your contact"
                    value={formValues.contact}
                    onChange={onChangeHandler}
                  />
                  {!otpSent && (
                    <button
                      className="ui primary button get-otp-button"
                      onClick={sendOtp}
                    >
                      Get OTP
                    </button>
                  )}
                </div>
                <span className={styles["error-span"]}>
                  {formErrors.contact}
                </span>
              </div>
              {otpSent && !isOtpVerified && (
                <div className={styles["field"]}>
                  <label>Enter OTP</label>
                  <input
                    type="text"
                    name="code"
                    placeholder="Enter OTP"
                    value={formValues.code}
                    onChange={onChangeHandler}
                  />
                  <button className="ui secondary button" onClick={verifyOtp}>
                    Verify OTP
                  </button>
                  {verificationMessage && (
                    <div className="ui message">{verificationMessage}</div>
                  )}
                </div>
              )}

              <div className={styles["field"]}>
                <label>
                  Username<span className={styles["star"]}>*</span>
                </label>
                <input
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                  value={formValues.username}
                  onChange={onChangeHandler}
                />
                <span className={styles["error-span"]}>
                  {formErrors.username}
                </span>
              </div>
              <div className={styles["field"]}>
                <label>
                  Age<span className={styles["star"]}>*</span>
                </label>
                <input
                  type="number"
                  name="age"
                  placeholder="Enter your age"
                  value={formValues.age}
                  onChange={onChangeHandler}
                />
                <span className={styles["error-span"]}>{formErrors.age}</span>
              </div>
              <div className={styles["field"]}>
                <label>
                  Date of Birth<span className={styles["star"]}>*</span>
                </label>
                <input
                  type="date"
                  name="dateOfBirth"
                  placeholder="Enter your date of birth"
                  value={formValues.dateOfBirth}
                  onChange={onChangeHandler}
                />
                <span className={styles["error-span"]}>
                  {formErrors.dateOfBirth}
                </span>
              </div>
              <div className={styles["field"]}>
                <label>
                  Full Address<span className={styles["star"]}>*</span>
                </label>
                <input
                  type="text"
                  name="fullAddress"
                  placeholder="Enter your full address"
                  value={formValues.fullAddress}
                  onChange={onChangeHandler}
                />
                <span className={styles["error-span"]}>
                  {formErrors.fullAddress}
                </span>
              </div>
              <div className={styles["field"]}>
                <label>
                  City<span className={styles["star"]}>*</span>
                </label>
                <input
                  type="text"
                  name="city"
                  placeholder="Enter your city"
                  value={formValues.city}
                  onChange={onChangeHandler}
                />
                <span className={styles["error-span"]}>{formErrors.city}</span>
              </div>
              <div className={styles["field"]}>
                <label>
                  State<span className={styles["star"]}>*</span>
                </label>
                <input
                  type="text"
                  name="state"
                  placeholder="Enter your state"
                  value={formValues.state}
                  onChange={onChangeHandler}
                />
                <span className={styles["error-span"]}>{formErrors.state}</span>
              </div>

              <div className={styles["field"]}>
                <label>
                  University<span className={styles["star"]}>*</span>
                </label>
                <input
                  type="text"
                  name="university"
                  placeholder="Enter your university"
                  value={formValues.university}
                  onChange={onChangeHandler}
                />
                <span className={styles["error-span"]}>
                  {formErrors.university}
                </span>
              </div>
              <div className={styles["field"]}>
                <label>
                  University ID<span className={styles["star"]}>*</span>
                </label>
                <input
                  type="text"
                  name="universityId"
                  placeholder="Enter your university ID"
                  value={formValues.universityId}
                  onChange={onChangeHandler}
                />
                <span className={styles["error-span"]}>
                  {formErrors.universityId}
                </span>
              </div>
              <div className={styles["field"]}>
                <label>
                  Department<span className={styles["star"]}>*</span>
                </label>
                <input
                  type="text"
                  name="department"
                  placeholder="Enter your department"
                  value={formValues.department}
                  onChange={onChangeHandler}
                />
                <span className={styles["error-span"]}>
                  {formErrors.department}
                </span>
              </div>
              <button className={`${styles["button"]}`}>Submit</button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Signup;
