import * as React from "react";
import S from "../Header.module.scss";
import { ReactComponent as Basketimg } from "../../../assets/img/basket.svg";

const Basket = ({ count }) => {
  return (
    <div className={S.basketBody}>
      <Basketimg />
      <div className={S.basketCount}>{count ? count : "1"}</div>
    </div>
  );
};

export default Basket;
