import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc";
import TradingViewChart from "../components/TradingViewWidget";

interface ProductChartProps {
  image: string;
  name: string;
  symbol: string;
  rank: number;
  price_usd: number;
  price_inr: number;
  price_change_percentage_24h: number;
}

function ProductCharts(props: ProductChartProps) {
  const isInNegative = props.price_change_percentage_24h < 0 ? true : false;

  return (
    <div id="product" className="p-4 bg-bg-secondary rounded-xl mb-4">
      <p className="title flex items-center flex-wrap gap-4">
        <img
          src={props.image}
          alt={`${props.name}'s Image`}
          className="inline w-8 h-8  rounded-full mr-2"
        />
        {props.name}
        <span className="uppercase text-sm inline mx-2 text-gray-500 font-semibold">
          {props.symbol}
        </span>
        <span className="text-sm inline text-white bg-gray-500 p-2 rounded-md mx-5 font-light">
          Rank #{props.rank}
        </span>
      </p>
      <h2 className="text-2xl font-bold mt-5 flex items-center">
        ${props.price_usd}
        <span
          className={`inline py-1 px-3 font-semibold flex_row_center text-sm mx-5 ${
            isInNegative
              ? "bg-red-50 text-red-500"
              : "bg-green-50 text-green-500"
          }`}
        >
          {isInNegative ? (
            <VscTriangleDown className="inline mr-1" />
          ) : (
            <VscTriangleUp className="inline mr-1" />
          )}
          {props.price_change_percentage_24h.toFixed(2)}%
        </span>
        <span className="text-xs  text-gray-400">(24H)</span>
      </h2>
      <h2 className="font-semibold">₹{props.price_inr}</h2>
      <hr className="my-5" />
      <div className="w-full h-[50vh] overflow-y-hidden">
        <TradingViewChart code={props.symbol} />
      </div>
    </div>
  );
}

export default ProductCharts;
