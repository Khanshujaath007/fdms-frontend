import { Form } from "react-bootstrap";
import { FormItem } from "./FormItem";
const Multistepform = (props) => {
  return (
    <>
      <div className="text-left">
        {props.list[props.step - 1].items?.map((item, index) => {
          return <FormItem key={item.label} item={item} />;
        })}
      </div>
    </>
  );
};

export default Multistepform;
