import Head from "next/head";
import { createGlobalStyle } from "styled-components";
import { HeroSection } from "../components/hero-section/HeroSection";
import { CarouselSection } from "../components/carousel-section/CarouselSection";
import { SignUpSection } from "../components/sing-up-section/SingUpSection";
import { Footer } from "../components/footer-section/Footer";

import type { AlbumObject } from "../components/utils/AlbumObject";

type resultsObject = {
  resultCount: number;
  results: AlbumObject[];
};

export async function getStaticProps() {
  const url: string = `https://itunes.apple.com/search?term=arctic+monkeys&entity=album&limit=7`;
  const result = await fetch(url);
  let fetchedAlbums: resultsObject;
  return {
    props: {
      fetchedAlbums: (await result.json()) as resultsObject,
    },
  };
}

const GlobalStyle = createGlobalStyle`
  body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background: #000;
  }
  .album-cover { border-radius: 20px; }
  body::-webkit-scrollbar {
    width: 1em;
  }
  body::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  body::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }
`;

export default function Home({ fetchedAlbums }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Muse.ic</title>
        <link key="1" rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <HeroSection />
      <CarouselSection albums={fetchedAlbums} />
      <SignUpSection />
      <Footer />
    </>
  );
}
