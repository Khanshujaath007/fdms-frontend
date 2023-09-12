import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./Update.module.css";

const initialValues = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  age: "",
  dateOfBirth: "",
  confirmPassword: "",
  fullAddress: "",
  city: "",
  state: "",
  university: "",
  universityId: "",
  department: "",
  googleScholarIdLink: "",
  scopusIdLink: "",
};

function Update() {
  const { userId } = useParams();
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://localhost:5500/profile/${userId}`);
        const userData = await response.json();

        console.log(userData.userData);
        if (response.ok) {
          setFormValues(userData.userData);
        } else {
          console.error("Error fetching user data");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [userId]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (Object.keys(formErrors).length === 0) {
      try {
        const response = await fetch(`http://localhost:5500/edit-profile/${userId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formValues),
        });

        const data = await response.json();
        console.log(data);

        if (response.ok) {
          console.log("Profile updated successfully!");
          alert("Profile updated successfully!");
          navigate(-1);
        } else {
          console.log("Error updating profile");
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log("Form has validation errors");
    }
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <>
      <h1 className={styles.heading}>Update Profile</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.field}>
          <table>
            <tbody>
              <tr>
                <td>
                  <label>
                    First Name<span className={styles.star}>*</span>
                  </label>
                </td>
                <td>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Enter your first name"
                    value={formValues.firstName}
                    onChange={onChangeHandler}
                  />
                  <span className={styles.errorSpan}>{formErrors.firstName}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <label>
                    Last Name<span className={styles.star}>*</span>
                  </label>
                </td>
                <td>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Enter your last name"
                    value={formValues.lastName}
                    onChange={onChangeHandler}
                  />
                  <span className={styles.errorSpan}>{formErrors.lastName}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <label>
                    Phone Number<span className={styles.star}>*</span>
                  </label>
                </td>
                <td>
                  <input
                    type="text"
                    name="contact"
                    placeholder="Enter your contact"
                    value={formValues.contact}
                    onChange={onChangeHandler}
                  />
                  <span className={styles.errorSpan}>{formErrors.contact}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <label>
                    Age<span className={styles.star}>*</span>
                  </label>
                </td>
                <td>
                  <input
                    type="number"
                    name="age"
                    placeholder="Enter your age"
                    value={formValues.age}
                    onChange={onChangeHandler}
                  />
                  <span className={styles.errorSpan}>{formErrors.age}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <label>
                    Date of Birth<span className={styles.star}>*</span>
                  </label>
                </td>
                <td>
                  <input
                    type="date"
                    name="dateOfBirth"
                    placeholder="Enter your date of birth"
                    value={formValues.dateOfBirth}
                    onChange={onChangeHandler}
                  />
                  <span className={styles.errorSpan}>{formErrors.dateOfBirth}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <label>
                    Full Address<span className={styles.star}>*</span>
                  </label>
                </td>
                <td>
                  <input
                    type="text"
                    name="fullAddress"
                    placeholder="Enter your full address"
                    value={formValues.fullAddress}
                    onChange={onChangeHandler}
                  />
                  <span className={styles.errorSpan}>{formErrors.fullAddress}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <label>
                    City<span className={styles.star}>*</span>
                  </label>
                </td>
                <td>
                  <input
                    type="text"
                    name="city"
                    placeholder="Enter your city"
                    value={formValues.city}
                    onChange={onChangeHandler}
                  />
                  <span className={styles.errorSpan}>{formErrors.city}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <label>
                    State<span className={styles.star}>*</span>
                  </label>
                </td>
                <td>
                  <input
                    type="text"
                    name="state"
                    placeholder="Enter your state"
                    value={formValues.state}
                    onChange={onChangeHandler}
                  />
                  <span className={styles.errorSpan}>{formErrors.state}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <label>
                    University<span className={styles.star}>*</span>
                  </label>
                </td>
                <td>
                  <input
                    type="text"
                    name="university"
                    placeholder="Enter your university"
                    value={formValues.university}
                    onChange={onChangeHandler}
                  />
                  <span className={styles.errorSpan}>{formErrors.university}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <label>
                    University ID<span className={styles.star}>*</span>
                  </label>
                </td>
                <td>
                  <input
                    type="text"
                    name="universityId"
                    placeholder="Enter your university ID"
                    value={formValues.universityId}
                    onChange={onChangeHandler}
                  />
                  <span className={styles.errorSpan}>{formErrors.universityId}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <label>
                    Department<span className={styles.star}>*</span>
                  </label>
                </td>
                <td>
                  <input
                    type="text"
                    name="department"
                    placeholder="Enter your department"
                    value={formValues.department}
                    onChange={onChangeHandler}
                  />
                  <span className={styles.errorSpan}>{formErrors.department}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <label>
                    Google Scholar ID Link:
                  </label>
                </td>
                <td>
                  <input
                    type="text"
                    name="googleScholarIdLink"
                    placeholder="Enter your Google Scholar ID Link"
                    value={formValues.googleScholarIdLink}
                    onChange={onChangeHandler}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>
                    Scopus ID Link:
                  </label>
                </td>
                <td>
                  <input
                    type="text"
                    name="scopusIdLink"
                    placeholder="Enter your Scopus ID Link"
                    value={formValues.scopusIdLink}
                    onChange={onChangeHandler}
                  />
                </td>
              </tr>
            </tbody>
          </table>

        </div>
        <div className={styles.buttonContainer}>
          <button type="button" className={styles.cancelButton} onClick={handleCancel}>
            Cancel
          </button>
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default Update;
