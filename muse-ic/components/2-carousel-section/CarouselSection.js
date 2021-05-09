import { useState, useEffect } from "react";
import { useInterval } from "../utils/UseInterval"
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
  ButtonContainer,
} from "../museic-styled-comps";
import Image from "next/image";

export const CarouselSection = (albums) => {
  const [counter, setCounter] = useState(2);

  const extendedAlbumsArr = [
    albums.albums.results[5],
    albums.albums.results[6],
    ...albums.albums.results,
    albums.albums.results[0],
    albums.albums.results[1],
  ];

  const getAlbumCover1000px = (url) => {
    return url.slice(0, -13) + "1000x1000bb.jpg";
  };

  const moveAlbumsLeft = () => {
    if (counter === 8) {
      setCounter(2);
    } else {
      setCounter(counter + 1);
    }
  };

  const moveAlbumsRight = () => {
    if (counter === 0) {
      setCounter(6);
    } else {
      setCounter(counter - 1);
    }
  };

// const albumSwitcher = setInterval(moveAlbumsLeft, [10000])

// useEffect(() => {
//   albumSwitcher()
// }, [])

// useInterval(() => {
//   moveAlbumsLeft()
// }, 1000);

  return (
    <CarouselSectionContainer>
      <CarouselSectionContent>
        <HeadingContainer>
          <TextSans20px500White style={{padding: "0 0 0 200px"}} >Top notch sound</TextSans20px500White>
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
            <div /><div />
            <Numbers>
            {counter === 0 && <TextSans14px500White>06</TextSans14px500White>}
            {counter === 1 && <TextSans14px500White>07</TextSans14px500White>}
            {counter === 2 && <TextSans14px500White>01</TextSans14px500White>}
            {counter === 3 && <TextSans14px500White>02</TextSans14px500White>}
            {counter === 4 && <TextSans14px500White>03</TextSans14px500White>}
            {counter === 5 && <TextSans14px500White>04</TextSans14px500White>}
            {counter === 6 && <TextSans14px500White>05</TextSans14px500White>}
            {counter === 7 && <TextSans14px500White>06</TextSans14px500White>}
            {counter === 8 && <TextSans14px500White>07</TextSans14px500White>}
            {counter === 9 && <TextSans14px500White>01</TextSans14px500White>}
            {counter === 10 && <TextSans14px500White>02</TextSans14px500White>}
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
            {extendedAlbumsArr.map((album, index) => {
              return (
                <SingleAlbumContainer
                  key={index}
                  style={{
                    transform: `translateX(${counter * -450}px)`,
                    transition: "transform 0.4s ease-in-out",
                  }}
                >
                  <AlbumCover>
                    <Image
                      src={getAlbumCover1000px(album.artworkUrl100)}
                      alt={`album-${index}`}
                      width={240}
                      height={240}
                      className="album-cover"
                    />
                  </AlbumCover>
                  <AlbumEssentials>
                    <TextSans24px500White>
                      {album.collectionName}
                    </TextSans24px500White>
                    <TextSans24px500Red>{album.artistName}</TextSans24px500Red>
                    <TextPop12px500WhiteUpper>
                      Alternative • {album.releaseDate.slice(0, 4)}
                    </TextPop12px500WhiteUpper>
                  </AlbumEssentials>
                  <ButtonPop16px500BlueU>Find out more</ButtonPop16px500BlueU>
                </SingleAlbumContainer>
              );
            })}
          </AlbumsCarousel>
        </CarouselContainer>
      </CarouselSectionContent>
    </CarouselSectionContainer>
  );
};

// const moveAlbumsLeft = () => {
//   if(counter === 8){
//     return
//   }else{
//     setCounter(counter+1);
//   }
// }

// const moveAlbumsRight = () => {
//   if (counter === 0){
//     return
//   }else{
//     setCounter(counter-1);
//   }
// }

// const checkCounter = (numb) => {
//     return numb === counter;
// }

// const changeSlide = () => {
//   if(counter === 8){
//     setCounter(2)
//   }else if (counter === 0){
//     setCounter(6)
//   } else {
//     return
//   }
// }

{
  /* <SingleAlbumContainer key={index} style={{ transform: `translateX(${counter*(-450)}px)`, transition: [0,8].some(checkCounter) ? "none" :  "transform 0.4s ease-in-out"}} onTransitionEnd={changeSlide}></SingleAlbumContainer> */
}
