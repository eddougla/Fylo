function Input({ type, placeholder, ariaLabel, className, ...props }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      aria-label={ariaLabel}
      className={`focus:outline-none focus:ring-2 focus:ring-accentCyan ${className || ''}`}
      {...props}
    />
  );
}
export default Input;
