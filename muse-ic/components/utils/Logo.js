import Image from "next/image";
import { TextPop, LogoContainer } from "../museic-styled-comps";

export const Logo = () => {
  return (
    <LogoContainer>
      <Image src="/logo.png" alt="muse.ic logo" width={23} height={29} />
      <TextPop textSize="28px" textWeight="600" textColor="#292930">
        Muse.ic
      </TextPop>
    </LogoContainer>
  );
};
