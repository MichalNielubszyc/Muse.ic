import Image from "next/image";
import Slider from "react-slick";
import { useState } from "react";
import { MouseEventHandler } from "react";
import {
  TextPop,
  TextSans,
  Container,
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

const LeftArrow = ({ onClick }: { onClick?: MouseEventHandler<any> }) => {
  return (
    <LeftArrowContainer onClick={onClick}>
      <Image src="/arrowleft.jpg" alt="arowright" width={40} height={40} />
    </LeftArrowContainer>
  );
};
const RightArrow = ({ onClick }: { onClick?: MouseEventHandler<any> }) => {
  return (
    <RightArrowContainer onClick={onClick}>
      <Image src="/arrowright.jpg" alt="arowright" width={40} height={40} />
    </RightArrowContainer>
  );
};

import type { albumObject } from "../utils/albumObject";

type albumsArrayType = albumObject[];

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
    nextArrow: <LeftArrow />,
    prevArrow: <RightArrow />,
    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnFocus: true,
    pauseOnHover: true,
    beforeChange: (current) => setAlbumIndex(current),
    initialSlide: 1,
  };

  return (
    <CarouselSectionContainer>
      <CarouselSectionContent>
        <HeadingContainer>
          <Container contPadd="0 0 0 200px">
            <TextSans textWeight="700" textSize="20px">
              Top notch sound
            </TextSans>
          </Container>
          <HeadingTextContainer>
            <Container contMarg="-15px 0 0">
              <TextSans textWeight="500" textSize="80px">
                The world's best quality audio ever.
              </TextSans>
            </Container>
            <Container contWidth="450px">
              <TextPop textWeight="400" textSize="18px">
                Over 100 years of research has led us to develop new quality,
                which is 100x times better than FLAC.
              </TextPop>
            </Container>
          </HeadingTextContainer>
        </HeadingContainer>
        <AlbumsCarousel>
          <CoverCarouselContainer>
            <Numbers>
              <TextSans textSize="14px">{`0${albumIndex + 1}`}</TextSans>
              <HorLine />
              <TextSans
                textSize="14px"
                textColor="#999fae"
              >{`0${albumsArr.length}`}</TextSans>
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
                    <TextSans>{album.collectionName}</TextSans>
                    <TextSans textColor="#e74252">{album.artistName}</TextSans>
                    <TextPop textSize="14px" textTrans="uppercase">
                      Alternative • {album.releaseDate.slice(0, 4)}
                    </TextPop>
                  </AlbumEssentials>
                  <ButtonPop16px500BlueU>Find out more</ButtonPop16px500BlueU>
                </SingleAlbumContainer>
              );
            })}
          </Slider>
        </AlbumsCarousel>
      </CarouselSectionContent>
    </CarouselSectionContainer>
  );
};
