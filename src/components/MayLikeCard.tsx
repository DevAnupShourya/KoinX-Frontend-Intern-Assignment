import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc";

interface CoinsCardProps {
  shortName: string;
  coinImage: string;
  price_change_percentage_24h: number;
  price: string;
  sparklineImage: string;
}

function MayLikeCard(props: CoinsCardProps) {
  const isInNegative = props.price_change_percentage_24h < 0 ? true : false;

  return (
    <div className="min-w-[25%] max-md:min-w-[60%] p-4 rounded-lg border">
      <h2>
        <img
          src={props.coinImage}
          alt={`${props.shortName}'s Image`}
          className="inline w-6 h-6 mr-2"
        />
        {props.shortName}
        <div
          className={`p-1 ml-2 text-xs font-semibold flex_row_center inline ${
            isInNegative
              ? "bg-red-50 text-red-500 "
              : "bg-green-50 text-green-500 "
          }`}
        >
          {isInNegative ? (
            <VscTriangleDown className="inline mr-1" />
          ) : (
            <VscTriangleUp className="inline mr-1" />
          )}
          {props.price_change_percentage_24h.toFixed(2)}%
        </div>
      </h2>
      <h1 className="font-semibold text-lg my-2">{props.price}</h1>
      <div className="w-11/12">
        <img
          src={props.sparklineImage}
          alt={`${props.shortName}'s sparkline Image`}
        />
      </div>
    </div>
  );
}

export default MayLikeCard;
