import { useParams } from "react-router-dom";

import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import Sidebar from "../components/Sidebar";
import ProductAbout from "../widgets/ProductAbout";
import ProductCharts from "../widgets/ProductCharts";
import ProductPerformance from "../widgets/ProductPerformance";
import ProductSentiment from "../widgets/ProductSentiment";
import ProductTeam from "../widgets/ProductTeam";
import ProductTokenomics from "../widgets/ProductTokenomics";
import YouMayLike from "../widgets/YouMayLike";

function ProductDetails() {
  const params = useParams();

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
        <section className="flex justify-between gap-2 mb-10 max-lg:flex-wrap">
          <main className="w-3/4 max-lg:w-full">
            <ProductCharts />
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
            <ProductPerformance />
            <ProductSentiment />
            <ProductAbout />
            <ProductTokenomics />
            <ProductTeam />
          </main>
          <Sidebar />
        </section>
      </section>
      <YouMayLike />
    </>
  );
}

export default ProductDetails;
