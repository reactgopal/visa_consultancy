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
        {/* Close Button - nicer look */}
        <div className="flex justify-end p-5">
          <button
            onClick={() => setOpenMenu(false)}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-red-50 text-gray-700 hover:text-red-600 text-xl font-bold transition-colors duration-200"
          >
            ✕
          </button>
        </div>

        {/* Logo - slightly bigger + better spacing */}
        <div className="flex justify-center py-10">
          <Link to="/" onClick={onClose}>
            <img
              src="https://n-immigrate.vercel.app/assets/images/logo.png"
              alt="logo"
              className="h-14"
            />
          </Link>
        </div>

        {/* Menu - cleaner, more premium feel */}
        <ul className="px-6 space-y-2 text-blue-900 font-medium">
          {menuItems?.map((item) => (
            <li key={item.title} className="capitalize">
              {/* Parent Item */}
              <div
                className="flex items-center justify-between py-4 px-4 rounded-lg cursor-pointer transition-all duration-200 hover:bg-blue-50 group"
                onClick={() =>
                  item.sub_category
                    ? toggleSubmenu(item.title)
                    : setOpenMenu(false)
                }
              >
                <Link
                  to={item.id === "others" ? "/others" : `/visa/${item?.id}`}
                  onClick={() => setOpenMenu(false)}
                  className="flex-1 group-hover:text-blue-700 transition-colors"
                >
                  {item.title}
                </Link>

                {item?.sub_category?.length > 0 && (
                  <span
                    className={`ml-3 text-lg transition-transform duration-300 text-gray-500 group-hover:text-blue-600
              ${openSubmenu === item.title ? "rotate-180" : ""}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleSubmenu(item.title);
                    }}
                  >
                    ▼
                  </span>
                )}
              </div>

              {/* Submenu - softer background + better contrast */}
              {item.sub_category && (
                <ul
                  className={`pl-4 overflow-hidden transition-all duration-300 bg-gradient from-blue-50 to-white
            ${openSubmenu === item.title ? "max-h-96 opacity-100 py-3" : "max-h-0 opacity-0 py-0"}`}
                >
                  {item?.sub_category.map((subItem) => (
                    <li key={subItem.id}>
                      <Link
                        to={
                          item.id === "others"
                            ? `/others/${subItem.id}`
                            : `/visa/subcategory/${subItem.id}`
                        }
                        onClick={() => setOpenMenu(false)}
                        className="relative block py-3 px-4 text-blue-800 hover:text-blue-700 hover:bg-blue-100/60 rounded-md transition-all duration-200"
                      >
                        <span className="mr-3 text-blue-500">→</span>
                        {subItem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Contact Info - more elegant */}
        <div className="px-6 pt-12 pb-8 mt-4 border-t border-gray-100">
          <h4 className="font-bold text-gray-800 mb-4 text-lg">Contact Info</h4>
          <div className="space-y-3 text-gray-700">
            <p className="flex items-start">
              <span className="mr-3 mt-1 text-blue-600">📍</span>
              380 St Kilda Road, Melbourne
            </p>
            <p className="flex items-center">
              <span className="mr-3 text-blue-600">☎</span>
              +88 12345 6987 231
            </p>
            <p className="flex items-center">
              <span className="mr-3 text-blue-600">✉</span>
              info@example.com
            </p>
          </div>

          <div className="flex gap-6 mt-6 text-2xl text-blue-600">
            <span className="hover:text-blue-800 transition cursor-pointer">
              🌐
            </span>
            <span className="hover:text-blue-800 transition cursor-pointer">
              🐦
            </span>
            <span className="hover:text-blue-800 transition cursor-pointer">
              📘
            </span>
            <span className="hover:text-blue-800 transition cursor-pointer">
              📸
            </span>
          </div>
        </div>
      </aside>
    </>
  );
};

export default HeaderMobileMenu;
