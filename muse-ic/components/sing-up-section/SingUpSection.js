import {
  SectionContainer,
  TextSans64px500Dark,
  TextSans24px500Grey,
  ButtonPop16px500WhiteBlueBR340pxW,
  ButtonPop16px500BlueBR340pxW,
  TextSans64px500White,
  TextSans24px500White,
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
            <TextSans64px500Dark>30 days free trial</TextSans64px500Dark>
            <CardTextContainer>
              <TextSans24px500Grey style={{ margin: "30px 0 70px" }}>
                You are not convinced? Alright, we get it. We will give 30 days
                free trial then.
              </TextSans24px500Grey>
              <ButtonPop16px500WhiteBlueBR340pxW>
                Start 30 days trial
              </ButtonPop16px500WhiteBlueBR340pxW>
            </CardTextContainer>
          </WhiteCard>
          <BlueCard>
            <TextSans64px500White>Go on premium now</TextSans64px500White>
            <CardTextContainer>
              <TextSans24px500White style={{ margin: "30px 0 70px" }}>
                Ready to revolutionize your listening experience? Go on premium
                now!
              </TextSans24px500White>
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
