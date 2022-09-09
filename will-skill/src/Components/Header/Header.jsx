import * as React from "react";
import S from "./Header.module.scss";
import Nav from "./Nav/Nav";
import Logo from "./Logo/Logo";
import Basket from "./Basket/Basket";
import Burger from "./Burger/Burger";
import { useState } from "react";
import BurgerMenu from "./BurgerMenu/BurgerMenu";

const Header = () => {
  const [activeBurger, setActiveBurger] = useState(false);

  const item = [
    { title: "FAQ", url: "faq" },
    { title: "Доставка", url: "delivery" },
    { title: "Возврат", url: "Return" },
    { title: "Исследования", url: "Research" },
    { title: "Кабинет", url: "cabinet" },
  ];
  const burgerOpenClose = () => {
    setActiveBurger(!activeBurger);
  };
  return (
    <div className={S.header}>
      <div className={`container ${S.headerContainer}`}>
        <Logo />
        <Nav item={item} />
        <Burger burgerOpenClose={burgerOpenClose} activeBurger={activeBurger} />
        <Basket />
        <BurgerMenu
          item={item}
          burgerOpenClose={burgerOpenClose}
          activeBurger={activeBurger}
        />
      </div>
    </div>
  );
};

export default Header;
