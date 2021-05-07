import styled from "styled-components";

// CONTAINERS

export const SectionContainer = styled.div`
  min-height: 100vh;
  @import url("https://fonts.googleapis.com/css2?family=DM+Sans&family=Poppins&display=swap");
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
  background: #FFF;
`;

export const SectionContent = styled.div`
  padding: 50px 100px 100px;
`;

// TEXT COMPONENTS

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

export const TextPop18px400Grey = styled(TextPop16px500Grey)`
  font-size: 18px;
  font-weight: 400;
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

export const TextSans96px700 = styled.h1`
  font-family: "DM Sans", sans-serif;
  font-size: 96px;
  font-weight: 700;
  color: #292930;
  line-height: 95px;
  margin: 110px 0 0;
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
