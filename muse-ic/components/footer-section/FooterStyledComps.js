import styled from "styled-components";
import { SectionContainer, SectionContent } from "../museic-styled-comps"

export const FooterContainer = styled(SectionContainer)`
  min-height: 0px;
  padding-bottom: 42px;
`;
export const FooterContent = styled(SectionContent)`
  display: flex;
  padding: 86px 200px 45px;
`;
export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 270px;
  gap: 20px;
`;
export const HorLine100 = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid;
  margin: 30px 200px 38px 200px;
  width: calc(100%-400px);
  align-self: center;
  color: #e3e6e9;
`;
export const FooterRow = styled.div`
  margin: 0 200px;
  display: flex;
  justify-content: space-between;
`;
export const BackToTopCont = styled(FooterRow)`
  width: 110px;
  margin: 0;
  align-items: center;
`;