import YouMayLikeCarousel from "../components/YouMayLikeCarousel";
import TrendingCoinsCarousel from "../components/TrendingCoinsCarousel";

import { useEffect, useState } from "react";

interface Coin {
  shortName: string;
  coinImage: string;
  price_change_percentage_24h: number;
  price: string;
  sparklineImage: string;
}

interface CoinItem {
  symbol: string;
  small: string;
  data: {
    price_change_percentage_24h: { aed: number };
    price: string;
    sparkline: string;
  };
}

function YouMayLike() {
  const [trendingCoins, setTrendingCoins] = useState<Coin[]>([]);

  async function fetchTrendingCoins() {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_PUBLIC_KoinX_API_URL}/search/trending`
      );
      const data = await response.json();
      const coins: [] = data.coins;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      coins.map((data: any) => {
        const currentCoin: CoinItem = data.item;

        setTrendingCoins((prev) => [
          ...prev,
          {
            shortName: currentCoin.symbol,
            coinImage: currentCoin.small,
            price_change_percentage_24h:
              currentCoin.data.price_change_percentage_24h.aed,
            price: currentCoin.data.price,
            sparklineImage: currentCoin.data.sparkline,
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
    <footer className="bg-bg-secondary shadow-lg py-14 padding-x max-lg:mx-4 max-lg:px-4 max-lg:rounded-lg">
      <p className="title">you may also like</p>
      <YouMayLikeCarousel coinsData={trendingCoins} />
      <p className="title mt-3">Trending Coins</p>
      <TrendingCoinsCarousel coinsData={trendingCoins} />
    </footer>
  );
}

export default YouMayLike;
