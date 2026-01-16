function Newsletter({
  id,
  className = "",
  ariaLabel,
  heading,
  description,
  children,
}) {
  return (
    <section
      id={id}
      className={`relative px-6 md:px-0 ${className}`}
      aria-labelledby={ariaLabel}
    >
      <div className="relative -top-40 max-w-4xl mx-auto p-10 px-6 space-y-6 text-center rounded-lg bg-gray-200 dark:bg-darkBlue1 md:px-16">
        <h2 id="early-access-heading" className="text-2xl font-bold">
          {heading}
        </h2>
        <p className="text-sm">{description}</p>
        {children}
      </div>
    </section>
  );
}
export default Newsletter;
