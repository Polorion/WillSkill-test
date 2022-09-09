import * as React from "react";
import S from "../BottomSlide.module.scss";

const ColumnBottomSlide = (props) => {
  return (
    <div className={S.column}>
      <div className={S.imgBodyColumn}>
        <img src={props.img} alt="" />
      </div>
      <div className={S.infoColumn}>
        <div>{props.topInfo}</div>
        <div>{props.bottomInfo}</div>
      </div>
    </div>
  );
};

export default ColumnBottomSlide;
