import { SectionContainer, SectionContent } from "../styled-components";
import { HeroHeader } from "./HeroHeader";
import { NavBar } from "./NavBar";
import Image from "next/image";
import styled from "styled-components";

const ImageAbsolute = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  zindex: -10;
`;

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
