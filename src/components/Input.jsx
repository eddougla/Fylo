function Input({ type, placeholder, ariaLabel, ...props }) {
  return (
    <input
      type={type}
      className="w-full px-10 py-3 rounded-full focus:outline-none"
      placeholder={placeholder}
      aria-label={ariaLabel}
      {...props}
    />
  );
}
export default Input;
