import React from "react";
import GlobalStyles from "styles/GlobalStyles";
import { css } from "styled-components/macro"; //eslint-disable-line

import ContactUsForm from "components/forms/ContactPage.js";
import SaaSProductLandingPage from "demos/SaaSProductLandingPage.js";
import AboutPage from "demos/AboutPage.js";
import ServicesPage from "demos/ServicesPage.js";
import ThankYouPage from "ThankYouPage.js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  // If you want to disable the animation just use the disabled `prop` like below on your page's component
  // return <AnimationRevealPage disabled>xxxxxxxxxx</AnimationRevealPage>;

  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<SaaSProductLandingPage />} />
          <Route path="/contact-us" element={<ContactUsForm />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
        </Routes>
      </Router>
    </>
  );
}
