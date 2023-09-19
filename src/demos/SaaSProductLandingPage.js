import React from "react";
import { useEffect } from "react";

import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithInput.js";
import ServiceAreaTwo from "./ServiceAreaTwo.js";
import FeatureWithSteps from "components/features/TwoColWithSteps.js";
import BrandAreaOne from "./BrandAreaOne.js";
import Footer from "components/footers/FiveColumnWithBackground.js";
import macHeroScreenshotImageSrc from "images/graphic1.png";
import blob1 from "images/svg-decorator-blob-1.svg";

const counterAnim = (qSelector, start = 0, end, duration = 1000) => {
  const target = document.querySelector(qSelector);
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    target.innerText = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
};

export default () => {
  const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
  const HighlightedText = tw.span`text-primary-500`;

  useEffect(() => {
    counterAnim("#count1", 10, 3500, 5000);
    counterAnim("#count2", 10, 200, 5000);
    counterAnim("#count3", 10, 24, 5000);
    return () => {};
  }, []);

  return (
    <AnimationRevealPage>
      <Hero roundedHeaderButton={true} />
      <div tw="w-auto py-10">
        <div tw="grid grid-cols-1 sm:grid-cols-3 place-content-evenly xl:mx-40 lg:mx-32 ">
          <div
            tw="w-auto items-center flex flex-col justify-center p-1 text-2xl"
            style={{
              backgroundImage: `url(${blob1})`,
              backgroundRepeat: "no-repeat",
            }}
          >
            <span tw="font-bold text-primary-500">
              <span id="count1">0</span>PB+
            </span>
            <span>Data Written/s</span>
          </div>
          <div tw="w-auto items-center flex flex-col justify-center p-1 text-2xl">
            {/* <div tw="w-40 h-40 flex flex-col justify-center items-center bg-violet-200 rounded-lg"> */}
            {/* <img src={icon} alt="icon" tw="w-16 h-auto"></img> */}
            <span tw="font-bold text-primary-500">
              <span id="count2">0</span>+
            </span>
            <span>Companies helped</span>
            {/* </div> */}
          </div>
          <div tw="w-auto items-center flex flex-col justify-center p-1 text-2xl">
            {/* <div tw="w-40 h-40 flex flex-col justify-center items-center bg-violet-200 rounded-lg"> */}
            {/* <img src={icon} alt="icon" tw="w-16 h-auto"></img> */}
            <span tw="font-bold text-primary-500">
              <span>$</span>
              <span id="count3">0</span>+
            </span>
            <span>Average $ Saved</span>
            {/* </div> */}
          </div>
        </div>
      </div>

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
      <Footer />
    </AnimationRevealPage>
  );
};
