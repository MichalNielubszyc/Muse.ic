import Image from "next/image";
import {
  TextPop,
  TextSans,
  Container,
  ImageAbsoluteRing,
  ImageAbsoluteSmallCircle,
  ImageAbsoluteLine2,
  ImageAbsoluteMediumCircle,
  ImageAbsoluteBigCircle,
} from "../museic-styled-comps";
import {
  BandsSectionContainer,
  BandsSectionContent,
  HeadingContainer,
  HeadingTextContainer,
  BandNamesContainer,
} from "./BandsStyledComps";

export const BandsSection = () => {
  return (
    <BandsSectionContainer>
      <ImageAbsoluteRing>
        <Image src="/GreyRing.png" alt="grey ring" width={520} height={520} />
      </ImageAbsoluteRing>
      <ImageAbsoluteLine2>
        <Image
          src="/GreyLineShort.png"
          alt="grey line"
          width={600}
          height={600}
        />
      </ImageAbsoluteLine2>
      <ImageAbsoluteSmallCircle>
        <Image
          src="/SmallGreyCircle.png"
          alt="grey circle"
          width={40}
          height={40}
        />
      </ImageAbsoluteSmallCircle>
      <ImageAbsoluteMediumCircle>
        <Image
          src="/MediumGreyCircle.png"
          alt="grey circle2"
          width={90}
          height={90}
        />
      </ImageAbsoluteMediumCircle>
      <ImageAbsoluteBigCircle>
        <Image
          src="/BigGreyCircle.png"
          alt="grey circle3"
          width={268}
          height={268}
        />
      </ImageAbsoluteBigCircle>
      <BandsSectionContent>
        <HeadingContainer>
          <Container contPadd="0 0 0 200px" contZindex="2">
            <TextSans textWeight="700" textSize="20px">
              Global trust
            </TextSans>
          </Container>
          <HeadingTextContainer>
            <Container contMarg="-15px 0 0" contZindex="2">
              <TextSans textWeight="500" textSize="80px">
                More than 68,219 listeners use Muse.ic
              </TextSans>
            </Container>
            <Container contWidth="450px" contZindex="2">
              <TextPop textWeight="400" textSize="18px">
                Listen what do you want. In the highest quality possible.
              </TextPop>
            </Container>
          </HeadingTextContainer>
        </HeadingContainer>
        <BandNamesContainer>
          <Image src="/Radiohead.png" alt="Radiohead" width={120} height={40} />
          <Image src="/Muse.png" alt="Muse" width={105} height={46} />
          <Image
            src="/ArcticMonkeys.png"
            alt="ArcticMonkeys"
            width={105}
            height={46}
          />
          <Image src="/Bowie.png" alt="Bowie" width={98} height={62} />
        </BandNamesContainer>
      </BandsSectionContent>
    </BandsSectionContainer>
  );
};
