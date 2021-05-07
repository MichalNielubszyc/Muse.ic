import styled from "styled-components";
import Image from "next/image";
import {
    TextPop28px600Dark,
  } from "../styled-components";

const LogoContainer = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 29px;
  gap: 13px;
  cursor: pointer;
`;

export const Logo = () => {
    return (
        <LogoContainer>
          <Image
            src="/logo.png"
            alt="muse.ic logo"
            width={23}
            height={29}
          />
          <TextPop28px600Dark>Muse.ic</TextPop28px600Dark>
        </LogoContainer>
    );
  };