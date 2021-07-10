import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line

import { SectionHeading } from "../misc/Headings.js";
import { SectionDescription } from "../misc/Typography.js";
import logoImageSrc from "../../images/iphone_mockup.png";
import downloadAppStore from "../../images/Download_App_Store.svg";
import downloadPlayStore from "../../images/download_play_store.svg";

const PrimaryBackgroundContainer = tw.div`min-h-screen flex items-center justify-center bg-primary-900`;

const Row = tw.div`flex items-center justify-center flex-col lg:flex-row`;
const DownloadButtonsRow = tw.div`flex flex-row space-x-4 pt-8 justify-center lg:justify-start`;
const TextColumn = tw.div`text-center lg:text-left`;
const IllustrationColumn = tw.div`mt-16 lg:mt-0 lg:ml-16 lg:w-1/2`;
const Heading = tw(
  SectionHeading
)`max-w-3xl lg:max-w-4xl lg:text-left leading-tight text-gray-100`;
const Description = tw(
  SectionDescription
)`mt-4 max-w-2xl text-gray-100 lg:text-base mx-auto lg:mx-0`;
const Image = tw.img`flex w-1/2 m-auto`;
const DownloadImage = tw.img`my-auto h-16`;

function PrimaryBackground({
  heading = "Blessing Book",
  description = "Designed to have as close to you as with a simple touch of your finger, the most common blessings that you may need in your day-to-day or on special occasions. You will find blessings related to the Family, such as the Blessing of children, as well as those of food, holidays, Shabbat, and special occasions.",
  imageSrc = logoImageSrc,
}) {
  return (
    <PrimaryBackgroundContainer>
      <Row>
        <TextColumn>
          <Heading>{heading}</Heading>
          <Description>{description}</Description>

          <DownloadButtonsRow>
            {/* <a href="https://www.google.com"> */}
            <DownloadImage src={downloadAppStore} />
            {/* </a> */}
            <a href="https://play.google.com/store/apps/developer?id=Sami+Pesate&hl=en&gl=US">
              <DownloadImage src={downloadPlayStore} />
            </a>
          </DownloadButtonsRow>
        </TextColumn>
        <IllustrationColumn>
          <Image src={imageSrc} />
        </IllustrationColumn>
      </Row>
    </PrimaryBackgroundContainer>
  );
}

export default PrimaryBackground;
