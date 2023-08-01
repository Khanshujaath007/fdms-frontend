import FormItem from "./FormItem";
import "./Multistepform.css"
import { useState, useEffect } from "react";
const Multistepform = (props) => {
  const [answers, setAnswers] = useState({ index: props.step });
  useEffect(() => {
    if (Object.keys(answers).length > 1) {
      props.onPageUpdate(answers.index, answers);
      setAnswers({ index: props.step });
    } else {
      setAnswers({ index: props.step });
    }
  }, [props.step]);

  const updateAnswers = (value, category) => {
    setAnswers({ ...answers, [category]: value });
  };

  const getTitleForStep = (step) => {
    switch (step) {
      case 1:
        return "Enter your Personal Details";
      case 2:
        return "Enter your Publication and Patent";
      case 3:
        return "Enter your Program Details";
      default:
        return "Step " + step;
    }
  };
  return (
    <>
      <div className="text-left">
      <h3 className="header">{getTitleForStep(props.step)}</h3>
        {props.list[props.step - 1].items?.map((item) => {
          return (
            <FormItem
              key={item.label}
              item={item}
              onChange={updateAnswers}
              answer={
                props.pagesAnswers[props.step]
                  ? props.pagesAnswers[props.step][item.value]
                  : ""
              }
            />
          );
        })}
      </div>
    </>
  );
};

export default Multistepform;
