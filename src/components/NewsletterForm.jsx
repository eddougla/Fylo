import { useState, useCallback } from "react";
import Button from "./Button";
import Input from "./Input";

function NewsletterForm({ ctaText, ariaLabel }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = useCallback((email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }, []);

  const handleEmailChange = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    if (!email) {
      setError("Please enter your email");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setError("");
    alert("Thank you for subscribing!");
    setEmail("");
  }, [email, validateEmail]);

  return (
    <form
      className="flex flex-col items-start space-y-6 md:flex-row md:space-y-0 md:space-x-6"
      aria-label={ariaLabel}
      onSubmit={handleSubmit}
    >
      <div className="w-full md:flex-1">
        <Input
          type="text"
          className="w-full px-10 py-3 rounded-full focus:outline-none text-black"
          placeholder="email@example.com"
          ariaLabel="Email address"
          value={email}
          onChange={handleEmailChange}
        />
        <div className="h-6 mt-2">
          {error && (
            <p className="text-sm text-red-500" role="alert">
              {error}
            </p>
          )}
        </div>
      </div>
      <Button
        type="submit"
        className="w-full p-3 px-6 rounded-full bg-accentCyan md:w-56 hover:scale-95 focus:outline-none focus:ring-4 focus:ring-accentCyan focus:ring-offset-2"
        ariaLabel="Get started for free"
      >
        {ctaText}
      </Button>
    </form>
  );
}
export default NewsletterForm;
