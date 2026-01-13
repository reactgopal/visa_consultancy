import { useState } from "react";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobileMenu from "./HeaderMobileMenu";
import { Link } from "react-router-dom";
import useCategories from "../../utils/useCategories";

const HeaderLayout = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const visaCategories = useCategories();

  return (
    <header className="bg-gray-100 relative">
      <div className="max-w-8xl mx-auto px-6">
        <div className="flex items-center justify-between h-20 md:h-24 lg:h-28">
          {/* Logo */}
          <Link to="/">
            <img
              src="https://n-immigrate.vercel.app/assets/images/logo.png"
              alt="logo"
              className="h-10 md:h-14 lg:h-16 xl:h-18 w-auto object-contain"
            />
          </Link>
          {/* Mobile Toggle */}
          <button
            className="xl:hidden bg-blue-950 px-2 py-1 rounded-lg"
            onClick={() => setOpenMenu(true)}
          >
            <span className="text-4xl text-white">☰</span>
          </button>

          {/* Desktop */}
          <HeaderDesktop menuItems={visaCategories} />
        </div>
      </div>

      {/* Mobile Menu */}
      <HeaderMobileMenu
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
        menuItems={visaCategories}
      />
    </header>
  );
};

export default HeaderLayout;
