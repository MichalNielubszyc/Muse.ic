import styled from "styled-components";
import {
  ButtonPop16px500BlueBR,
  ButtonPop16px500GreyU,
} from "../styled-components";
import { Logo } from "../utils/Logo";

import { IoIosArrowDown } from "react-icons/io"

const NavBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MenuContainer = styled.div`
  display: flex;
  gap: 66px;
  align-items: center;
`;

export const NavBar = () => {
  return (
    <NavBarContainer>
      <MenuContainer>
        <Logo />
        <ButtonPop16px500GreyU>Features</ButtonPop16px500GreyU>
        <ButtonPop16px500GreyU>Pricing</ButtonPop16px500GreyU>
        <ButtonPop16px500GreyU>Library</ButtonPop16px500GreyU>
        <ButtonPop16px500GreyU style={{display: "flex", alignItems: "center"}}>Explore <IoIosArrowDown style={{marginLeft: "10px", fontSize: "26px"}} /> </ButtonPop16px500GreyU>
      </MenuContainer>
      <ButtonPop16px500BlueBR>Get Started</ButtonPop16px500BlueBR>
    </NavBarContainer>
  );
};
