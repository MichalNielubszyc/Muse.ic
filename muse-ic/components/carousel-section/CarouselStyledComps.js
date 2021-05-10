import styled from "styled-components";
import { SectionContainer, SectionContent } from "../museic-styled-comps";

export const CarouselSectionContainer = styled(SectionContainer)`
  background: #27272e;
  position: relative;
  overflow: hidden;
  z-index: 1;
`;
export const CarouselSectionContent = styled(SectionContent)`
  padding: 150px 0 130px;
  display: flex;
  flex-direction: column;
  z-index: 1;
`;
export const HeadingContainer = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  gap: 114px;
`;
export const HeadingTextContainer = styled(HeadingContainer)`
  flex-direction: column;
  gap: 48px;
  width: 772px;
  margin: 0;
  padding: 0;
`;
export const AlbumsCarousel = styled.div`
  height: 434px;
  width: 1630px;
  margin-left: 60px;
  position: relative;
  margin-top: 45px;
  z-index: 100;
`;
export const CoverCarouselContainer = styled(HeadingContainer)`
  height: 100%;
  width: 440px;
  position: absolute;
  top: 0;
  left: 0;
  flex-direction: column;
  justify-content: center;
  z-index: 14;
  background-image: linear-gradient(
    to left,
    rgba(39, 39, 46, 0),
    rgba(39, 39, 46, 1) 35%
  );
`;
export const Numbers = styled(HeadingContainer)`
  gap: 30px;
  margin-top: 100px;
  width: 270px;
  margin-left: 140px;
`;
export const SingleAlbumContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  cursor: pointer;
  margin-right: 208px;
`;
export const AlbumCover = styled.div`
  box-shadow: 0px 24px 39px 7px rgba(0, 0, 0, 0.51);
  margin: 0 0 20px;
  padding: 0;
  border-radius: 20px;
  width: 240px;
  height: 240px;
`;
export const AlbumEssentials = styled(SingleAlbumContainer)`
  gap: 10px;
  margin-bottom: 20px;
`;
export const RightArrowContainer = styled.div`
  position: absolute;
  top: 350px;
  left: 200px;
  cursor: pointer;
  z-index: 14;
`;
export const LeftArrowContainer = styled.div`
  position: absolute;
  top: 350px;
  left: 140px;
  cursor: pointer;
  z-index: 14;
`;