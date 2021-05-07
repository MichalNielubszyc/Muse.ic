import {
  SectionContainer,
  SectionContent,
} from "../styled-components";
import { HeroHeader } from "./HeroHeader";
import { NavBar } from "./NavBar";


export const HeroSection = () => {
  return (
    <SectionContainer>
      <SectionContent>
          <NavBar />
          <HeroHeader />
      </SectionContent>
    </SectionContainer>
  );
};
