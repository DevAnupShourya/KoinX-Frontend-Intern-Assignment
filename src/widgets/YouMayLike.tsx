import { useRef, useState } from "react";
import MayLikeCard from "../components/MayLikeCard";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

function YouMayLike() {
  const carousel1Ref = useRef<HTMLDivElement>(null);
  const carousel2Ref = useRef<HTMLDivElement>(null);
  const cardContainer1Ref = useRef<HTMLDivElement>(null);
  const cardContainer2Ref = useRef<HTMLDivElement>(null);
  const [scrollPosition1, setScrollPosition1] = useState<number>(0);
  const [scrollPosition2, setScrollPosition2] = useState<number>(0);

  const handleScroll1 = (direction: "left" | "right") => {
    const cardContainer = cardContainer1Ref.current;
    if (!cardContainer) return;

    const cardWidth = cardContainer.clientWidth;
    let newPosition;

    if (direction === "left") {
      newPosition = Math.max(scrollPosition1 - cardWidth, 0);
    } else {
      newPosition = Math.min(
        scrollPosition1 + cardWidth,
        cardContainer.scrollWidth - cardWidth
      );
    }

    setScrollPosition1(newPosition);

    cardContainer.scrollTo({
      left: newPosition,
      behavior: "smooth",
    });
  };

  const handleScroll2 = (direction: "left" | "right") => {
    const cardContainer = cardContainer2Ref.current;
    if (!cardContainer) return;

    const cardWidth = cardContainer.clientWidth;
    let newPosition;

    if (direction === "left") {
      newPosition = Math.max(scrollPosition2 - cardWidth, 0);
    } else {
      newPosition = Math.min(
        scrollPosition2 + cardWidth,
        cardContainer.scrollWidth - cardWidth
      );
    }

    setScrollPosition2(newPosition);

    cardContainer.scrollTo({
      left: newPosition,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-bg-secondary shadow-lg py-14 padding-x max-lg:mx-4 max-lg:px-4 max-lg:rounded-lg">
      <p className="title">you may also like</p>
      <div id="may_like_carousel" className="relative" ref={carousel1Ref}>
        {/* Carousel Handler Btns */}
        <button
          className="absolute left-0 top-[50%] -translate-y-1/2  w-8 h-8 bg-bg-secondary shadow-xl rounded-full grid place-items-center"
          onClick={() => handleScroll1("left")}
        >
          <FaAngleLeft />
        </button>
        <button
          className="absolute right-0 top-[50%] -translate-y-1/2 w-8 h-8 bg-bg-secondary shadow-xl rounded-full grid place-items-center"
          onClick={() => handleScroll1("right")}
        >
          <FaAngleRight />
        </button>
        {/* Carousel */}
        <div
          className="flex flex-nowrap overflow-x-scroll gap-4 px-5 hideScrollBar"
          ref={cardContainer1Ref}
        >
          <MayLikeCard />
          <MayLikeCard />
          <MayLikeCard />
          <MayLikeCard />
          <MayLikeCard />
          <MayLikeCard />
          <MayLikeCard />
          <MayLikeCard />
          <MayLikeCard />
          <MayLikeCard />
        </div>
      </div>
      <p className="title mt-3">Trending Coins</p>
      <div id="may_like_carousel" className="relative" ref={carousel2Ref}>
        {/* Carousel Handler Btns */}
        <button
          className="absolute left-0 top-[50%] -translate-y-1/2  w-8 h-8 bg-bg-secondary shadow-xl rounded-full grid place-items-center"
          onClick={() => handleScroll2("left")}
        >
          <FaAngleLeft />
        </button>
        <button
          className="absolute right-0 top-[50%] -translate-y-1/2 w-8 h-8 bg-bg-secondary shadow-xl rounded-full grid place-items-center"
          onClick={() => handleScroll2("right")}
        >
          <FaAngleRight />
        </button>
        {/* Carousel */}
        <div
          className="flex flex-nowrap overflow-x-scroll gap-4 px-5 hideScrollBar"
          ref={cardContainer2Ref}
        >
          <MayLikeCard />
          <MayLikeCard />
          <MayLikeCard />
          <MayLikeCard />
          <MayLikeCard />
          <MayLikeCard />
          <MayLikeCard />
          <MayLikeCard />
          <MayLikeCard />
          <MayLikeCard />
        </div>
      </div>
    </footer>
  );
}

export default YouMayLike;
