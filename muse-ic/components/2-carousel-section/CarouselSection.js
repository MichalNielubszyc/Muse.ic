import { useState } from 'react'
import {
  TextSans20px500White,
  TextSans80px500White,
  TextPop18px400GreyW450px,
  TextSans14px500White,
  TextSans14px500Grey,
  TextSans24px500White,
  TextSans24px500Red,
  TextPop12px500WhiteUpper,
  ButtonPop16px500BlueU,
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
  AlbumCover,
  AlbumEssentials,
  AlbumsCarousel,
  ButtonContainer
} from "../styled-components";
import Image from "next/image";

export const CarouselSection = (albums) => {

  const [counter, setCounter] = useState(0);

  const getAlbumCover1000px = (url) => {
    return url.slice(0, -13) + "1000x1000bb.jpg";
  }

  const moveAlbumsLeft = () => {
    setCounter(counter-1);
  }

  const moveAlbumsRight = () => {
    setCounter(counter+1);
  }

  return (
    <CarouselSectionContainer>
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
              <ButtonContainer>
              <Image
                src="/arrowleft.jpg"
                alt="arowright"
                width={40}
                height={40}
                onClick={moveAlbumsLeft}
              />
              </ButtonContainer>
              <ButtonContainer>
              <Image
                src="/arrowright.jpg"
                alt="arowright"
                width={40}
                height={40}
                onClick={moveAlbumsRight}
              />
              </ButtonContainer>
            </Arrows>
          </ArrowNumbersContainer>
          <AlbumsCarousel>
            {albums.albums.results.map((album, index) => {
              return (
              <SingleAlbumContainer key={index} style={{transform: `translateX(${counter*450}px)`}}>
              <AlbumCover><Image
              src={getAlbumCover1000px(album.artworkUrl100)}
              alt={`album-${index}`}
              width={240}
              height={240}
              className="album-cover"
            /></AlbumCover>
            <AlbumEssentials>
                <TextSans24px500White>{album.collectionName}</TextSans24px500White>
                <TextSans24px500Red>{album.artistName}</TextSans24px500Red>
                <TextPop12px500WhiteUpper>Alternative   •   {album.releaseDate.slice(0,4)}</TextPop12px500WhiteUpper>
            </AlbumEssentials>
            <ButtonPop16px500BlueU>Find out more</ButtonPop16px500BlueU>
          </SingleAlbumContainer>
              )
            })}
          </AlbumsCarousel>
        </CarouselContainer>
      </CarouselSectionContent>
    </CarouselSectionContainer>
  );
};
