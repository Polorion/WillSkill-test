import * as React from "react";
import S from "./Page404.module.scss";
import bg from "../../assets/img/bg.png";
import nootris from "../../assets/img/nootris.png";
import { useNavigate } from "react-router-dom";
import Mybutton from "../../UI/MyButton/Mybutton";

const Page404 = () => {
  const history = useNavigate();
  const exit = () => {
    history("/");
  };
  return (
    <div className={S.body} style={{ backgroundImage: `url(${bg})` }}>
      <div className={`container ${S.container} `}>
        <h2 className={S.title}>Cтраница еще не готова=(</h2>
        <p> а ты пока закажи=)</p>
        <div className={S.imgBody}>
          <img src={nootris} alt="" />
        </div>
        <Mybutton
          action={exit}
          name={"вернуться на рабочую страницу и заказать"}
        />
      </div>
    </div>
  );
};

export default Page404;
