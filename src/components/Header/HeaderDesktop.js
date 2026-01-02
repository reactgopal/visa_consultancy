import { Link } from "react-router-dom";

const HeaderDesktop = ({ menuItems }) => {
  return (
    <>
      {/* Navigation */}
      <nav className="hidden xl:block">
        <ul className="flex items-center gap-8 font-medium text-blue-900">
          {menuItems.map((item) => (
            <li key={item.title} className="py-7">
              <Link
                to={item.path}
                className="hover:text-blue-600 transition-colors text-base"
              >
                {item.title}
              </Link>
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
