import { SectionContainer, SectionContent } from "./museic-styled-comps";
import Image from "next/image";
import Slider from "react-slick";
// import NoSSR from "react-no-ssr";

export const Test = () => {
  
  const LeftArrow = ({ onClick }) => {
    return (
      <Image
        src="/arrowleft.jpg"
        alt="arowright"
        width={40}
        height={40}
        onClick={onClick}
      />
    );
  };

  const RightArrow = ({ onClick }) => {
    return (
      <Image
        src="/arrowright.jpg"
        alt="arowright"
        width={40}
        height={40}
        onClick={onClick}
      />
    );
  };

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <LeftArrow />,
    prevArrow: <RightArrow />,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnFocus: true,
    pauseOnHover: true,
  };


  return (
    <SectionContainer>
      <SectionContent style={{ width: "50%", margin: "0 auto" }}>
        {/* <NoSSR></NoSSR> */}
        <Slider {...settings}>
          <Image src="/crozier.jpeg" alt="arowright" width={200} height={200} />
          <Image src="/584s81.jpg" alt="arowright" width={200} height={200} />
          <Image src="/584s81.jpg" alt="arowright" width={200} height={200} />
          <Image src="/584s81.jpg" alt="arowright" width={200} height={200} />
          <Image src="/584s81.jpg" alt="arowright" width={200} height={200} />
          <Image src="/584s81.jpg" alt="arowright" width={200} height={200} />
          <Image src="/584s81.jpg" alt="arowright" width={200} height={200} />
        </Slider>
      </SectionContent>
    </SectionContainer>
  );
};
