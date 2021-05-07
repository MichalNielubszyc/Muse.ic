import Head from "next/head";
import { createGlobalStyle } from "styled-components";
import { HeroSection } from "../components/1-hero-section/HeroSection";

const GlobalStyle = createGlobalStyle`
  body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
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
    </>
  );
}
