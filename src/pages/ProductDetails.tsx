import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import ProductAbout from "../widgets/ProductAbout";
import ProductCharts from "../widgets/ProductCharts";
import ProductPerformance from "../widgets/ProductPerformance";
import ProductSentiment from "../widgets/ProductSentiment";
import ProductTeam from "../widgets/ProductTeam";
import ProductTokenomics from "../widgets/ProductTokenomics";
import YouMayLike from "../widgets/YouMayLike";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

interface Product {
  symbol: string;
  name: string;
  description: string;
  image: string;
  price_change_percentage_24h: number;
  current_price_usd: number;
  current_price_inr: number;
  ath: number;
  ath_change_percentage: number;
  ath_date: Date;
  atl: number;
  atl_date: Date;
  atl_change_percentage: number;
  market_cap: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  market_cap_rank: number;
}

interface ProductResponse {
  symbol: string;
  name: string;
  description: { en: string };
  image: { small: string };
  market_data: {
    price_change_percentage_24h: number;
    current_price: { usd: number; inr: number };
    ath: { usd: number };
    ath_change_percentage: { usd: number };
    ath_date: { usd: Date };
    atl: { usd: number };
    atl_date: { usd: Date };
    atl_change_percentage: { usd: number };
    market_cap: { usd: number };
    total_volume: { usd: number };
    high_24h: { usd: number };
    low_24h: { usd: number };
  };
  market_cap_rank: number;
}

function ProductDetails() {
  const params = useParams();
  const [isSlugAvailable, setIsSlugAvailable] = useState<boolean | null>(null);
  const [productData, setProductData] = useState<Product>();

  async function fetchCoinDetails() {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_PUBLIC_KoinX_API_URL}/coins/${params.productId}`
      );
      if (response.ok) {
        setIsSlugAvailable(true);
        const data: ProductResponse = await response.json();

        setProductData({
          symbol: data.symbol,
          name: data.name,
          description: data.description.en,
          image: data.image.small,
          price_change_percentage_24h:
            data.market_data.price_change_percentage_24h,
          current_price_usd: data.market_data.current_price.usd,
          current_price_inr: data.market_data.current_price.inr,
          ath: data.market_data.ath.usd,
          ath_change_percentage: data.market_data.ath_change_percentage.usd,
          ath_date: data.market_data.ath_date.usd,
          atl: data.market_data.atl.usd,
          atl_date: data.market_data.atl_date.usd,
          atl_change_percentage: data.market_data.atl_change_percentage.usd,
          market_cap: data.market_data.market_cap.usd,
          total_volume: data.market_data.total_volume.usd,
          high_24h: data.market_data.high_24h.usd,
          low_24h: data.market_data.low_24h.usd,
          market_cap_rank: data.market_cap_rank,
        });
      } else {
        setIsSlugAvailable(false);
        console.log("Not available");
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchCoinDetails();
    /* eslint-disable react-hooks/exhaustive-deps */
  }, []);

  return (
    <>
      <section className="w-full h-full padding-x">
        <p id="breadcrumb" className="py-4 text-sm">
          Cryptocurrencies{" "}
          <MdOutlineKeyboardDoubleArrowRight className="inline mx-1 text-text-secondary" />
          <span className="text-text-primary capitalize font-semibold">
            {params.productId}
          </span>
        </p>
        {isSlugAvailable === null ? (
          <div className="my-10 p-5">
            <h1 className="text-5xl font-bold animate-pulse">
              Loading............
            </h1>
            <p className="text-xl">Searching this coin.....</p>
          </div>
        ) : (
          <>
            {isSlugAvailable && productData && (
              <section className="flex justify-between max-md:gap-2 gap-5 mb-10 max-lg:flex-wrap">
                <main className="w-2/3 max-lg:w-full">
                  <ProductCharts
                    image={productData.image}
                    name={productData.name}
                    symbol={productData.symbol}
                    rank={productData.market_cap_rank}
                    price_usd={productData.current_price_usd}
                    price_inr={productData.current_price_inr}
                    price_change_percentage_24h={
                      productData.price_change_percentage_24h
                    }
                  />
                  {/* Product's Navbar */}
                  <div
                    id="ProductNavbar"
                    className="flex gap-6 border-b-2 border-b-gray-200 my-3 flex-nowrap max-md:overflow-x-scroll"
                  >
                    <a
                      className="product_navLinks text-blue-600 font-bold border-b-4 border-b-blue-600"
                      href="#overview"
                    >
                      Overview
                    </a>
                    <a className="product_navLinks" href="#fundamentals">
                      Fundamentals
                    </a>
                    <a className="product_navLinks" href="#newsInsights">
                      News Insights
                    </a>
                    <a className="product_navLinks" href="#sentiments">
                      Sentiments
                    </a>
                    <a className="product_navLinks" href="#team">
                      Team
                    </a>
                    <a className="product_navLinks" href="#technicals">
                      Technicals
                    </a>
                    <a className="product_navLinks" href="#tokenomics">
                      Tokenomics
                    </a>
                  </div>
                  <ProductPerformance
                    price={productData.current_price_usd}
                    high_24h={productData.high_24h}
                    low_24h={productData.low_24h}
                    total_volume={productData.total_volume}
                    rank={productData.market_cap_rank}
                    market_cap={productData.market_cap}
                    ath={productData.ath}
                    ath_date={productData.ath_date}
                    ath_change_percentage={productData.ath_change_percentage}
                    atl={productData.atl}
                    atl_date={productData.atl_date}
                    atl_change_percentage={productData.atl_change_percentage}
                  />
                  <ProductSentiment />
                  <ProductAbout
                    desc={productData.description}
                    productName={productData.name}
                  />
                  <ProductTokenomics />
                  <ProductTeam />
                </main>
                <Sidebar />
              </section>
            )}
            {!isSlugAvailable && (
              <section className="flex justify-between gap-2 mb-10 max-lg:flex-wrap">
                <div className="my-10 p-5">
                  <h1 className="text-5xl font-bold">404 :(</h1>
                  <p className="text-xl">
                    Sorry This Web Slug in not available
                  </p>
                </div>
                <Sidebar />
              </section>
            )}
          </>
        )}
      </section>
      <YouMayLike />
    </>
  );
}

export default ProductDetails;
