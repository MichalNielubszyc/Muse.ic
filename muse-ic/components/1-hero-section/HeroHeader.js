import Image from "next/image";
import {
  TextSans96px700,
  ButtonPop16px500GreyU,
  TextPop18px400Grey,
  ButtonPop16px500WhiteBlueBR,
  TextPop16px400Grey,
  HeroContainer,
  FlexRowContainer,
  TextContainer,
  ImageRelativePlus,
  ImageAbsolutePlus,
} from "../museic-styled-comps";

export const HeroHeader = () => {
  return (
    <HeroContainer>
      <FlexRowContainer>
        <Image src="/Circle 4.png" alt="pink circle" width={48} height={48} />
      </FlexRowContainer>
      <TextContainer>
        <TextSans96px700>
          Listen Like Never Before<span style={{ color: "#5956E9"}}>.</span>
        </TextSans96px700>
        <TextPop18px400Grey>
          We offer music in 100x better quality than our competitors. Say good
          bye to FLAC 👋
        </TextPop18px400Grey>
        <FlexRowContainer>
          <ButtonPop16px500WhiteBlueBR>Get started</ButtonPop16px500WhiteBlueBR>
          <Image src="/play.jpg" alt="play" width={16} height={16} />
          <ButtonPop16px500GreyU style={{ marginLeft: "16px" }}>
            See it in action!
          </ButtonPop16px500GreyU>
        </FlexRowContainer>
        <FlexRowContainer>
          <Image src="/scroll3.jpg" alt="arowright" width={22} height={22} />
          <TextPop16px400Grey style={{ marginLeft: "16px" }}>
            Scroll to explore
          </TextPop16px400Grey>
        </FlexRowContainer>
      </TextContainer>
      <ImageRelativePlus>
        <Image
          src="/Hero image.png"
          alt="pink circle"
          width={690}
          height={769}
        />
      </ImageRelativePlus>
      <ImageAbsolutePlus>
        <Image
          src="/Circle 7.png"
          alt="yellow circle"
          width={128}
          height={128}
        />
      </ImageAbsolutePlus>
    </HeroContainer>
  );
};
