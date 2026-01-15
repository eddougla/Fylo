function Features({ id, children, className, ariaLabel }) {
  return (
    <section
      id={id}
      className={`pt-12 bg-gray-50 dark:bg-darkBlue1 ${className}`}
      aria-label={ariaLabel}
    >
      <div className="container mx-auto px-6 pb-32">{children}</div>
    </section>
  );
}
export default Features;
