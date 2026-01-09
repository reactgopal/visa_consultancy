import { Link } from "react-router-dom";
import { useState } from "react";

const HeaderMobileMenu = ({ openMenu, onClose, menuItems, setOpenMenu }) => {
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleSubmenu = (title) => {
    setOpenSubmenu(openSubmenu === title ? null : title);
  };

  return (
    <>
      {/* Backdrop */}
      {openMenu && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 xl:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`xl:hidden fixed top-0 right-0 z-50 w-80 max-w-full h-screen bg-white shadow-2xl border-l overflow-y-auto
        transform transition-transform duration-300 ease-in-out
        ${openMenu ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setOpenMenu(false)}
            className="text-xl font-bold text-gray-600 hover:text-red-500 transition"
          >
            ✕
          </button>
        </div>

        {/* Logo */}
        <div className="flex justify-center py-8">
          <Link to="/" onClick={onClose}>
            <img
              src="https://n-immigrate.vercel.app/assets/images/logo.png"
              alt="logo"
              className="h-12"
            />
          </Link>
        </div>

        {/* Menu */}
        <ul className="px-6 space-y-4 text-gray-700 font-medium">
          {menuItems.map((item) => (
            <li key={item.title}>
              {/* Parent Item */}
              <div
                className="flex items-center justify-between py-3 border-b border-gray-100 cursor-pointer"
                onClick={() =>
                  item.submenu ? toggleSubmenu(item.title) : onClose()
                }
              >
                <Link
                  to={item.path}
                  onClick={!item.submenu ? onClose : undefined}
                  className="flex-1 hover:text-blue-600 transition"
                >
                  {item.title}
                </Link>

                {item.submenu && (
                  <span
                    className={`ml-2 transition-transform duration-200
                    ${openSubmenu === item.title ? "rotate-180" : ""}`}
                  >
                    ▾
                  </span>
                )}
              </div>

              {/* Submenu */}
              {item.submenu && (
                <ul
                  className={`pl-4 overflow-hidden transition-all duration-300
                  ${
                    openSubmenu === item.title
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {item.submenu.map((subItem) => (
                    <li key={subItem.title}>
                      <Link
                        to={subItem.path}
                        onClick={onClose}
                        className="block py-2 text-sm text-gray-600
                        hover:text-blue-600 hover:pl-2
                        transition-all duration-200"
                      >
                        {subItem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Contact Info */}
        <div className="px-6 pt-16 pb-6 text-gray-600">
          <h4 className="font-bold text-gray-800 mb-3">Contact Info</h4>
          <p>380 St Kilda Road, Melbourne</p>
          <p className="mt-1">+88 12345 6987 231</p>
          <p className="mt-1">info@example.com</p>

          <div className="flex space-x-4 mt-5 text-xl">
            <span>🌐</span>
            <span>🐦</span>
            <span>📘</span>
            <span>📸</span>
          </div>
        </div>
      </aside>
    </>
  );
};

export default HeaderMobileMenu;
