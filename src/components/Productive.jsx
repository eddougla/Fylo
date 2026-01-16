import arrow from "../assets/images/icon-arrow.svg";

function Productive({
  id,
  img,
  imgAlt,
  heading,
  className = "",
  ariaLabel,
  linkText,
  linkHref,
  children,
}) {
  return (
    <section id={id} className={className} aria-labelledby={ariaLabel}>
      <div className="container flex flex-col items-center mx-auto px-6 pt-24 pb-32 md:flex-row md:space-x-16">
        <div className="md:w-1/2">
          <img src={img} alt={imgAlt} className="mb-10" />
        </div>
        <div className="flex flex-col items-start md:w-1/2">
          <div className="flex flex-col space-y-5">
            <h2
              id="productive-heading"
              className="max-w-md text-xl font-bold md:text-4xl"
            >
              {heading}
            </h2>
            {children}
            <div className="block mt-4">
              <a
                href={linkHref}
                className="border-b border-accentCyan text-accentCyan focus:outline-none focus:ring-2 focus:ring-accentCyan focus:ring-offset-2 rounded-sm"
                aria-label="Learn how Fylo works"
              >
                {linkText}
                <img
                  src={arrow}
                  alt=""
                  className="inline pb-2"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Productive;
