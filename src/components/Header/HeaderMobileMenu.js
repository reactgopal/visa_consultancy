import { Link } from "react-router-dom";

const HeaderMobileMenu = ({ openMenu, onClose, menuItems, setOpenMenu }) => {
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
        className={`xl:hidden fixed top-0 right-0 z-50 w-80 max-w-full h-screen bg-white shadow-2xl border-l overflow-y-auto transform transition-transform duration-300 ease-in-out
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
        <ul className="px-6 space-y-5 text-gray-700 font-medium">
          {menuItems.map((item) => (
            <li key={item.title}>
              <Link
                to={item.path}
                onClick={onClose}
                className="block py-2 border-b border-gray-100
                hover:text-blue-600 hover:pl-2
                transition-all duration-200"
              >
                {item.title}
              </Link>
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
