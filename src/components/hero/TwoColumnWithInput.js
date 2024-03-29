import React from "react";
import { useEffect } from "react";

import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import Header from "../headers/light.js";

import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import DesignIllustration from "../../images/consor_dashboard.png";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col lg:flex-row lg:items-center max-w-screen-xl mx-auto py-20 md:py-24`;
const LeftColumn = tw.div`relative lg:w-5/12 text-center max-w-lg mx-auto lg:max-w-none lg:text-left`;
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex-1 flex flex-col justify-center lg:self-end`;

const Paragraph = tw.p`my-5 lg:my-8 text-base xl:text-lg`;

const IllustrationContainer = tw.div`flex justify-center lg:justify-end items-center`;

// Random Decorator Blobs (shapes that you see in background)
const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none opacity-5 absolute left-0 bottom-0 h-64 w-64 transform -translate-x-2/3 -z-10`}
`;

async function deleteSentence(eleRef) {
  const sentence = document.querySelector(eleRef).innerHTML;
  const letters = sentence.split("");
  while (letters.length > 0) {
    await waitForMs(100);
    letters.pop();
    document.querySelector(eleRef).innerHTML = letters.join("");
  }
}

async function typeSentence(sentence, eleRef, delay = 100) {
  const letters = sentence.split("");
  let i = 0;
  while (i < letters.length) {
    await waitForMs(delay);
    document.querySelector(eleRef).append(letters[i]);
    i++;
  }
  return;
}

async function waitForMs(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function carouselTextType() {
  const carouselText = ["Fluently.", "Constantly.", "So you don't have to."];
  let i = 0;
  while (i < 4) {
    await typeSentence(carouselText[i], "#sentence");
    await waitForMs(1500);
    await deleteSentence("#sentence");
    await waitForMs(500);
    i += 1;
    if (i === 3) {
      i = 0;
    }
  }
}

export default ({ roundedHeaderButton }) => {
  useEffect(() => {
    const onPageLoad = () => {
      setTimeout(() => {
        carouselTextType();
      }, 500);
    };

    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  return (
    <>
      <Header roundedHeaderButton={roundedHeaderButton} />
      <Container>
        <TwoColumn>
          <LeftColumn>
            {/* <Heading>
              <span tw="text-primary-500">Data</span> is a language we speak{" "}
              <span tw="text-primary-500">fluently.</span>
            </Heading> */}
            <div class="typing-container">
              Data is a Language we speak{" "}
              <span id="sentence" className="sentence"></span>
              <span className="input-cursor"></span>
            </div>

            <Paragraph>
              At Consor Analytics, we turn data into insights to help businesses
              make smarter decisions and drive success.
            </Paragraph>
          </LeftColumn>
          <RightColumn>
            <IllustrationContainer>
              <img
                tw="min-w-0 w-full max-w-lg xl:max-w-3xl"
                src={DesignIllustration}
                alt="Design Illustration"
              />
            </IllustrationContainer>
          </RightColumn>
        </TwoColumn>
        <DecoratorBlob1 />
      </Container>
    </>
  );
};
