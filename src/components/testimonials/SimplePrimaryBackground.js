import React, { useState } from "react";
import Slider from "react-slick";
import tw from "twin.macro";
import styled, { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { ReactComponent as QuoteIconBase } from "images/quotes-l.svg";
import { ReactComponent as ArrowLeftIcon } from "images/arrow-left-3-icon.svg";
import { ReactComponent as ArrowRightIcon } from "images/arrow-right-3-icon.svg";

import "slick-carousel/slick/slick.css";

const PrimaryBackgroundContainer = tw(
  Container
)`-mx-8 px-8 bg-primary-900 text-gray-100`;

const HeadingContainer = tw.div``;
const Subheading = tw(SubheadingBase)`text-center text-gray-100 mb-4`;
const Heading = tw(SectionHeading)`text-white`;
const Description = tw(SectionDescription)`mx-auto text-center text-gray-300`;

const TestimonialsSlider = styled(Slider)`
  ${tw`flex mt-16 mx-auto max-w-xs sm:max-w-xl lg:max-w-4xl text-left bg-gray-100 rounded-lg text-gray-900`}
  .slick-track {
    ${tw`flex!`}
  }
  .slick-slide {
    ${tw`h-auto`}
  }
  .slick-slide > div {
    ${tw`h-full`}
  }
`;
const Testimonial = tw.div`px-6 py-12 sm:px-20 sm:py-16 focus:outline-none flex! flex-col justify-between h-full`;
const QuoteContainer = tw.div`relative`;
const QuoteIcon = tw(
  QuoteIconBase
)`absolute opacity-15 top-0 left-0 transform -translate-y-2 -translate-x-1/2 sm:-translate-x-full w-10 fill-current text-primary-500`;
const Quote = tw.blockquote`font-medium sm:font-normal relative text-sm sm:text-xl text-center sm:text-left`;
const CustomerInfoAndControlsContainer = tw.div`mt-8 flex items-center flex-col sm:flex-row justify-center text-center sm:text-left`;
const CustomerImage = tw.img`w-16 h-16 rounded-full object-contain`;
const CustomerNameAndProfileContainer = tw.div`mt-4 sm:mt-0 sm:ml-4 flex flex-col`;
const CustomerName = tw.span`text-lg font-semibold`;
const CustomerProfile = tw.span`text-sm font-normal text-gray-700`;
const ControlsContainer = tw.div`sm:ml-auto flex`;
const ControlButton = styled.button`
  ${tw`text-gray-600 hover:text-primary-700 focus:outline-none transition-colors duration-300 ml-4 first:ml-0 sm:first:ml-4 mt-4 sm:mt-0`}
  .icon {
    ${tw`fill-current w-6`}
  }
`;

export default ({
  subheading = "",
  heading = "Testimonials",
  description = "",
  testimonials = [
    {
      customerName: "A & V Auto",
      customerProfile: "Automotive Industry",
      imageSrc:
        "https://www.pngfind.com/pngs/m/424-4248128_av-auto-parts-depot-car-spare-parts-logo.png",
      quote:
        "It's a pleasure working with the Consor team, assisting in managing our data and" +
        "uncovering clear trends in our auto parts business. Thanks to their expertise, we've" +
        "not only identified crucial blind spots but have also improved our processes significantly." +
        "Consor Analytics' efficient and meticulous approach to managing our inventory data has undeniably played" +
        "a pivotal role in advancing our operational excellence. We eagerly look forward to continued success in our collaborative efforts.",
    },
    {
      customerName: "YYC Wraps",
      customerProfile: "Automotive Industry",
      imageSrc:
        "https://files.elfsightcdn.com/4d5bb8f6-b783-483d-81d8-5e25adce44e7/dfee70bd-7ee9-4957-969b-5aff6c096c16.png",
      quote:
        "Consor Analytics has played a vital role in YYC Wraps' success by providing a comprehensive analysis of our" +
        "vendor management data and pricing strategies. Their thorough examination and strategic insights have greatly improved our decision-making processes.",
    },
  ],
}) => {
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <PrimaryBackgroundContainer>
      <ContentWithPaddingXl>
        <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          <Heading>{heading}</Heading>
          <Description>{description}</Description>
        </HeadingContainer>
        <TestimonialsSlider arrows={false} ref={setSliderRef}>
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index}>
              <QuoteContainer>
                <QuoteIcon />
                <Quote>{testimonial.quote}</Quote>
              </QuoteContainer>
              <CustomerInfoAndControlsContainer>
                <CustomerImage src={testimonial.imageSrc} />
                <CustomerNameAndProfileContainer>
                  <CustomerName>{testimonial.customerName}</CustomerName>
                  <CustomerProfile>
                    {testimonial.customerProfile}
                  </CustomerProfile>
                </CustomerNameAndProfileContainer>
                <ControlsContainer>
                  <ControlButton onClick={sliderRef?.slickPrev}>
                    <ArrowLeftIcon className="icon" />
                  </ControlButton>
                  <ControlButton>
                    <ArrowRightIcon
                      className="icon"
                      onClick={sliderRef?.slickNext}
                    />
                  </ControlButton>
                </ControlsContainer>
              </CustomerInfoAndControlsContainer>
            </Testimonial>
          ))}
        </TestimonialsSlider>
      </ContentWithPaddingXl>
    </PrimaryBackgroundContainer>
  );
};
