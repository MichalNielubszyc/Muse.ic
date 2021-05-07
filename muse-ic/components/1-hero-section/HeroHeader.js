import styled from "styled-components";
import Image from "next/image";
import {
    TextSans96px700,
    ButtonPop16px500GreyU,
    TextPop18px400Grey,
    ButtonPop16px500WhiteBlueBR,
    TextPop16px400Grey
} from "../styled-components";

const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

const FlexRowContainer = styled.div`
  display: flex;
  align-items: center;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 381px;
    margin-left: 52px;
    height: 765px;
    gap: 35px
`;

export const HeroHeader = () => {
  return (
    <HeroContainer>
      <FlexRowContainer>
        <Image src="/Circle 4.png" alt="pink circle" width={48} height={48} />
      </FlexRowContainer>
      <TextContainer>
        <TextSans96px700>Listen Like Never Before<span style={{color:"#5956E9"}}>.</span></TextSans96px700>
        <TextPop18px400Grey>We offer music in 100x better quality than our competitors. Say good bye to FLAC 👋</TextPop18px400Grey>
        <FlexRowContainer>
            <ButtonPop16px500WhiteBlueBR>Get started</ButtonPop16px500WhiteBlueBR>
            <Image src="/play.jpg" alt="play" width={16} height={16} />
            <ButtonPop16px500GreyU style={{marginLeft: "16px"}} >See it in action!</ButtonPop16px500GreyU>
        </FlexRowContainer>
        <Image src="/scroll2.png" alt="scroll" width={18} height={18} />
        <TextPop16px400Grey>Scroll to explore</TextPop16px400Grey>
      </TextContainer>
      <Image src="/Hero image.png" alt="pink circle" width={690} height={769} />
    </HeroContainer>
  );
};
