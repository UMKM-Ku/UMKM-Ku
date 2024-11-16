"use client";

import { useState } from "react";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

function CarouselHome({ slide: slide }: { slide: string[] }) {
  const [current, setCurent] = useState(0);

  const prevSlide = () => {
    if (current === 0) setCurent(slide.length - 1);
    else setCurent(current - 1);
  };

  const nextSlide = () => {
    if (current === slide.length - 1) setCurent(0);
    else setCurent(current + 1);
  };

  return (
    <>
      <div className="overflow-hidden relative">
        <div
          className="cursor-pointer flex transition-all duration-700 ease-out object-cover bg-repeat scroll-smooth"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slide.map((el: string, i: number) => {
            return (
              <img
                key={"banner" + i}
                src={el}
                alt="..."
                className="rounded-lg"
              />
            );
          })}
        </div>

        <div className="absolute top-0 h-full w-full justify-between items-center flex text-3xl text-white invisible group-hover:visible transition-all duration-400">
          <button onClick={prevSlide}>
            <IoIosArrowDropleftCircle className="-translate-x-1 group-hover:translate-x-3 transition-transform ease-out duration-300" />
          </button>
          <button onClick={nextSlide}>
            <IoIosArrowDroprightCircle className="translate-x-1 group-hover:-translate-x-3 transition-transform ease-out duration-300" />
          </button>
        </div>

        <div className="group-hover:visible invisible  absolute bottom-0 flex gap-1 transition-transform ease-out duration-300 translate-y-3 translate-x-4 group-hover:translate-y-0 pb-2">
          {slide.map((s: string, i: number) => {
            return (
              <div
                key={"circle" + i}
                className={`rounded-xs w-1 h-1 ${
                  i === current ? "bg-white" : "bg-gray-300"
                }`}
              ></div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default CarouselHome;
