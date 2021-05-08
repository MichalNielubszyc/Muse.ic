import { SectionContainer, SectionContent } from "../styled-components";
import { TextSans20px500White } from "../styled-components"
import Image from "next/image";
import styled from "styled-components";

const CarouselSectionContainer = styled(SectionContainer)`
  background: #27272e;
  z-index: -10;
`;

const CarouselSectionContent = styled(SectionContent)`
padding: 150px 200px 130px;
`

const HeadingContainer = styled.div`
    display: flex;
    margin: 0;
    padding: 0;
    gap: 114px;
`
const HeadingTextContainer = styled(HeadingContainer)`
    flex-direction: column;
    gap: 48px;
`

export const CarouselSection = (albums) => {
  const firstAlbumUrl100px = albums.albums.results[0].artworkUrl100;
  const slicedFirstAlbumUrl = firstAlbumUrl100px.slice(0, -13);
  const firstAlbumUrl1000px = slicedFirstAlbumUrl + "1000x1000bb.jpg";

  return (
    <CarouselSectionContainer>
      {/* <Image src={firstAlbumUrl1000px} alt="album" width={1000} height={1000} /> */}
      <SectionContent>
        <HeadingContainer>
            <TextSans20px500White>Top notch sound</TextSans20px500White>
        </HeadingContainer>
      </SectionContent>
    </CarouselSectionContainer>
  );
};
