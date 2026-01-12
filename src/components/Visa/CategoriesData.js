const CategoriesData = ({ visaCategory }) => {
  return (
    <div className="rounded-2xl shadow-md hover:shadow-md overflow-hidden mb-3 h-full flex flex-col">
      {/* Image */}
      <div className="relative h-52 shrink-0">
        <div className="relative h-full w-full overflow-hidden group">
          <img
            src={visaCategory?.image}
            alt={visaCategory?.title}
            className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-brand-600 opacity-0 group-hover:opacity-60 transition-all duration-500" />
        </div>

        <div className="absolute -bottom-6 left-6 bg-white rounded-full p-4 shadow-xl transition-all duration-500">
          <img
            src={visaCategory?.category_logo}
            alt={visaCategory?.title}
            className="w-9 h-9"
          />
        </div>
      </div>

      {/* Content */}
      <div className="bg-white pt-10 px-6 pb-8 flex flex-col flex-1">
        <h3 className="text-2xl font-semibold text-brand mb-3">
          {visaCategory?.title}
        </h3>

        <p className="line-clamp-3 text-base text-gray-500 font-medium mb-4">
          {visaCategory?.short_description.slice(0, 200)}...
        </p>

        <ul className="space-y-2 mb-6 min-h-[72px]">
          {visaCategory?.bullets?.slice(0, 2).map((point, i) => (
            <li key={i} className="flex gap-2 text-gray-500 font-medium">
              <span className="text-green-600">✓</span>
              {point.slice(0, 40)}...
            </li>
          ))}
        </ul>

        <button className="mt-auto text-base font-semibold text-slate-900 hover:underline flex items-center gap-1">
          Read More →
        </button>
      </div>
    </div>
  );
};

export default CategoriesData;
