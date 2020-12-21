import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap";
import SlideImage from "./SlideImage";
import SlideImage1 from "../../assets/img/jaguar_1.jpg";
import SlideImage2 from "../../assets/img/jaguar_2.jpg";
import SlideImage3 from "../../assets/img/jaguar_3.jpg";
import Gif from "../../assets/img/gif.gif";

const items = [
  {
    src: "video2.mp4",
    video: true,
    key: 5,
  },
  {
    src: "video.mp4",
    video: true,
    key: 6,
  },
  {
    src: SlideImage1,
    header: "NEW JAGUAR F-PACE SVR",
    paragraph:
      "With its 5.0 litre Supercharged V8 engine and top speed of 178mph , F‑PACE SVR is Jaguar’s ultimate performance SUV.",
    btnText: "EXPLORE F-PACE",
    key: 1,
  },
  {
    src: "https://landrover.ssl.cdn.sdlmedia.com/637425204283548520SA_pr13.mp4",
    video: true,
    key: 4,
  },
  {
    src: SlideImage2,
    header: "NEW JAGUAR E‑PACE",
    paragraph:
      "Jaguar’s first compact SUV is a unique combination of looks, agility and dynamic driving. Now also available as Plug‑in Hybrid.",
    btnText: "EXPLORE E-PACE",
    key: 2,
  },
  {
    src: SlideImage3,
    header: "BROWSE. ORDER. DRIVE.",
    paragraph:
      "We’d like to reassure you that despite lockdowns, our Retailers remain operational.",
    btnText: "FIND OUT MORE",
    key: 3,
  },
];

const CarouselStyled = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <SlideImage
          src={item.src}
          paragraph={item.paragraph}
          header={item.header}
          btnText={item.btnText}
          video={item.video}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      interval="7000"
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
};

export default CarouselStyled;
