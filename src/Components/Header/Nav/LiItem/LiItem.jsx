import * as React from "react";
import S from "../../Header.module.scss";
import G from "../../BurgerMenu/BurgerMenu.module.scss";
import { NavLink } from "react-router-dom";

const LiItem = (props) => {
  const handel = props.action;
  return (
    <li className={S.navLi} onClick={handel}>
      <NavLink
        to={`${props.url}`}
        className={(state) => (state.isActive ? `${S.active} ${G.active}` : "")}
      >
        {" "}
        {props.name}
      </NavLink>
    </li>
  );
};

export default LiItem;
