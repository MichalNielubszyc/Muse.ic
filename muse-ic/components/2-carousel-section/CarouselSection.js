import { useState } from "react";
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
import Slider from "react-slick";

export const CarouselSection = (albums) => {
  const albumsArr = [...albums.albums.results];

  const getAlbumCover1000px = (url) => {
    return url.slice(0, -13) + "1000x1000bb.jpg";
  };

  const LeftArrow = ({ onClick }) => {
    return (
      <Image
        src="/arrowleft.jpg"
        alt="arowright"
        width={40}
        height={40}
        onClick={onClick}
      />
    );
  };

  const RightArrow = ({ onClick }) => {
    return (
      <Image
        src="/arrowright.jpg"
        alt="arowright"
        width={40}
        height={40}
        onClick={onClick}
      />
    );
  };

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 4,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <LeftArrow />,
    prevArrow: <RightArrow />,
    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnFocus: true,
    pauseOnHover: true,
  };

  return (
    <>
      <CarouselSectionContainer>
        <CarouselSectionContent>
          <HeadingContainer>
            <TextSans20px500White style={{ padding: "0 0 0 200px" }}>
              Top notch sound
            </TextSans20px500White>
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
            {/* <ArrowNumbersContainer>
              <div />
              <div />
              <Numbers>
                <TextSans14px500White>06</TextSans14px500White>
                <HorLine />
                <TextSans14px500Grey>07</TextSans14px500Grey>
              </Numbers>
            </ArrowNumbersContainer> */}
            <AlbumsCarousel>
              <Slider {...settings} style={{ width: "100%", margin: "0" }}>
                {albumsArr.map((album, index) => {
                  return (
                    <SingleAlbumContainer key={index}>
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
                        <TextSans24px500Red>
                          {album.artistName}
                        </TextSans24px500Red>
                        <TextPop12px500WhiteUpper>
                          Alternative • {album.releaseDate.slice(0, 4)}
                        </TextPop12px500WhiteUpper>
                      </AlbumEssentials>
                      <ButtonPop16px500BlueU>
                        Find out more
                      </ButtonPop16px500BlueU>
                    </SingleAlbumContainer>
                  );
                })}
              </Slider>
            </AlbumsCarousel>
          </CarouselContainer>
        </CarouselSectionContent>
      </CarouselSectionContainer>
    </>
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

{
  /* <AlbumsCarousel>
<SingleAlbumContainer key={index}>
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
    <TextSans24px500Red>
      {album.artistName}
    </TextSans24px500Red>
    <TextPop12px500WhiteUpper>
      Alternative • {album.releaseDate.slice(0, 4)}
    </TextPop12px500WhiteUpper>
  </AlbumEssentials>
  <ButtonPop16px500BlueU>Find out more</ButtonPop16px500BlueU>
</SingleAlbumContainer>
      );
    })}

</AlbumsCarousel> */
}
