import Image from "next/image";
import { TextPop28px600Dark, LogoContainer } from "../museic-styled-comps";

export const Logo = () => {
  return (
    <LogoContainer>
      <Image src="/logo.png" alt="muse.ic logo" width={23} height={29} />
      <TextPop28px600Dark>Muse.ic</TextPop28px600Dark>
    </LogoContainer>
  );
};
