import { SectionContainer, SectionContent } from "../styled-components";
import styled from "styled-components";
import { TextSans64px500Dark, TextSans24px500Grey, ButtonPop16px500WhiteBlueBR340pxW, ButtonPop16px500BlueBR340pxW, TextSans64px500White, TextSans24px500White } from "../styled-components";

const SingUpSectionContent = styled(SectionContent)`
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #FFF;
  min-height: 100vh;
`;
const CardsContainer = styled.div`
  display: flex;
  gap: 40px;
  padding: 0;
  margin: 0;
`;

const WhiteCard = styled.div`
width: 340px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #fff;
  border: 1px solid #e3e6e9;
  border-radius: 40px;
  padding: 80px;
`;

const BlueCard = styled(WhiteCard)`
  background: #5956e9;
  border: none;
`;

const CardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SignUpSection = () => {
  return (
    <SectionContainer>
      <SingUpSectionContent>
        <CardsContainer>
          <WhiteCard>
              <TextSans64px500Dark>30 days free trial</TextSans64px500Dark>
            <CardTextContainer>
              <TextSans24px500Grey style={{margin: "30px 0 70px"}}>You are not convinced? Alright, we get it. We will give 30 days free trial then.</TextSans24px500Grey>
            <ButtonPop16px500WhiteBlueBR340pxW>Start 30 days trial</ButtonPop16px500WhiteBlueBR340pxW>
            </CardTextContainer>
          </WhiteCard>
          <BlueCard>
              <TextSans64px500White>Go on premium now</TextSans64px500White>
            <CardTextContainer>
              <TextSans24px500White style={{margin: "30px 0 70px"}}>Ready to revolutionize your listening experience? Go on premium now!</TextSans24px500White>
            <ButtonPop16px500BlueBR340pxW>Continue with premium</ButtonPop16px500BlueBR340pxW>
            </CardTextContainer>
            </BlueCard>
        </CardsContainer>
      </SingUpSectionContent>
    </SectionContainer>
  );
};
