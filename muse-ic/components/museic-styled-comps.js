import styled from "styled-components";

// CONTAINERS

export const SectionContainer = styled.div`
  min-height: 100vh;
  import url("https://fonts.googleapis.com/css2?family=DM+Sans&family=Poppins&display=swap");
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
  background: #fff;
`;
// @import "~slick-carousel/slick/slick.css"; 
//   @import "~slick-carousel/slick/slick-theme.css";
export const SectionContent = styled.div`
  padding: 50px 100px 100px;
`;

// TEXT COMPONENTS

//POPPINS

export const TextPop16px500Grey = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #999fae;
  margin: 0;
  padding: 0;
`;

export const TextPop16px400Grey = styled(TextPop16px500Grey)`
  font-weight: 400;
`;
export const TextPop16px400GreyM = styled(TextPop16px400Grey)`
  margin-bottom: 30px;
`;
export const TextPop16px400Dark = styled(TextPop16px400Grey)`
  color: #292930;
`;
export const TextPop18px400Grey = styled(TextPop16px500Grey)`
  font-size: 18px;
  font-weight: 400;
`;
export const TextPop18px400GreyW450px = styled(TextPop18px400Grey)`
  width: 480px;
`;
export const TextPop16px500Blue = styled(TextPop16px500Grey)`
  color: #2522ba;
`;
export const TextPop16px500White = styled(TextPop16px500Grey)`
  color: #fff;
`;
export const TextPop28px600Dark = styled(TextPop16px500Grey)`
  font-size: 28px;
  font-weight: 600;
  color: #292930;
`;
export const TextPop12px500WhiteUpper = styled(TextPop16px500White)`
  font-size: 12px;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

// DM SANS

export const TextSans96px700 = styled.h1`
  font-family: "DM Sans", sans-serif;
  font-size: 96px;
  font-weight: 700;
  color: #292930;
  line-height: 95px;
  margin: 110px 0 0;
`;
export const TextSans64px500Dark = styled(TextSans96px700)`
  font-size: 64px;
  font-weight: 500;
  line-height: 64px;
  margin: 0;
`;
export const TextSans64px500White = styled(TextSans64px500Dark)`
  color: #fff;
`;
export const TextSans24px500Grey = styled(TextSans64px500Dark)`
  color: #999fae;
  font-size: 24px;
  font-weight: 500;
  line-height: 34px;
`;
export const TextSans24px500White = styled(TextSans24px500Grey)`
  color: #fff;
`;
export const TextSans24px500Red = styled(TextSans24px500Grey)`
  color: #e74252;
`;
export const TextSans14px500White = styled(TextSans24px500White)`
  font-size: 14px;
`;

export const TextSans14px500Grey = styled(TextSans14px500White)`
  color: #999fae;
`;

export const TextSans20px500White = styled(TextSans24px500Grey)`
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  line-height: 20px;
  width: 154px;
`;
export const TextSans80px500White = styled(TextSans64px500White)`
  font-size: 80px;
  line-height: 80px;
  margin: 0;
  padding: 0;
`;

// BUTTONS

export const ButtonPop16px500GreyU = styled.a`
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #999fae;
  cursor: pointer;
  border-bottom: 2px solid white;
  &:hover {
    border-bottom: 2px solid #999fae;
  }
`;
export const ButtonPop16px500DarkU = styled(ButtonPop16px500GreyU)`
  color: #292930;
  border-bottom: none;
  &:hover {
    border-bottom: none;
    color: #999fae;
  `;
export const ButtonPop14px500Grey = styled(ButtonPop16px500GreyU)`
  font-size: 14px;
  color: #999fae;
  border-bottom: none;
  &:hover {
    border-bottom: none;
  `;
export const ButtonPop16px500BlueU = styled(ButtonPop16px500GreyU)`
  color: #5956e9;
  border-bottom: 2px solid #27272e;
  width: 112px;
  &:hover {
    border-bottom: 2px solid #5956e9;
  }
`;
export const ButtonPop16px500BlueBR = styled.a`
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #2522ba;
  cursor: pointer;
  padding: 28px 46px;
  background: #fff;
  border-radius: 20px;
  box-shadow: none;
  border: none;
  z-index: 10;
  &:hover {
    background: #e6e5ff;
  }
`;
export const ButtonPop16px500WhiteBlueBR = styled(ButtonPop16px500BlueBR)`
  color: #fff;
  background: #5956e9;
  margin-right: 34px;
  &:hover {
    background: #8886ff;
  }
`;
export const ButtonPop16px500BlueBR340pxW = styled(ButtonPop16px500BlueBR)`
  width: 340px;
  padding: 28px 0;
  display: flex;
  justify-content: center;
  box-shadow: 0px 10px 24px 3px rgba(0, 0, 0, 0.39);
`;
export const ButtonPop16px500WhiteBlueBR340pxW = styled(
  ButtonPop16px500WhiteBlueBR
)`
  width: 340px;
  padding: 28px 0;
  display: flex;
  justify-content: center;
`;

