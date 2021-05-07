import styled from "styled-components";
import { ButtonPop16px500GreyU } from "../styled-components";
import {Logo} from "../utils/Logo"


const NavBarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 66px;
`;

export const NavBar = () => {
  return (
    <NavBarContainer>
        <Logo />
        <ButtonPop16px500GreyU>Features</ButtonPop16px500GreyU>
        <ButtonPop16px500GreyU>Pricing</ButtonPop16px500GreyU>
        <ButtonPop16px500GreyU>Library</ButtonPop16px500GreyU>
        <ButtonPop16px500GreyU>Explore</ButtonPop16px500GreyU>
    </NavBarContainer>
  );
};
