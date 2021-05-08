import Head from "next/head";
import { createGlobalStyle } from "styled-components";
import { HeroSection } from "../components/1-hero-section/HeroSection";
import { SignUpSection } from "../components/3-sing-up-section/SingUpSection";

export const getStaticProps = async () => {
  const response = await fetch("https://itunes.apple.com/search?term=arctic+monkeys&entity=album&limit=7") ?? null;
  const data = response.json();

  return {
    props: { fetchedAlbums: data ?? null }
  }
  console.log(response)
}

const GlobalStyle = createGlobalStyle`
  body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background: #000;
  }
`;

export default function Home({ fetchedAlbums }) {
  return (
    <>
    {/* {console.log(fetchedAlbums)} */}
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
