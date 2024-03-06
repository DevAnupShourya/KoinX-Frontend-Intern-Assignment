import { IoMdInformationCircle } from "react-icons/io";
import EventCarouselCard from "../components/EventCarouselCard";

import { HiNewspaper } from "react-icons/hi2";
import { IoMdTrendingUp } from "react-icons/io";
import { BsActivity } from "react-icons/bs";
import { BsAwardFill } from "react-icons/bs";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { useRef, useState } from "react";

function ProductSentiment() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const cardContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const handleScroll = (direction: "left" | "right") => {
    const cardContainer = cardContainerRef.current;
    if (!cardContainer) return;

    const cardWidth = cardContainer.clientWidth;
    let newPosition;

    if (direction === "left") {
      newPosition = Math.max(scrollPosition - cardWidth, 0);
    } else {
      newPosition = Math.min(
        scrollPosition + cardWidth,
        cardContainer.scrollWidth - cardWidth
      );
    }

    setScrollPosition(newPosition);

    cardContainer.scrollTo({
      left: newPosition,
      behavior: "smooth",
    });
  };

  return (
    <div id="sentiment" className="p-4 bg-bg-secondary rounded-xl mb-4">
      <p className="title">Sentiment</p>
      <div id="events_carousel_container">
        <p className="sub_title">
          Key Events <IoMdInformationCircle className="inline ml-1" />
        </p>
        <div id="events_carousel" className="relative" ref={carouselRef}>
          {scrollPosition > 0 && (
            <button
              className="absolute left-0 top-[50%] -translate-y-1/2  w-14 h-14 bg-bg-secondary shadow-xl rounded-full grid place-items-center"
              onClick={() => handleScroll("left")}
            >
              <FaAngleLeft />
            </button>
          )}
          <button
            className="absolute  right-0 top-[50%] -translate-y-1/2 w-14 h-14 bg-bg-secondary shadow-xl rounded-full grid place-items-center"
            onClick={() => handleScroll("right")}
          >
            <FaAngleRight />
          </button>
          <div
            className="flex flex-nowrap overflow-x-scroll gap-4 hideScrollBar"
            ref={cardContainerRef}
          >
            <EventCarouselCard color="blue" icon={HiNewspaper} id="card-1" />
            <EventCarouselCard
              color="green"
              icon={IoMdTrendingUp}
              id="card-2"
            />
            <EventCarouselCard color="purple" icon={BsActivity} id="card-2" />
            <EventCarouselCard color="red" icon={BsAwardFill} id="card-4" />
          </div>
        </div>
      </div>
      <div id="AnalystEstimates">
        <p className="sub_title">
          Analyst Estimates
          <IoMdInformationCircle className="inline ml-1" />
        </p>
        <div className="flex_row_center gap-1 w-full">
          <div className="w-1/5 max-md:w-1/4">
            <h1 className="bg-green-100 text-green-500 w-28 h-28 max-md:w-20 max-md:h-20 rounded-full text-3xl max-md:text-xl grid place-items-center">
              76%
            </h1>
          </div>
          <div className="w-4/5 max-md:w-3/4">
            <div className="flex_row_center w-full">
              <h2 className="text-lg mr-6">Buy</h2>
              <div className="w-11/12 flex_row_center justify-normal">
                <div className="w-[76%] bg-green-400 rounded-sm h-2" />
                <h3 className="text-lg ml-4">76%</h3>
              </div>
            </div>
            <div className="flex_row_center w-full">
              <h2 className="text-lg mr-6">Hold</h2>
              <div className="w-11/12 flex_row_center justify-normal">
                <div className="w-[8%] bg-gray-500 rounded-sm h-2" />
                <h3 className="text-lg ml-4">8%</h3>
              </div>
            </div>
            <div className="flex_row_center w-full">
              <h2 className="text-lg mr-6">Sell</h2>
              <div className="w-11/12 flex_row_center justify-normal">
                <div className="w-[16%] bg-red-500 rounded-sm h-2" />
                <h3 className="text-lg ml-4">16%</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductSentiment;
