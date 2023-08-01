import React, { useState } from "react";
import "./SelectFields.css";
import Select from "react-select";
import makeAnimated from "react-select/animated";
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
    console.log(fields);
  };
  return (
    <div className="select-field">
      <Select
        closeMenuOnSelect={false}
        onChange={handleChange}
        components={animatedComponents}
        // defaultValue={options[0]}
        isMulti
        options={options}
      />
    </div>
  );
}
