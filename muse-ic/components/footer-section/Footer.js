import Image from "next/image";
import {
  TextPop,
  TextSans,
  Container,
  ButtonPop16px500DarkU,
  ButtonPop14px500Grey,
} from "../museic-styled-comps";
import {
  FooterContainer,
  FooterContent,
  FooterColumn,
  HorLine100,
  FooterRow,
  BackToTopCont,
} from "./FooterStyledComps";
import { Logo } from "../utils/Logo";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Logo />
        <Container contMarg="0 0 0 140px">
          <FooterColumn>
            <Container contMarg="0 0 30px">
              <TextPop textWeight="400">Company</TextPop>
            </Container>
            <ButtonPop16px500DarkU>About us</ButtonPop16px500DarkU>
            <ButtonPop16px500DarkU>Jobs</ButtonPop16px500DarkU>
            <ButtonPop16px500DarkU>Press</ButtonPop16px500DarkU>
            <ButtonPop16px500DarkU>Blog</ButtonPop16px500DarkU>
          </FooterColumn>
        </Container>
        <FooterColumn>
          <Container contMarg="0 0 30px">
            <TextPop textWeight="400">Support</TextPop>
          </Container>
          <ButtonPop16px500DarkU>Contact us</ButtonPop16px500DarkU>
          <ButtonPop16px500DarkU>Cookies</ButtonPop16px500DarkU>
          <ButtonPop16px500DarkU>Privacy and terms</ButtonPop16px500DarkU>
          <ButtonPop16px500DarkU>Sitemap</ButtonPop16px500DarkU>
        </FooterColumn>
        <Container contWidth="150px">
          <FooterColumn>
            <Container contMarg="0 0 30px">
              <TextPop textWeight="400">Community</TextPop>
            </Container>
            <ButtonPop16px500DarkU>Musicians</ButtonPop16px500DarkU>
            <ButtonPop16px500DarkU>Bands</ButtonPop16px500DarkU>
            <ButtonPop16px500DarkU>Forum</ButtonPop16px500DarkU>
            <ButtonPop16px500DarkU>Social Media</ButtonPop16px500DarkU>
          </FooterColumn>
        </Container>
      </FooterContent>
      <HorLine100 />
      <FooterRow>
        <TextSans textSize="14px" textColor="#999fae">
          © 2021, Lorem ipsum inc.
        </TextSans>
        <BackToTopCont onClick={scrollToTop}>
          <Image src="/scroll3.jpg" alt="arowright" width={22} height={22} />
          <ButtonPop14px500Grey>Back to top</ButtonPop14px500Grey>
        </BackToTopCont>
      </FooterRow>
    </FooterContainer>
  );
};
