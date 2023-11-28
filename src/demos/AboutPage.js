import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "../components/headers/light.js";

import AboutAreaOne from "demos/AboutAreaOne.js";
import FaqAreaOne from "demos/FaqAreaOne.js";

import Footer from "components/footers/FiveColumnWithInputForm.js";

export default () => {
  return (
    <AnimationRevealPage>
      <Header />

      <AboutAreaOne />
      <FaqAreaOne />

      <Footer />
    </AnimationRevealPage>
  );
};
