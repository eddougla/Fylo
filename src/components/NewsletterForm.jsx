import Button from "./Button";
import Input from "./Input";

function NewsletterForm({ ctaText, ariaLabel }) {
  return (
    <form
      className="flex flex-col items-start space-y-6 md:flex-row md:space-y-0 md:space-x-6"
      aria-label={ariaLabel}
    >
      <div className="w-full md:flex-1">
        <Input
          type="text"
          className="w-full px-10 py-3 rounded-full focus:outline-none"
          placeholder="email@example.com"
          ariaLabel="Email address"
        />
      </div>
      <Button
        type="submit"
        className="w-full p-3 px-6 rounded-full bg-accentCyan md:w-56 hover:scale-95"
        ariaLabel="Get started for free"
      >
        {ctaText}
      </Button>
    </form>
  );
}
export default NewsletterForm;
