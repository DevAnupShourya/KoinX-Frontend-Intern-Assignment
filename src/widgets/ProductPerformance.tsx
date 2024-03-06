import { IoMdInformationCircle } from "react-icons/io";
import StatsDataRow from "../components/StatsDataRow";

function ProductPerformance() {
  return (
    <div id="overview"  className="p-4 bg-bg-secondary rounded-xl mb-4">
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
            <StatsDataRow dataName="Bitcoin Price" dataValue="$16,815.46" />
            <StatsDataRow
              dataName="24h Low / 24h High"
              dataValue="$16,382.07 / $16,874.12"
            />
            <StatsDataRow
              dataName="7d Low / 7d High"
              dataValue="$16,382.07 / $16,874.12"
            />
            <StatsDataRow
              dataName="Trading Volume"
              dataValue="$23,249,202,782"
            />
            <StatsDataRow dataName="Market Cap Rank" dataValue="#1" />
          </div>
          <div className="w-1/2 max-md:w-full flex flex-col">
            <StatsDataRow dataName="Market Cap" dataValue="$323,507,290,047" />
            <StatsDataRow dataName="Market Cap Dominance" dataValue="38.343%" />
            <StatsDataRow dataName="Volume / Market Cap" dataValue="0.0718" />
            <StatsDataRow
              dataName="All Time High"
              dataNode={
                <div>
                  <h2 className="text-gray-900 text-end font-semibold">
                    $69,044.77 <span className="text-red-500">-75.6%</span>
                  </h2>
                  <p className="text-xs text-end">
                    Nov 10, 2021 (about 1 year)
                  </p>
                </div>
              }
            />
            <StatsDataRow
              dataName="All Time Low"
              dataNode={
                <div>
                  <h2 className="text-gray-900 text-end font-semibold">
                    $67.81 <span className="text-green-600">24729.1%</span>
                  </h2>
                  <p className="text-xs  text-end ">
                    Jul 06, 2013 (over 9 years)
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
