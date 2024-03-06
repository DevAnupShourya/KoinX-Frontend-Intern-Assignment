import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import AdImage from "../assets/ad.svg";
import ProductValuation from "./ProductValuation";

function Sidebar() {
  return (
    <aside className="border w-1/4 max-lg:w-full">
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
          Get Started for FREE <LiaLongArrowAltRightSolid className="inline ml-1" />
        </a>
      </div>
      <div id="Trending_Coins" className="p-4 bg-bg-secondary shadow-lg rounded-xl my-5">
        <p className="title">Trending Coins(24h)</p>
        <div className="">
          <ProductValuation
            currentValuation={8.21}
            fullName="Ethereum"
            shortName="ETH"
          />
          <ProductValuation
            currentValuation={5.26}
            fullName="Bitcoin"
            shortName="BTC"
          />
          <ProductValuation
            currentValuation={4.32}
            fullName="Polygon"
            shortName="MATIC"
          />
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
