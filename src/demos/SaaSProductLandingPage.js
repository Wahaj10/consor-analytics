import React from "react";

import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithInput.js";
import Testimonials from "components/testimonials/SimplePrimaryBackground.js";
import Testimonials2 from "components/testimonials/ThreeColumnWithProfileImage.js";
import Testimonials3 from "components/testimonials/TwoColumnWithImage.js";
import Testimonials4 from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
import Testimonials5 from "components/testimonials/TwoColumnWithImageAndRating.js";
import ServiceAreaTwo from "./ServiceAreaTwo.js";
import CounterAreaFour from "./CounterAreaFour.js";
import FeatureWithSteps from "components/features/TwoColWithSteps.js";
import BrandAreaOne from "./BrandAreaOne.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import macHeroScreenshotImageSrc from "images/graphic1.png";

export default () => {
  const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
  const HighlightedText = tw.span`text-primary-500`;

  return (
    <AnimationRevealPage>
      <Hero roundedHeaderButton={true} />

      <CounterAreaFour />

      {/* <ServicesTabs /> */}
      <ServiceAreaTwo />

      <FeatureWithSteps
        subheading={<Subheading></Subheading>}
        heading={
          <>
            Why <HighlightedText>Consor</HighlightedText>
          </>
        }
        textOnLeft={false}
        imageSrc={macHeroScreenshotImageSrc}
        imageDecoratorBlob={true}
        decoratorBlobCss={tw`xl:w-40 xl:h-40 opacity-15 -translate-x-1/2 left-1/2`}
      />
      <BrandAreaOne />

      <Testimonials></Testimonials>
      <Testimonials2></Testimonials2>
      <Testimonials3></Testimonials3>
      <Testimonials4></Testimonials4>
      <Testimonials5></Testimonials5>
      <Footer />
    </AnimationRevealPage>
  );
};
