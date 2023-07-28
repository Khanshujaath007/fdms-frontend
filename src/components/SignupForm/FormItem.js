import { Form } from "react-bootstrap";
import { useState } from "react";

const FormItem = ({ item, onChange, answer }) => {
  const [currentValue, setCurrentValue] = useState(answer || "");

  const handleChange = (value) => {
    setCurrentValue(value);
    onChange(value, item.value);
  };
  switch (item.type) {
    case "text":
      return (
        <>
          <Form.Label>{item.label}</Form.Label>
          <Form.Control
            type="text"
            id={item.label}
            onChange={(e) => handleChange(e.target.value, item.value)}
            value={currentValue}
          />
        </>
      );
      break;
    case "password":
      return (
        <>
          <Form.Label htmlFor="inputpassword5">{item.label}</Form.Label>
          <Form.Control
            type="password"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            onChange={(e) => onChange(e.target.value, item.value)}
          />
        </>
      );
      break;
    case "number":
      return (
        <>
          <Form.Label htmlFor="age">{item.label}</Form.Label>
          <Form.Control
            type="number"
            id={item.label}
            aria-describedby=""
            onChange={(e) => onChange(e.target.value, item.value)}
          />
        </>
      );
      break;

    case "select":
      return (
        <div className="mt-2">
          <Form.Select
            aria-label={item.label}
            onChange={(e) => onChange(e.target.value, item.value)}
          >
            <option>{item.label}</option>
            {item.options.map((opt, index) => {
              return <option value={opt}>{opt}</option>;
            })}
          </Form.Select>
        </div>
      );
      break;
    case "information":
      return <p>{item.label}</p>;
      break;
    default:
      return <></>;
  }
};

export default FormItem;
