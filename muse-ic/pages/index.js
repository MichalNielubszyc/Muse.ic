import Head from "next/head";
import { createGlobalStyle } from "styled-components";
import { HeroSection } from "../components/1-hero-section/HeroSection";
import { SignUpSection } from "../components/3-sing-up-section/SingUpSection";

const GlobalStyle = createGlobalStyle`
  body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background: #000;
  }
`;

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Muse.ic</title>
        <link key="1" rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
      <SignUpSection />
    </>
  );
}
