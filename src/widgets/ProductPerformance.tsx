import StatsDataRow from "../components/StatsDataRow";
import { IoMdInformationCircle } from "react-icons/io";

interface ProductPerformanceProps {
  price: number;
  high_24h: number;
  low_24h: number;
  total_volume: number;
  rank: number;
  market_cap: number;
  ath: number;
  ath_date: Date;
  ath_change_percentage: number;
  atl: number;
  atl_date: Date;
  atl_change_percentage: number;
}

function ProductPerformance(props: ProductPerformanceProps) {
  return (
    <div id="overview" className="p-4 bg-bg-secondary rounded-xl mb-4">
      <p className="title">Performance</p>
      <div
        id="todaysLowHigh"
        className="flex flex-nowrap justify-between items-center gap-2 my-6"
      >
        <div id="low">
          <h3 className="text-sm mb-1">Today’s Low </h3>
          <h2 className="font-semibold">46,930.22</h2>
        </div>
        <div id="bar" className="border w-3/4">
          <div className="w-full h-2 progressbar_gradient rounded-full" />
        </div>
        <div id="high">
          <h3 className="text-sm mb-1">Today’s High</h3>
          <h2 className="font-semibold">49,343.83</h2>
        </div>
      </div>
      <div
        id="52WLowHigh"
        className="flex flex-nowrap justify-between items-center gap-2 my-6"
      >
        <div id="low">
          <h3 className="text-sm mb-1">52W Low</h3>
          <h2 className="font-semibold">16,930.22</h2>
        </div>
        <div id="bar" className="border w-3/4">
          <div className="w-full h-2 progressbar_gradient rounded-full" />
        </div>
        <div id="high">
          <h3 className="text-sm mb-1">52W High</h3>
          <h2 className="font-semibold">49,743.83</h2>
        </div>
      </div>
      <div className="my-3">
        <p className="sub_title">
          Fundamentals <IoMdInformationCircle className="inline ml-1" />
        </p>
        <div className="flex justify-between items-stretch gap-20 max-md:flex-wrap max-md:gap-1">
          <div className="w-1/2 max-md:w-full flex flex-col">
            <StatsDataRow
              dataName="Bitcoin Price"
              dataValue={`$${props.price}`}
            />
            <StatsDataRow
              dataName="24h Low / 24h High"
              dataValue={`$${props.low_24h} / $${props.high_24h}`}
            />
            <StatsDataRow
              dataName="7d Low / 7d High"
              dataValue="$16,382.07 / $16,874.12"
            />
            <StatsDataRow
              dataName="Trading Volume"
              dataValue={`$${props.total_volume}`}
            />
            <StatsDataRow
              dataName="Market Cap Rank"
              dataValue={`#${props.rank}`}
            />
          </div>
          <div className="w-1/2 max-md:w-full flex flex-col">
            <StatsDataRow
              dataName="Market Cap"
              dataValue={`$${props.market_cap}`}
            />
            <StatsDataRow dataName="Market Cap Dominance" dataValue="38.343%" />
            <StatsDataRow dataName="Volume / Market Cap" dataValue="0.0718" />
            <StatsDataRow
              dataName="All Time High"
              dataNode={
                <div>
                  <h2 className="text-gray-900 text-end font-semibold">
                    ${props.ath}{" "}
                    <span className="text-red-500">
                      {props.ath_change_percentage.toFixed(1)}%
                    </span>
                  </h2>
                  <p className="text-xs text-end">
                    {new Date(props.ath_date).toDateString()}(about 1 year)
                  </p>
                </div>
              }
            />
            <StatsDataRow
              dataName="All Time Low"
              dataNode={
                <div>
                  <h2 className="text-gray-900 text-end font-semibold">
                    ${props.atl}{" "}
                    <span className="text-green-500">
                      {props.atl_change_percentage.toFixed(1)}
                    </span>
                  </h2>
                  <p className="text-xs  text-end ">
                    {new Date(props.atl_date).toDateString()} (over 9 years)
                  </p>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPerformance;
