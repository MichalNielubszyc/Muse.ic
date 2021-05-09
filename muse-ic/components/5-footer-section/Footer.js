import {
  FooterContainer,
  FooterContent,
  FooterColumn,
  TextPop16px400GreyM,
  ButtonPop16px500DarkU,
  TextSans14px500Grey,
  HorLine100,
  FooterRow,
  BackToTopCont,
  ButtonPop14px500Grey,
} from "../styled-components";
import { Logo } from "../utils/Logo";
import Image from "next/image";

const scrollToTop = () =>{
  window.scrollTo({
    top: 0, 
    behavior: 'smooth'
  })};

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Logo />
        <FooterColumn style={{ marginLeft: "140px" }}>
          <TextPop16px400GreyM>Company</TextPop16px400GreyM>
          <ButtonPop16px500DarkU>About us</ButtonPop16px500DarkU>
          <ButtonPop16px500DarkU>Jobs</ButtonPop16px500DarkU>
          <ButtonPop16px500DarkU>Press</ButtonPop16px500DarkU>
          <ButtonPop16px500DarkU>Blog</ButtonPop16px500DarkU>
        </FooterColumn>
        <FooterColumn>
          <TextPop16px400GreyM>Support</TextPop16px400GreyM>
          <ButtonPop16px500DarkU>Contact us</ButtonPop16px500DarkU>
          <ButtonPop16px500DarkU>Cookies</ButtonPop16px500DarkU>
          <ButtonPop16px500DarkU>Privacy and terms</ButtonPop16px500DarkU>
          <ButtonPop16px500DarkU>Sitemap</ButtonPop16px500DarkU>
        </FooterColumn>
        <FooterColumn style={{ width: "180px" }}>
          <TextPop16px400GreyM>Community</TextPop16px400GreyM>
          <ButtonPop16px500DarkU>Musicians</ButtonPop16px500DarkU>
          <ButtonPop16px500DarkU>Bands</ButtonPop16px500DarkU>
          <ButtonPop16px500DarkU>Forum</ButtonPop16px500DarkU>
          <ButtonPop16px500DarkU>Social Media</ButtonPop16px500DarkU>
        </FooterColumn>
      </FooterContent>
      <HorLine100 />
      <FooterRow>
        <TextSans14px500Grey>© 2021, Lorem ipsum inc.</TextSans14px500Grey>
          <BackToTopCont onClick={scrollToTop}>
            <Image src="/scroll3.jpg" alt="arowright" width={22} height={22} />
            <ButtonPop14px500Grey>Back to top</ButtonPop14px500Grey>
          </BackToTopCont>
      </FooterRow>
    </FooterContainer>
  );
};
