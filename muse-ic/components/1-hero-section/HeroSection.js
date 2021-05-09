import {
  SectionContainer,
  SectionContent,
  ImageAbsolute,
} from "../museic-styled-comps";
import { HeroHeader } from "./HeroHeader";
import { NavBar } from "./NavBar";
import Image from "next/image";
import styled from "styled-components";

export const HeroSection = () => {
  return (
    <SectionContainer>
      <SectionContent>
        <NavBar />
        <HeroHeader />
      </SectionContent>
      <ImageAbsolute>
        <Image src="/Circle 2.png" alt="circle2" width={610} height={1122} />
      </ImageAbsolute>
    </SectionContainer>
  );
};
