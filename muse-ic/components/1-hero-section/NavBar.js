import {
  ButtonPop16px500BlueBR,
  ButtonPop16px500GreyU,
  NavBarContainer,
  MenuContainer,
} from "../museic-styled-comps";
import { Logo } from "../utils/Logo";

import { IoIosArrowDown } from "react-icons/io";

export const NavBar = () => {
  return (
    <NavBarContainer>
      <MenuContainer>
        <Logo />
        <ButtonPop16px500GreyU>Features</ButtonPop16px500GreyU>
        <ButtonPop16px500GreyU>Pricing</ButtonPop16px500GreyU>
        <ButtonPop16px500GreyU>Library</ButtonPop16px500GreyU>
        <ButtonPop16px500GreyU
          style={{ display: "flex", alignItems: "center" }}
        >
          Explore{" "}
          <IoIosArrowDown style={{ marginLeft: "10px", fontSize: "26px" }} />{" "}
        </ButtonPop16px500GreyU>
      </MenuContainer>
      <ButtonPop16px500BlueBR>Get Started</ButtonPop16px500BlueBR>
    </NavBarContainer>
  );
};
