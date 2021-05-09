import Image from "next/image";
import {
  TextPop,
  TextSans,
  Container,
  ButtonPop16px500GreyU,
  ButtonPop16px500WhiteBlueBR,
} from "../museic-styled-comps";
import {
  HeroContainer,
  FlexRowContainer,
  TextContainer,
  ImageRelativePlus,
  ImageAbsolutePlus,
} from "./HeroStyledComps";

export const HeroHeader = () => {
  return (
    <HeroContainer>
      <FlexRowContainer>
        <Image src="/Circle4.png" alt="pink circle" width={48} height={48} />
      </FlexRowContainer>
      <TextContainer>
        <TextSans textSize="96px" textWeight="700" textColor="#292930">
          Listen Like Never Before<span style={{ color: "#5956E9"}}>.</span>
        </TextSans>
        <TextPop textSize="18px" textWeight="400">
          We offer music in 100x better quality than our competitors. Say good bye to FLAC 👋
        </TextPop>
        <FlexRowContainer>
          <ButtonPop16px500WhiteBlueBR>Get started</ButtonPop16px500WhiteBlueBR>
          <Image src="/play.jpg" alt="play" width={16} height={16} />
          <ButtonPop16px500GreyU style={{ marginLeft: "16px" }}>
            See it in action!
          </ButtonPop16px500GreyU>
        </FlexRowContainer>
        <FlexRowContainer>
          <Image src="/scroll3.jpg" alt="arowright" width={22} height={22} />
          <Container contMarg="0 0 0 16px">
          <TextPop textWeight="400">
            Scroll to explore
          </TextPop>
          </Container>
        </FlexRowContainer>
      </TextContainer>
      <ImageRelativePlus>
        <Image
          src="/HeroImage.png"
          alt="pink circle"
          width={690}
          height={769}
        />
      </ImageRelativePlus>
      <ImageAbsolutePlus>
        <Image
          src="/Circle7.png"
          alt="yellow circle"
          width={128}
          height={128}
        />
      </ImageAbsolutePlus>
    </HeroContainer>
  );
};
