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
export const LogoContainer = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 29px;
  gap: 13px;
  cursor: pointer;
`;