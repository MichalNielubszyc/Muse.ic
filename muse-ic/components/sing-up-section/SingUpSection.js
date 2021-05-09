import {
  TextSans,
  Container,
  SectionContainer,
  ButtonPop16px500WhiteBlueBR340pxW,
  ButtonPop16px500BlueBR340pxW,
} from "../museic-styled-comps";
import {
  SingUpSectionContent,
  CardsContainer,
  WhiteCard,
  BlueCard,
  CardTextContainer,
} from "./SignUpStyledComps";

export const SignUpSection = () => {
  return (
    <SectionContainer>
      <SingUpSectionContent>
        <CardsContainer>
          <WhiteCard>
            <TextSans textSize="64px" textColor="#292930">30 days free trial</TextSans>
            <CardTextContainer>
              <Container contMarg="30px 0 70px">
              <TextSans textColor="#999fae">
                You are not convinced? Alright, we get it. We will give 30 days
                free trial then.
              </TextSans>
              </Container>
              <ButtonPop16px500WhiteBlueBR340pxW>
                Start 30 days trial
              </ButtonPop16px500WhiteBlueBR340pxW>
            </CardTextContainer>
          </WhiteCard>
          <BlueCard>
          <TextSans textSize="64px">Go on premium now</TextSans>
            <CardTextContainer>
            <Container contMarg="30px 0 70px">
              <TextSans>
                Ready to revolutionize your listening experience? Go on premium
                now!
              </TextSans>
              </Container>
              <ButtonPop16px500BlueBR340pxW>
                Continue with premium
              </ButtonPop16px500BlueBR340pxW>
            </CardTextContainer>
          </BlueCard>
        </CardsContainer>
      </SingUpSectionContent>
    </SectionContainer>
  );
};
