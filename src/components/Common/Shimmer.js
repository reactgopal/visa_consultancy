const Shimmer = () => {
  const cards = Array.from({ length: 6 }); // Show 6 shimmer cards to match typical swiper view

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8">
      <div className="visa-category-layer absolute inset-0"></div>
      <div className="max-w-7xl mx-auto">
        {/* Heading placeholder */}
        <div className="text-center mb-12">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-96 mx-auto"></div>
          </div>
        </div>

        {/* Cards */}
        <div className="flex gap-8 overflow-hidden">
          {cards.map((_, idx) => (
            <div
              key={idx}
              className="animate-pulse bg-white rounded-2xl shadow-md overflow-hidden mb-3 h-full flex flex-col flex-shrink-0 w-full max-w-sm"
            >
              {/* Image placeholder */}
              <div className="relative h-52 shrink-0 bg-gray-200">
                <div className="absolute -bottom-6 left-6 bg-white rounded-full p-4 shadow-xl">
                  <div className="w-9 h-9 bg-gray-200 rounded-full"></div>
                </div>
              </div>

              {/* Content placeholder */}
              <div className="bg-white pt-10 px-6 pb-8 flex flex-col flex-1">
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
                <div className="space-y-2 mb-4">
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  <div className="h-4 bg-gray-200 rounded w-4/5"></div>
                </div>
                <div className="space-y-2 mb-6">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-gray-200 rounded-full mt-1"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-gray-200 rounded-full mt-1"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                  </div>
                </div>
                <div className="mt-auto h-5 bg-gray-200 rounded w-24"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shimmer;
