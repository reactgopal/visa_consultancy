import { useState } from "react";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobileMenu from "./HeaderMobileMenu";

const HeaderLayout = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const menuItems = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Coaching", path: "/coaching" },
    { title: "Countries", path: "/countries" },
    { title: "Visa", path: "/visa" },
    { title: "Blog", path: "/blog" },
    { title: "Contact Us", path: "/contact" },
  ];

  return (
    <header className="bg-gray-100 relative">
      <div className="max-w-8xl mx-auto px-6">
        <div className="flex items-center justify-between h-20 md:h-24 lg:h-28">
          {/* Logo */}
          <img
            src="https://n-immigrate.vercel.app/assets/images/logo.png"
            alt="logo"
            className="h-10 md:h-14 lg:h-16 xl:h-18 w-auto object-contain"
          />

          {/* Mobile Toggle */}
          <button
            className="xl:hidden bg-blue-950 px-2 py-1 rounded-lg"
            onClick={() => setOpenMenu(true)}
          >
            <span className="text-4xl text-white">☰</span>
          </button>

          {/* Desktop */}
          <HeaderDesktop menuItems={menuItems} />
        </div>
      </div>

      {/* Mobile Menu */}
      <HeaderMobileMenu
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
        menuItems={menuItems}
      />
    </header>
  );
};

export default HeaderLayout;
