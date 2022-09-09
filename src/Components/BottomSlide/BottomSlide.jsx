import * as React from "react";
import S from "./BottomSlide.module.scss";
import ColumnBottomSlide from "./ColumnBottomSlide/ColumnBottomSlide";
import ginger from "../../assets/img/ginger.png";
import virus from "../../assets/img/virus.png";
import nootris from "../../assets/img/nootris-rotate.png";
import Mybutton from "../../UI/MyButton/Mybutton";

const BottomSlide = () => {
  return (
    <div className={S.BottomSlide}>
      <div className="container">
        <div className={S.body}>
          <h2 className={S.title}>
            <div className={S.tTitle}>ПОЛУЧИ ЗАЩИТУ ИММУНИТЕТА</div>
            <div className={S.btTitle}> СО СКИДКОЙ -15% ПЕРВЫМ!</div>
          </h2>
          <div className={S.footer}>
            <ColumnBottomSlide
              img={ginger}
              topInfo={"Содержит"}
              bottomInfo={"имбирь"}
            />
            <div className={S.centerColumn}>
              <div className={S.price}>
                <div className={S.oldPrice}>750₽</div>
                <div className={S.newPrice}>690₽</div>
              </div>
              <div className={S.imgBody}>
                <img src={nootris} alt="" />
              </div>
              <div className={S.cTitle}>+ Бесплатная доставка</div>
              <div className={S.cSubtitle}>Специальная цена</div>
              <Mybutton className={S.cButton} name={"Оформить заказ!"} />
            </div>
            <ColumnBottomSlide
              img={virus}
              topInfo={"Нейтрализует"}
              bottomInfo={"вирусы"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomSlide;
