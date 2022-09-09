import * as React from "react";
import S from "./Mybutton.module.scss";

const Mybutton = (props) => {
  const handler = () => {
    props.action && props.action();
  };
  return (
    <button onClick={handler} className={`${S.btn} ${props.className}`}>
      {props.name}
    </button>
  );
};

export default Mybutton;
