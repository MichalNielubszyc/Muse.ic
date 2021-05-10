import Image from "next/image";
import { SectionContainer, SectionContent } from "../museic-styled-comps";
import { ImageAbsolute } from "./HeroStyledComps";
import { HeroHeader } from "./HeroHeader";
import { NavBar } from "./NavBar";

export const HeroSection = () => {
  return (
    <SectionContainer>
      <SectionContent>
        <NavBar />
        <HeroHeader />
      </SectionContent>
      <ImageAbsolute>
        <Image src="/Circle2.png" alt="circle2" width={610} height={1122} />
      </ImageAbsolute>
    </SectionContainer>
  );
};
