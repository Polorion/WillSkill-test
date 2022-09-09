import * as React from "react";
import S from "../Header.module.scss";

const Burger = (props) => {
  const handler = () => {
    props.burgerOpenClose();
  };
  return (
    <div
      onClick={handler}
      className={`${S.burgerBody} ${props.activeBurger && S.active}`}
    >
      <span></span>
    </div>
  );
};

export default Burger;
