import * as React from "react";
import S from "./BurgerMenu.module.scss";
import ReactDOM from "react-dom";
import LiItem from "../Nav/LiItem/LiItem";
import GeneratorRandomString from "../../../Utils/GeneratorRandomString";

const BurgerMenu = (props) => {
  const node = document.querySelector("#burgerMenu");
  const close = () => {
    props.burgerOpenClose();
  };
  if (!node) {
    return;
  }
  return ReactDOM.createPortal(
    <div
      className={`${S.burgerBody} ${props.activeBurger && S.active}`}
      onClick={close}
    >
      <ul
        className={S.list}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {props.item.map((el) => {
          return (
            <LiItem
              key={GeneratorRandomString()}
              name={el.title}
              url={el.url}
              action={close}
            />
          );
        })}
      </ul>
    </div>,
    node
  );
};

export default BurgerMenu;
