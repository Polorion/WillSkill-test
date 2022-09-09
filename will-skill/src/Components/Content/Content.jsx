import * as React from "react";
import TopSlide from "../TopSlide/TopSlide";
import BottomSlide from "../BottomSlide/BottomSlide";
import { Outlet } from "react-router-dom";

const Content = () => {
  return (
    <div>
      <Outlet />
      <TopSlide />
      <BottomSlide />
    </div>
  );
};

export default Content;
