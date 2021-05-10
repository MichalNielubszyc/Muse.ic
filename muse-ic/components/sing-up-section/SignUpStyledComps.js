import styled from "styled-components";
import { SectionContent } from "../museic-styled-comps";

export const SingUpSectionContent = styled(SectionContent)`
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  min-height: 100vh;
`;
export const CardsContainer = styled.div`
  display: flex;
  gap: 40px;
  padding: 0;
  margin: 0;
`;
export const WhiteCard = styled.div`
  width: 340px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #fff;
  border: 1px solid #e3e6e9;
  border-radius: 40px;
  padding: 80px;
`;
export const BlueCard = styled(WhiteCard)`
  background: #5956e9;
  border: none;
`;
export const CardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
