function Testimonials({
  id,
  children,
  className = "",
  ariaLabel,
  img,
  imgAlt,
}) {
  return (
    <section id={id} className={className} aria-label={ariaLabel}>
      <div className="container mx-auto px-6 pt-12 pb-80 md:pb-96">
        <div className="relative flex flex-col w-full space-y-6 md:flex-row md:space-y-0 md:space-x-12">
          <img
            src={img}
            alt={imgAlt}
            className="absolute left-1 -top-2 w-10 md:-top-16 md:w-20"
            aria-hidden="true"
          />
          {children}
        </div>
      </div>
    </section>
  );
}
export default Testimonials;