// OTHER

export const HorLine = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid;
  width: 40px;
  align-self: center;
  color: #fff;
`;

// CAROUSEL SECTION

export const CarouselSectionContainer = styled(SectionContainer)`
  background: #27272e;
  position: relative;
  overflow: hidden;
  z-index: 1;
`;
export const CarouselSectionContent = styled(SectionContent)`
  padding: 150px 0 130px;
  display: flex;
  flex-direction: column;
  z-index: 1;
`;
export const HeadingContainer = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  gap: 114px;
`;
export const HeadingTextContainer = styled(HeadingContainer)`
  flex-direction: column;
  gap: 48px;
  width: 772px;
  margin: 0;
  padding: 0;
`
export const AlbumsCarousel = styled.div`
  height: 434px;
  width: 1630px;
  margin-left: 60px;
  position: relative;
  margin-top: 45px;
  z-index: 100;
`;
export const CoverCarouselContainer = styled(HeadingContainer)`
  height: 100%;
  width: 440px;
  position: absolute;
  top: 0;
  left: 0;
  flex-direction: column;
  justify-content: center;
  z-index: 14;
  background-image: linear-gradient(
    to left,
    rgba(39, 39, 46, 0),
    rgba(39, 39, 46, 1) 35%
  );
`;
export const Numbers = styled(HeadingContainer)`
  gap: 30px;
  margin-top: 100px;
  width: 270px;
  margin-left: 140px;
`;
export const SingleAlbumContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  cursor: pointer;
  margin-right: 208px;
`;
export const AlbumCover = styled.div`
  box-shadow: 0px 24px 39px 7px rgba(0,0,0,0.51);
  margin: 0 0 20px;
  padding: 0;
  border-radius: 20px;
  width: 240px;
  height: 240px;
`;
export const AlbumEssentials = styled(SingleAlbumContainer)`
  gap: 10px;
`;
export const RightArrowContainer = styled.div`
    position: absolute;
    top: 350px;
    left: 200px;
    cursor: pointer;
    z-index: 14;
`
export const LeftArrowContainer = styled.div`
    position: absolute;
    top: 350px;
    left: 140px;
    cursor: pointer;
    z-index: 14;
`

// HERO SECTION

export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;
export const FlexRowContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 381px;
  margin-left: 52px;
  height: 765px;
  gap: 35px;
`;
export const ImageRelativePlus = styled.div`
  z-index: 10;
  position: relative;
`;
export const ImageAbsolutePlus = styled.div`
  z-index: 1;
  position: absolute;
  top: 200px;
  left: 580px;
`;
export const ImageAbsolute = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 8;
`;

// NAVBAR

export const NavBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const MenuContainer = styled.div`
  display: flex;
  gap: 66px;
  align-items: center;
`;

// FOOTER

export const FooterContainer = styled(SectionContainer)`
  min-height: 0px;
  padding-bottom: 42px;
`;
export const FooterContent = styled(SectionContent)`
  display: flex;
  padding: 86px 200px 45px;
`;
export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 270px;
  gap: 20px;
`;
export const HorLine100 = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid;
  margin: 30px 200px 38px 200px;
  width: calc(100%-400px);
  align-self: center;
  color: #e3e6e9;
`;
export const FooterRow = styled.div`
  margin: 0 200px;
  display: flex;
  justify-content: space-between;
`;
export const BackToTopCont = styled(FooterRow)`
  width: 110px;
  margin: 0;
  align-items: center;
`;

// SINGUP SECTION

export const SingUpSectionContent = styled(SectionContent)`
  padding: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  min-height: 100vh;
`;
export const CardsContainer = styled.div`
  display: flex;
  gap: 40px;
  padding: 0;
  margin: 0;
`;
export const WhiteCard = styled.div`
  width: 340px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #fff;
  border: 1px solid #e3e6e9;
  border-radius: 40px;
  padding: 80px;
`;
export const BlueCard = styled(WhiteCard)`
  background: #5956e9;
  border: none;
`;
export const CardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
