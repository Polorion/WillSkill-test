import * as React from "react";
import S from "./TopSlide.module.scss";
import bg from "../../assets/img/bg.png";
import Lemon from "../../assets/img/Lemon.png";
import ginger from "../../assets/img/ginger.png";
import nootris from "../../assets/img/nootris.png";

const TopSlide = () => {
  return (
    <div className={S.topSlide} style={{ backgroundImage: `url(${bg})` }}>
      <div className="container">
        <div className={S.body}>
          <h1 className={S.title}>АКТИВИРУЙ ИММУНИТЕТ!</h1>
          <p className={S.subTitle}>
            Всего пять секунд в день помогут укрепить иммунитет и повысить
            защитные силы организма
          </p>
          <div className={S.bottomText}>
            {" "}
            <h2 className={S.infoTitle}>NOOTRIS ПОМОГАЕТ</h2>
            <p className={S.infoSubTitle}>
              Вашему организму во время пандемии и сезонных простуд
            </p>
          </div>
        </div>
      </div>
      <div className={S.composition}>
        <div className={S.Lemon}>
          <img src={Lemon} alt="" />
        </div>
        <div className={S.ginger}>
          <img src={ginger} alt="" />
        </div>
        <div className={S.nootris}>
          <img src={nootris} alt="" />
        </div>
      </div>
    </div>
  );
};

export default TopSlide;
