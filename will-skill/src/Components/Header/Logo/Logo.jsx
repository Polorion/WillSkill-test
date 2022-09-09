import * as React from "react";
import S from "../Header.module.scss";
import { ReactComponent as Logoimg } from "../../../assets/img/logo.svg";

const Logo = () => {
  return (
    <div className={S.logo}>
      <Logoimg />
    </div>
  );
};

export default Logo;
