import styled from "styled-components";
import { SectionContainer, SectionContent } from "../museic-styled-comps";

export const BandsSectionContainer = styled(SectionContainer)`
  background: #27272e;
  position: relative;
  overflow: hidden;
  z-index: 1;
  height: 663px;
  min-height: 663px;
`;
export const BandsSectionContent = styled(SectionContent)`
  padding: 150px 0 130px;
  display: flex;
  flex-direction: column;
  z-index: 1;
`;
export const HeadingContainer = styled.div`
  display: flex;
  margin: 0 0 100px;
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
export const BandNamesContainer = styled.div`
  margin: 0 auto;
  display: flex;
  gap: 130px;
`;
