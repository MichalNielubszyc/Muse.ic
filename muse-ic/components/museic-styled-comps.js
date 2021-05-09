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
export const SectionContent = styled.div`
  padding: 50px 100px 100px;
`;

export const Container = styled.div`
  padding: ${props => props.contPadd || "0"};
  margin: ${props => props.contMarg || "0"};
  width: ${props => props.contWidth || "auto"};
`

// TEXT COMPONENTS

export const TextPop = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: ${props => props.textSize || "16px"};
  font-weight: ${props => props.textWeight || "500"};
  color: ${props => props.textColor || "#999fae"};
  text-transform: ${props => props.textTrans || "#uppercase"};
  margin: 0;
  padding: 0;
`;

export const TextSans = styled.p`
  font-family: "DM Sans", sans-serif;
  font-size: ${props => props.textSize || "24px"};
  font-weight: ${props => props.textWeight || "500"};
  color: ${props => props.textColor || "#FFF"};
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