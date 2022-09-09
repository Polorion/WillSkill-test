import * as React from "react";
import S from "./../Header.module.scss";
import LiItem from "./LiItem/LiItem";
import GeneratorRandomString from "../../../Utils/GeneratorRandomString";

const Nav = (props) => {
  return (
    <nav className={S.nav}>
      <ul className={S.navList}>
        {props.item.map((el) => {
          return (
            <LiItem
              key={GeneratorRandomString()}
              name={el.title}
              url={el.url}
            />
          );
        })}
        <li className={S.navLi}>
          <a href="tel:+888006000990">8 8 (800) 600-09-90</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
