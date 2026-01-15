function Button({ type, ariaLabel, children, ...props }) {
  return (
    <button type={type} aria-label={ariaLabel} {...props}>
      {children}
    </button>
  );
}
export default Button;
