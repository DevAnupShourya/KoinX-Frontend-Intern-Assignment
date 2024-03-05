interface ProductProps {
  image: string;
  fullName: string;
  shortName: string;
  currentValuation: number;
}

import { VscTriangleUp } from "react-icons/vsc";

export default function ProductValuation(props: ProductProps) {
  return (
    <div className="flex_row_center my-2">
      <div>
        <span className="p-1">
          {/* Change It Later */}
          <svg
            className="inline"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            version="1.1"
            shape-rendering="geometricPrecision"
            text-rendering="geometricPrecision"
            image-rendering="optimizeQuality"
            fill-rule="evenodd"
            clip-rule="evenodd"
            viewBox="0 0 784.37 1277.39"
          >
            <g id="Layer_x0020_1">
              <metadata id="CorelCorpID_0Corel-Layer" />
              <g id="_1421394342400">
                <g>
                  <polygon
                    fill="#343434"
                    fill-rule="nonzero"
                    points="392.07,0 383.5,29.11 383.5,873.74 392.07,882.29 784.13,650.54 "
                  />
                  <polygon
                    fill="#8C8C8C"
                    fill-rule="nonzero"
                    points="392.07,0 -0,650.54 392.07,882.29 392.07,472.33 "
                  />
                  <polygon
                    fill="#3C3C3B"
                    fill-rule="nonzero"
                    points="392.07,956.52 387.24,962.41 387.24,1263.28 392.07,1277.38 784.37,724.89 "
                  />
                  <polygon
                    fill="#8C8C8C"
                    fill-rule="nonzero"
                    points="392.07,1277.38 392.07,956.52 -0,724.89 "
                  />
                  <polygon
                    fill="#141414"
                    fill-rule="nonzero"
                    points="392.07,882.29 784.13,650.54 392.07,472.33 "
                  />
                  <polygon
                    fill="#393939"
                    fill-rule="nonzero"
                    points="0,650.54 392.07,882.29 392.07,472.33 "
                  />
                </g>
              </g>
            </g>
          </svg>
        </span>

        <h1 className="inline font-semibold">
          {props.fullName}({props.shortName})
        </h1>
      </div>
      <div className="py-1 px-3 bg-green-50 text-green-500 font-semibold flex_row_center">
        <VscTriangleUp className="inline mr-1" />
        {props.currentValuation}%
      </div>
    </div>
  );
}

/**
 * <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xodm="http://www.corel.com/coreldraw/odm/2003" xml:space="preserve" width="100%" height="100%" version="1.1" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 784.37 1277.39">
 <g id="Layer_x0020_1">
  <metadata id="CorelCorpID_0Corel-Layer"/>
  <g id="_1421394342400">
   <g>
    <polygon fill="#343434" fill-rule="nonzero" points="392.07,0 383.5,29.11 383.5,873.74 392.07,882.29 784.13,650.54 "/>
    <polygon fill="#8C8C8C" fill-rule="nonzero" points="392.07,0 -0,650.54 392.07,882.29 392.07,472.33 "/>
    <polygon fill="#3C3C3B" fill-rule="nonzero" points="392.07,956.52 387.24,962.41 387.24,1263.28 392.07,1277.38 784.37,724.89 "/>
    <polygon fill="#8C8C8C" fill-rule="nonzero" points="392.07,1277.38 392.07,956.52 -0,724.89 "/>
    <polygon fill="#141414" fill-rule="nonzero" points="392.07,882.29 784.13,650.54 392.07,472.33 "/>
    <polygon fill="#393939" fill-rule="nonzero" points="0,650.54 392.07,882.29 392.07,472.33 "/>
   </g>
  </g>
 </g>
</svg>
 */
