import {
  TextSans20px500White,
  TextSans80px500White,
  TextPop18px400GreyW450px,
  TextSans14px500White,
  TextSans14px500Grey,
  HorLine,
  CarouselSectionContainer,
  CarouselSectionContent,
  HeadingContainer,
  HeadingTextContainer,
  CarouselContainer,
  ArrowNumbersContainer,
  Numbers,
  Arrows,
  SingleAlbumContainer,
  AlbumCover
} from "../styled-components";
import Image from "next/image";

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
            <SingleAlbumContainer>
                <AlbumCover><Image
                src={firstAlbumUrl1000px}
                alt="album"
                width={242}
                height={242}
                className="album-cover"
              /></AlbumCover>
            </SingleAlbumContainer>

        </CarouselContainer>
      </CarouselSectionContent>
    </CarouselSectionContainer>
  );
};
