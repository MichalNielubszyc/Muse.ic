import Image from "next/image";
import Slider from "react-slick";
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
} from "../museic-styled-comps";
import {
  CarouselSectionContainer,
  CarouselSectionContent,
  HeadingContainer,
  HeadingTextContainer,
  CoverCarouselContainer,
  Numbers,
  SingleAlbumContainer,
  AlbumCover,
  AlbumEssentials,
  AlbumsCarousel,
  RightArrowContainer,
  LeftArrowContainer,
} from "./CarouselStyledComps";

const LeftArrow = ({ onClick }) => {
  return (
    <LeftArrowContainer>
      <Image
        src="/arrowleft.jpg"
        alt="arowright"
        width={40}
        height={40}
        onClick={onClick}
      />
    </LeftArrowContainer>
  );
};
const RightArrow = ({ onClick }) => {
  return (
    <RightArrowContainer>
      <Image
        src="/arrowright.jpg"
        alt="arowright"
        width={40}
        height={40}
        onClick={onClick}
      />
    </RightArrowContainer>
  );
};

import type { albumObject } from "../utils/albumObject"

type albumsArrayType = albumObject[]

export const CarouselSection = ({ albums: { results } }) => {

  const [albumIndex, setAlbumIndex] = useState(0);

  const albumsArr: albumsArrayType = [...results];

  const getAlbumCover1000px = (url) => {
    return url.slice(0, -13) + "1000x1000bb.jpg";
  };

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 4,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <LeftArrow  />,
    prevArrow: <RightArrow />,
    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnFocus: true,
    pauseOnHover: true,
    beforeChange: (current) => setAlbumIndex(current),
    initialSlide: 1
  };

  return (
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
          <AlbumsCarousel>
            <CoverCarouselContainer>
              <Numbers>
                <TextSans14px500White>{`0${albumIndex + 1}`}</TextSans14px500White>
                <HorLine />
                <TextSans14px500Grey>{`0${albumsArr.length}`}</TextSans14px500Grey>
              </Numbers>
            </CoverCarouselContainer>
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
                    <ButtonPop16px500BlueU >Find out more</ButtonPop16px500BlueU>
                  </SingleAlbumContainer>
                );
              })}
            </Slider>
          </AlbumsCarousel>
        </CarouselSectionContent>
      </CarouselSectionContainer>
  );
};