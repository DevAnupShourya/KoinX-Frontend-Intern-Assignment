import { FaBitcoin } from "react-icons/fa6";
import { VscTriangleUp } from "react-icons/vsc";
import TradingViewChart from "../components/TradingViewWidget";

function ProductCharts() {
  return (
    <div id="product " className="p-4 bg-bg-secondary rounded-xl mb-4">
      <p className="title flex items-center">
        <FaBitcoin className="inline mr-2" />
        Bitcoin
        <span className="uppercase text-sm inline mx-2 text-gray-500 font-semibold">
          BTC
        </span>
        <span className="text-sm inline text-white bg-gray-500 p-2 rounded-md mx-5 font-light">
          Rank #1
        </span>
      </p>
      <h2 className="text-2xl font-bold mt-5 flex items-center">
        $46,953.04
        <span className="inline py-1 px-3 bg-green-50 text-green-500 font-semibold flex_row_center text-sm mx-5">
          <VscTriangleUp className="inline mr-1" />
          2.51%
        </span>
        <span className="text-xs  text-gray-400">(24H)</span>
      </h2>
      <h2 className="font-semibold">₹ 39,42,343</h2>
      <hr className="my-5" />
      <div className="w-full h-[50vh] overflow-y-hidden">
        {/* <TradingViewChart /> */}
      </div>
    </div>
  );
}

export default ProductCharts;
