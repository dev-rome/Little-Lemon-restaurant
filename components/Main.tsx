import React from "react";

import Header from "./layout/Header";

import Specials from "./sections/Specials"
import Testimonials from "./sections/Testimonials"
import About from "./sections/About"

const Main = () => {
  return (
    <>
      <Header />
      <Specials />
      <Testimonials />
    </>
  );
};

export default Main;
