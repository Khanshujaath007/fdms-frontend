import React from "react";
import "./SelectFields.css";
import Select from "react-select";
import makeAnimated from "react-select/animated";
const options = [
  { value: "Firstname", label: "First Name" },
  { value: "Lastname", label: "Last Name" },
  { value: "Age", label: "Age" },
  //more fields
];

const animatedComponents = makeAnimated();

export default function SelectFields() {
  return (
    <div className="select-field">
      <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        // defaultValue={options[0]}

        isMulti
        options={options}
      />
    </div>
  );
}
