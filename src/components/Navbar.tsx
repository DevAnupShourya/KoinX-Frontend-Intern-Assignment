import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <nav className="w-full flex-row-center bg-bg-secondary shadow-lg py-4 padding-x sticky top-0 left-0">
      <div id="logo">
        <img src="Logo.svg" alt="KoinX" />
      </div>
      {/* Navbar for large devices */}
      <div className="flex-row-center gap-8 max-md:gap-2  max-sm:hidden ">
        <a href={"cryptotaxes"} className="navbar_links">
          Crypto Taxes
        </a>
        <a href={"freetools"} className="navbar_links">
          Free Tools
        </a>
        <a href={"resourcecenter"} className="navbar_links">
          Resource Center
        </a>
        <a id="CTA" className="primary_btn text-white">
          Get Started
        </a>
      </div>
      {/* Navbar toogle for mobile devices */}
      <div className="center_center sm:hidden">
        <span
          onClick={() => {
            setIsNavbarOpen(!isNavbarOpen);
          }}
        >
          {isNavbarOpen ? (
            <IoCloseSharp className="text-2xl text-text-primary cursor-pointer hover:scale-110" />
          ) : (
            <GiHamburgerMenu className="text-2xl text-text-primary cursor-pointer hover:scale-110" />
          )}
        </span>
      </div>
      {/* Navbar for Mobile Devices */}
      {isNavbarOpen && (
        <div
          id="mobileNavbar"
          className="fixed top-[7%] right-0 w-full h-full px-4 py-6 bg-bg-primary sm:hidden"
        >
          <div className="flex flex-col gap-2">
            <a href={"cryptotaxes"} className="navbar_links">
              Crypto Taxes
            </a>
            <a href={"freetools"} className="navbar_links">
              Free Tools
            </a>
            <a href={"resourcecenter"} className="navbar_links">
              Resource Center
            </a>
            <a id="CTA" className="primary_btn text-white text-center">
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
