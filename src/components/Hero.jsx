import Button from "./Button";

function Hero({
  id,
  heading,
  description,
  image,
  imageAlt,
  ctaText,
  className = "",
}) {
  return (
    <section
      id={id}
      className={`bg-no-repeat bg-contain bg-bottom ${className}`}
      aria-labelledby="hero-heading"
    >
      <div className="container mx-auto px-6 text-center md:pt-20 pb-52">
        <img src={image} alt={imageAlt} className="mx-auto" />
        <h1
          id="hero-heading"
          className="max-w-2xl mx-auto mb-10 text-3xl font-bold leading-normal mt-14 md:text-4xl"
        >
          {heading}
        </h1>
        <p className="max-w-sm mx-auto mb-10 text-sm md:max-w-xl md:text-lg">
          {description}
        </p>
        <Button
          type="button"
          className="p-3 rounded-full w-52 bg-accentCyan hover:scale-95 focus:outline-none focus:ring-4 focus:ring-accentCyan focus:ring-offset-2"
          ariaLabel="Get started with Fylo"
        >
          {ctaText}
        </Button>
      </div>
    </section>
  );
}
export default Hero;
