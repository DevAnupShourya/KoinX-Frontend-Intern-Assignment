import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import ProductDetails from "./pages/ProductDetails";
import Home from "./pages/Home";

function App() {
  return (
    <section className="bg-bg-primary w-screen transition-all ease-in-out">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:productId" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
      <footer className="bg-bg-secondary shadow-lg py-4 padding-x">
        <p className="title">you may also like</p>
        <div>charts carousel</div>
        <div>charts carousel</div>
      </footer>
    </section>
  );
}

export default App;
