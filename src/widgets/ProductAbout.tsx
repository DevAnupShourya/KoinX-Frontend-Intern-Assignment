import { LiaLongArrowAltRightSolid } from "react-icons/lia";

function ProductAbout(props: { productName: string; desc: string }) {
  return (
    <div id="about" className="p-4 bg-bg-secondary rounded-xl mb-4">
      <p className="title">About {props.productName}</p>
      <p className="sub_title">What is {props.productName}?</p>
      <p className="text-pretty">{props.desc}</p>
      <hr className="my-2" />
      <p className="sub_title">Lorem ipsum dolor sit amet</p>
      <p className="text-pretty">
        Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis
        tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at.
        Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque
        fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat
        pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien
        morbi sodales odio sed rhoncus.
      </p>
      <p className="text-pretty my-4">
        Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas
        vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus
        felis pellentesque interdum. Odio cursus phasellus velit in senectus
        enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet
        magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent
        massa turpis a. Integer dignissim augue viverra nulla et quis lobortis
        phasellus. Integer pellentesque enim convallis ultricies at.
      </p>
      <p className="text-pretty">
        Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa
        vel convallis duis ac. Mi adipiscing semper scelerisque porttitor
        pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum
        fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper
        dui
      </p>
      <hr className="my-2" />
      <p className="title">Already Holding {props.productName}?</p>
      <div className="flex_row_center max-md:flex-wrap gap-4">
        <div className="border w-1/2 h-full max-md:w-full flex_row_center justify-normal bg-gradient-to-tl from-cyan-600 to-cyan-400 rounded-md p-4 gap-4">
          <div className="w-2/4">
            <img
              src="./promotion_image_1.jpg"
              alt="promotion_image_1"
              className="object-center object-cover rounded-md w-44"
            />
          </div>
          <div className="w-2/4">
            <h1 className="text-white font-bold text-xl my-4">
              Calculate your Profits
            </h1>
            <a
              href="#"
              className="p-2 bg-white font-bold rounded-md text-sm text-black inline-block"
            >
              Check Now
              <LiaLongArrowAltRightSolid className="inline ml-1" />
            </a>
          </div>
        </div>
        <div className="border w-1/2 h-full max-md:w-full flex_row_center justify-normal bg-gradient-to-tl from-red-600 to-red-400 rounded-md p-4 gap-4">
          <div className="w-2/4">
            <img
              src="./promotion_image_2.jpg"
              alt="promotion_image_2"
              className="object-center object-cover rounded-md w-44"
            />
          </div>
          <div className="w-2/4">
            <h1 className="text-white font-bold text-xl my-4">
              Calculate your tax liability
            </h1>
            <a
              href=""
              className="p-2 bg-white font-bold rounded-md text-sm text-black inline-block"
            >
              Check Now
              <LiaLongArrowAltRightSolid className="inline ml-1" />
            </a>
          </div>
        </div>
      </div>
      <hr className="my-2" />
      <p className="text-pretty">
        Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa
        vel convallis duis ac. Mi adipiscing semper scelerisque porttitor
        pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum
        fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper
        dui
      </p>
    </div>
  );
}

export default ProductAbout;
