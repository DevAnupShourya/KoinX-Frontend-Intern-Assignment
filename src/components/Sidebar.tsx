import { useEffect, useState } from "react";
import ProductValuation from "./ProductValuation";
import AdImage from "../assets/ad.svg";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

interface Coin {
  name: string;
  symbol: string;
  small_image: string;
  price_change_percentage_24h: string;
}

interface CoinItem {
  name: string;
  small: string;
  symbol: string;
  data: { price_change_percentage_24h: { aed: number } };
}

function Sidebar() {
  const [topThreeCoins, setTopThreeCoins] = useState<Coin[]>([]);

  async function fetchTrendingCoins() {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_PUBLIC_KoinX_API_URL}/search/trending`
      );
      const data = await response.json();
      const coins: [] = data.coins;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      coins.slice(0, 3).map((data: any) => {
        const currentCoin: CoinItem = data.item;

        setTopThreeCoins((prev) => [
          ...prev,
          {
            name: currentCoin.name,
            symbol: currentCoin.symbol,
            small_image: currentCoin.small,
            price_change_percentage_24h:
              currentCoin.data.price_change_percentage_24h.aed.toFixed(2),
          },
        ]);
      });
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchTrendingCoins();
  }, []);

  return (
    <aside className="w-1/3 max-lg:w-full">
      <div
        id="advertisement_banner"
        className="bg-[#1B4AEF] text-white text-center p-5 rounded-md"
      >
        <h1 className="text-2xl font-bold">Get Started with KoinX for FREE</h1>
        <p className="text-sm">
          With our range of features that you can equip for free, KoinX allows
          you to be more educated and aware of your tax reports.
        </p>
        <img
          src={AdImage}
          alt="AdImage"
          className="object-center mx-auto my-5"
        />
        <a href="" className="normal_btn text-black inline-block">
          Get Started for FREE{" "}
          <LiaLongArrowAltRightSolid className="inline ml-1" />
        </a>
      </div>
      <div
        id="Trending_Coins"
        className="p-4 bg-bg-secondary shadow-lg rounded-xl my-5"
      >
        <p className="title">Trending Coins(24h)</p>
        <div>
          {topThreeCoins.map((coin) => {
            return (
              <ProductValuation
                currentValuation={parseFloat(coin.price_change_percentage_24h)}
                fullName={coin.name}
                shortName={coin.symbol}
                image={coin.small_image}
                key={coin.symbol}
              />
            );
          })}
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
