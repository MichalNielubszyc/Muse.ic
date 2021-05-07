import styled from "styled-components";

// CONTAINERS

export const SectionContainer = styled.div`
  height: 100vh;
  @import url("https://fonts.googleapis.com/css2?family=DM+Sans&family=Poppins&display=swap");
`;

export const SectionContent = styled.div`
  padding: 70px 100px 100px;
`;


// TEXT COMPONENTS

export const TextPop16px500Grey = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #999fae;
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

// BUTTONS

export const ButtonPop16px500GreyU = styled.a`
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #999fae;
  cursor: pointer;
  border-bottom: 2px solid white;
  &:hover{
      border-bottom: 2px solid #999fae
  };
`;

export const ButtonPop16px500BlueBR = styled(ButtonPop16px500GreyU)`
    color: #2522ba;
    border: none;
    padding: 28px 66px;
    background: #fff;
    border-radius: 20px;
    &:hover{
        border: none;
        background: #E6E5FF;
    };
`


// IMAGES

export const Logo = styled.img`
  width: 23px;
  height: 29px;
`

