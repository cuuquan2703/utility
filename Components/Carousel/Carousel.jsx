import React, { useState } from "react";

const Carousel = ({ limit, slide }) => {
  const [i, setI] = useState(0);

  const goNext = () => {
    if (i == slide.length - 1) setI(0);
    else setI(i + 1);
  };

  const goPrev = () => {
    if (i == 0) setI(slide.length - 1);
    else setI(i - 1);
  };

  return <div className={`w-full height-96 bg-[url(${slide[i]})]`}></div>;
};

export default Carousel;
