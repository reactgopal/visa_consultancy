import { Link } from "react-router-dom";

const HeaderDesktop = ({ menuItems }) => {
  return (
    <>
      {/* Navigation */}
      <nav className="hidden xl:block">
        <ul className="flex items-center gap-8 font-medium text-blue-900">
          {menuItems.map((item) => (
            <li key={item.title} className="relative py-7 group capitalize">
              <Link
                to={`/visa/${item?.id}`}
                className="hover:text-blue-600 transition-colors text-base"
              >
                {item.title}
              </Link>
              {/* submenu   */}
              {item?.sub_category.length > 0 && (
                <ul
                  className="
                    absolute left-0 top-full mt-2 w-56
                    bg-white border border-gray-200 rounded-xl shadow-lg
                    opacity-0 invisible
                    group-hover:opacity-100 group-hover:visible
                    transition-all duration-200 ease-out
                    translate-y-2 group-hover:translate-y-0
                    z-50
                  "
                >
                  {item?.sub_category.map((subItem) => (
                    <li key={subItem.title}>
                      <Link
                        to={`/visa/subcategory/${subItem.id}`}
                        className="
                          block px-5 py-3 text-sm text-gray-700
                          hover:bg-blue-50 hover:text-blue-600
                          transition-colors rounded-xl
                        "
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
      </nav>

      {/* Enquiry */}
      <div className="hidden xl:flex items-center">
        <img
          className="rounded-full"
          src="https://n-immigrate.vercel.app/assets/images/resource/support-1.jpg"
          alt=""
        />
        <div className="flex flex-col ps-2">
          <span className="font-bold text-[#5e789c] uppercase">Enquiries</span>
          <span className="text-blue-900 font-semibold">+91 93164 39356</span>
        </div>
      </div>
    </>
  );
};

export default HeaderDesktop;
