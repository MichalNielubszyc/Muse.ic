import styled from "styled-components";

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
  left: 660px;
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
