import { SectionContainer, SectionContent } from "../styled-components";
import {
  TextSans20px500White,
  TextSans80px500White,
  TextPop18px400GreyW450px,
  TextSans14px500White,
  TextSans14px500Grey,
  HorLine,
} from "../styled-components";
import Image from "next/image";
import styled from "styled-components";

const CarouselSectionContainer = styled(SectionContainer)`
  background: #27272e;
`;
const CarouselSectionContent = styled(SectionContent)`
  padding: 150px 0 130px 200px;
  display: flex;
  flex-direction: column;
`;
const HeadingContainer = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  gap: 114px;
`;
const HeadingTextContainer = styled(HeadingContainer)`
  flex-direction: column;
  gap: 48px;
  width: 772px;
  margin: 0;
  padding: 0;
`;
const CarouselContainer = styled(HeadingContainer)`
  gap: 100px;
  height: 294px;
  align-items: flex-end;
`;
const ArrowNumbersContainer = styled(HeadingContainer)`
  height: 50%;
  gap: 0;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 50px;
`;
const Numbers = styled(HeadingContainer)`
  gap: 30px;
`;
const Arrows = styled(HeadingContainer)`
  gap: 17px;
`;

export const CarouselSection = (albums) => {
  const firstAlbumUrl100px = albums.albums.results[0].artworkUrl100;
  const slicedFirstAlbumUrl = firstAlbumUrl100px.slice(0, -13);
  const firstAlbumUrl1000px = slicedFirstAlbumUrl + "1000x1000bb.jpg";

  return (
    <CarouselSectionContainer>
      {/* <Image src={firstAlbumUrl1000px} alt="album" width={1000} height={1000} /> */}
      <CarouselSectionContent>
        <HeadingContainer>
          <TextSans20px500White>Top notch sound</TextSans20px500White>
          <HeadingTextContainer>
            <TextSans80px500White>
              The world's best quality audio ever.
            </TextSans80px500White>
            <TextPop18px400GreyW450px>
              Over 100 years of research has led us to develop new quality,
              which is 100x times better than FLAC.
            </TextPop18px400GreyW450px>
          </HeadingTextContainer>
        </HeadingContainer>
        <CarouselContainer>
          <ArrowNumbersContainer>
            <Numbers>
              <TextSans14px500White>01</TextSans14px500White>
              <HorLine />
              <TextSans14px500Grey>07</TextSans14px500Grey>
            </Numbers>
            <Arrows>
              <Image
                src="/arrowleft.jpg"
                alt="arowright"
                width={40}
                height={40}
              />
              <Image
                src="/arrowright.jpg"
                alt="arowright"
                width={40}
                height={40}
              />
            </Arrows>
          </ArrowNumbersContainer>
        </CarouselContainer>
      </CarouselSectionContent>
    </CarouselSectionContainer>
  );
};
