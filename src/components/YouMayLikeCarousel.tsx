import { useRef, useState } from "react";
import MayLikeCard from "../components/MayLikeCard";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

interface Coin {
  shortName: string;
  coinImage: string;
  price_change_percentage_24h: number;
  price: string;
  sparklineImage: string;
}

function YouMayLikeCarousel(props: { coinsData: Coin[] }) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const cardContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition1] = useState<number>(0);

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

    setScrollPosition1(newPosition);

    cardContainer.scrollTo({
      left: newPosition,
      behavior: "smooth",
    });
  };

  return (
    <div id="may_like_carousel" className="relative" ref={carouselRef}>
      {/* Carousel Handler Btns */}
      <button
        className="absolute left-0 top-[50%] -translate-y-1/2 w-8 h-8 bg-bg-secondary shadow-xl rounded-full grid place-items-center"
        onClick={() => handleScroll("left")}
      >
        <FaAngleLeft />
      </button>
      <button
        className="absolute right-0 top-[50%] -translate-y-1/2 w-8 h-8 bg-bg-secondary shadow-xl rounded-full grid place-items-center"
        onClick={() => handleScroll("right")}
      >
        <FaAngleRight />
      </button>
      {/* Carousel */}
      <div
        className="flex flex-nowrap overflow-x-scroll gap-4 px-5 hideScrollBar"
        ref={cardContainerRef}
      >
        {props.coinsData.map((coin) => {
          return (
            <MayLikeCard
              coinImage={coin.coinImage}
              price={coin.price}
              price_change_percentage_24h={coin.price_change_percentage_24h}
              shortName={coin.shortName}
              sparklineImage={coin.sparklineImage}
              key={coin.shortName}
            />
          );
        })}
      </div>
    </div>
  );
}

export default YouMayLikeCarousel;
