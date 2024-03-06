import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc";

interface ProductProps {
  image: string;
  fullName: string;
  shortName: string;
  currentValuation: number;
}

export default function ProductValuation(props: ProductProps) {
  const isInNegative = props.currentValuation < 0 ? true : false;

  return (
    <div className="flex_row_center my-2">
      <div>
        <span className="p-1">
          <img
            src={props.image}
            alt={`${props.fullName}'s Image`}
            className="inline w-6 h-6"
          />
        </span>
        <h1 className="inline font-semibold">
          {props.fullName} ({props.shortName})
        </h1>
      </div>
      <div
        className={`py-1 px-3 font-semibold flex_row_center text-sm ${
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
        {props.currentValuation}%
      </div>
    </div>
  );
}
