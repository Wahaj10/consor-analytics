import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
// import Hero from "components/hero/TwoColumnWithVideo.js";
import Hero from "components/hero/BackgroundAsImageWithCenteredContent.js";
import ServiceAreaGroup from "demos/ServiceAreaGroup.js";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
// import DownloadApp from "components/cta/DownloadApp.js";
// import MainFeature from "components/features/TwoColSingleFeatureWithStats.js";

import Footer from "components/footers/FiveColumnWithInputForm.js";

export default () => {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;
  return (
    <AnimationRevealPage>
      <Hero
        heading={
          <>
            Provide clients with{" "}
            <HighlightedText>actionable insights</HighlightedText>
          </>
        }
        description="Insights derived from comprehensive data analysis."
        imageSrc="https://lpsonline.sas.upenn.edu/sites/default/files/2022-10/plpso-feratures-data-business.jpg"
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="Order Now"
        watchVideoButtonText="Meet The Chefs"
      />
      <ServiceAreaGroup />
      <MainFeature
        subheading={<Subheading>Established Since 2021</Subheading>}
        heading={
          <>
            Develop bespoke{" "}
            <HighlightedText>analytics solutions</HighlightedText>
          </>
        }
        description={
          <Description>
            Solutions tailored to your needs, ensuring that you gain maximum
            value from the data available.
          </Description>
        }
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonText="Latest Offers"
        imageSrc={
          "https://elements-cover-images-0.imgix.net/e188ad7d-b55b-4c39-886a-e178683448ee?auto=compress%2Cformat&fit=max&w=2038&s=e33e93fa9176888f7f4a62983e1bb2c3"
        }
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />

      <MainFeature2
        subheading={<Subheading>A Reputed Brand</Subheading>}
        heading={
          <>
            <HighlightedText>Predictive</HighlightedText> Analytics
          </>
        }
        statistics={[
          {
            key: "Orders",
            value: "94000+",
          },
          {
            key: "Customers",
            value: "11000+",
          },
          {
            key: "Chefs",
            value: "1500+",
          },
        ]}
        primaryButtonText="Order Now"
        description="Uncover hidden patterns and trends in their data. Equip clients with the foresight necessary to adapt proactively, seize opportunities, mitigate risks, and optimise resource allocation. "
        imageInsideDiv={false}
        imageSrc="https://elements-cover-images-0.imgix.net/3b651567-5625-43f2-88d3-a60be4aaaf71?auto=compress%2Cformat&fit=max&w=2740&s=796fffee11f9e898fd1c604113759742"
        imageCss={Object.assign(tw`bg-cover`, imageCss)}
        imageContainerCss={tw`md:w-1/2 h-auto`}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 md:w-32 md:h-32 -translate-x-1/2 opacity-25`}
        textOnLeft={true}
      />
      {/* <Testimonial
        subheading=""
        heading={
          <>
            Customers <HighlightedText>Love Us.</HighlightedText>
          </>
        }
      /> */}
      {/* <DownloadApp
        text={<>People around you are ordering delicious meals using the <HighlightedTextInverse>Treact App.</HighlightedTextInverse></>}
      /> */}
      <Footer />
    </AnimationRevealPage>
  );
};
