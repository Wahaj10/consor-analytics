import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
// import Hero from "components/hero/TwoColumnWithVideo.js";
import Hero from "components/hero/ServicePageHero.js";
import ServiceAreaGroup from "demos/ServiceAreaGroup.js";
// import MainFeature from "components/features/TwoColWithButton.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
// import DownloadApp from "components/cta/DownloadApp.js";
// import MainFeature from "components/features/TwoColSingleFeatureWithStats.js";

import Footer from "components/footers/FiveColumnWithInputForm.js";

export default () => {
  // const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  // const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;
  return (
    <AnimationRevealPage>
      <Hero
        heading={
          <>
            Services tailored{" "}
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
      {/* <MainFeature
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
          "https://envato-shoebox-0.imgix.net/b583/0b83-5dc2-42b3-ba7c-f256a3b8150a/634cc5eb341cb203625f1702_withmeta.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1600&s=81da697776ce4bd1378e1545f2ad40e4"
        }
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-15`}
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
      /> */}
      <ServiceAreaGroup />

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
