import React, { useState } from "react";
import { useEffect } from "react";
import Select from "react-select";
import axios from "axios";
import makeAnimated from "react-select/animated";
import styles from "./SelectFields.module.css";
const options = [
  { value: "Firstname", label: "First Name" },
  { value: "Lastname", label: "Last Name" },
  { value: "Age", label: "Age" },
  { value: "email", label: "Email" },
  { value: "dateOfBirth", label: "DOB" },
  { value: "contact", label: "Contact" },
  { value: "university", label: "University" },
  { value: "universityId", label: "University ID" },
  { value: "department", label: "Department" },
  //more fields
];

const animatedComponents = makeAnimated();

export default function SelectFields() {
  const [fields, setFields] = useState({});
  const handleChange = (SelectOptions) => {
    const selectedValue = SelectOptions.map((option) => option.value);
    setFields((prevState) => ({
      ...prevState,
      selectedFields: selectedValue,
    }));
  };
  const OnSubmitHandler = () => {
    console.log(fields.selectedFields);
    console.log("sending request to backend");
    //send request to server to download sheet in selected format
    axios
      .post("http://localhost:5500/fetch", fields.selectedFields)
      .then((response) => {
        console.log("Response:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  useEffect(() => {
    // console.log(fields.selectedFields);
  }, [fields]);

  return (
    <>
      <div className={styles["select-field"]}>
        <Select
          closeMenuOnSelect={false}
          onChange={handleChange}
          components={animatedComponents}
          // defaultValue={options[0]}
          isMulti
          options={options}
        />
        <button onClick={OnSubmitHandler}>Download</button>
      </div>
    </>
  );
}
