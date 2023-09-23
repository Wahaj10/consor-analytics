import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
// import Hero from "components/hero/TwoColumnWithVideo.js";
import Hero from "components/hero/TwoColumnWithVideo.js";
import AboutAreaOne from "demos/AboutAreaOne.js";
import FaqAreaOne from "demos/FaqAreaOne.js";
// import MainFeature from "components/features/TwoColWithButton.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
// import DownloadApp from "components/cta/DownloadApp.js";
// import MainFeature from "components/features/TwoColSingleFeatureWithStats.js";

import Footer from "components/footers/FiveColumnWithInputForm.js";

export default () => {
  // const Subheading = tw.span`tracking-wider text-sm font-medium`;
  // const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  // const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;
  return (
    <AnimationRevealPage>
      <Hero
        heading={
          <>
            Data-driven Insights for Your {"  "}
            <span tw="text-primary-500">Success</span>
          </>
        }
        description="Insights derived from comprehensive data analysis."
        imageSrc="https://lpsonline.sas.upenn.edu/sites/default/files/2022-10/plpso-feratures-data-business.jpg"
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="Get in Touch"
        watchVideoButtonText="Why is Big Data Important"
      />
      <AboutAreaOne />
      <FaqAreaOne />

      <Footer />
    </AnimationRevealPage>
  );
};
