import { Link } from "react-router-dom";

const CategoriesData = (props) => {
  const { visa, visaCategory } = props;
  return (
    <div className="rounded-2xl shadow-md hover:shadow-md overflow-hidden mb-3">
      {/* Image */}
      <div className="relative h-52">
        <div className="relative h-full w-full overflow-hidden group">
          <img
            src={visaCategory?.image}
            alt={visaCategory?.title}
            className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110"
          />

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-brand-600 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-60" />
        </div>

        {/* Icon */}
        <div className="group absolute -bottom-6 left-6 bg-white rounded-full p-4 shadow-xl hover:bg-brand-600 transition-all duration-500 ease-in-out">
          {/* <visa.icon className="w-9 h-9 text-brand group-hover:text-white transition-all duration-500 ease-in-out" /> */}
          <img
            src={visaCategory?.category_logo}
            alt={visaCategory?.title}
            className="w-9 h-9 text-brand group-hover:text-white transition-all duration-500 ease-in-out"
          />
        </div>
      </div>

      {/* Content */}
      <div className="bg-white pt-10 px-6 pb-8">
        <h3 className="text-2xl font-semibold text-brand mb-3">
          {visaCategory?.title}
        </h3>

        <p className="line-clamp-3 text-base text-gray-500 font-medium mb-4">
          {visaCategory?.short_description}
        </p>

        <ul className="space-y-2 mb-6 ">
          {visaCategory.bullets.slice(0, 3).map((point, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-gray-500 font-medium"
            >
              <span className="text-green-600 mt-1">✓</span>
              {point}
            </li>
          ))}
        </ul>
        <Link
          to={`/visa/${visaCategory?.id}`}
          className="text-base font-semibold text-slate-900 hover:underline flex items-center gap-1"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
};
export default CategoriesData;
