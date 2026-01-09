const SectionTitle = ({ title, subtitle, isCenter }) => {
  return (
    <>
      <p className="text-base font-semibold tracking-wide text-brand uppercase">
        {title}
      </p>
      <div
        className={`mt-1 flex items-center gap-3 ${
          isCenter ? "justify-center" : "justify-start"
        }`}
      >
        <span className="h-px w-12 bg-brand"></span>

        <span className="text-brand text-sm">★</span>

        <span className="h-px w-12 bg-brand"></span>
      </div>
      <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-brand">
        {subtitle}
      </h2>
    </>
  );
};
export default SectionTitle;
