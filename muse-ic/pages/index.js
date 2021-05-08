import Head from "next/head";
import { createGlobalStyle } from "styled-components";
import { HeroSection } from "../components/1-hero-section/HeroSection";
import { CarouselSection } from "../components/2-carousel-section/CarouselSection";
import { SignUpSection } from "../components/3-sing-up-section/SingUpSection";

export async function getStaticProps() {
  const url = `https://itunes.apple.com/search?term=arctic+monkeys&entity=album&limit=7`
  const result = await fetch(url)
  return { props: {
    fetchedAlbums: await result.json()
  }}
}

const GlobalStyle = createGlobalStyle`
  body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background: #000;
  }
  .album-cover { border-radius: 20px; }
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
      <CarouselSection albums={ fetchedAlbums } />
      <SignUpSection />
    </>
  );
}
