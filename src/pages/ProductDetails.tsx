import { useParams } from "react-router-dom";

import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import Sidebar from "../components/Sidebar";

function ProductDetails() {
  const params = useParams();

  return (
    <section className="w-full h-full padding-x ">
      <p id="breadcrumb" className="py-4 text-sm">
        Cryptocurrencies{" "}
        <MdOutlineKeyboardDoubleArrowRight className="inline mx-1 text-text-secondary" />
        <span className="text-text-primary capitalize font-semibold">
          {params.productId}
        </span>
      </p>
      <section className="flex justify-between gap-2 mb-10">
        <main className="border w-3/4 max-md:w-full">charts</main>
        <Sidebar />
      </section>
    </section>
  );
}

export default ProductDetails;
