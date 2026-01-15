function Logo({ className = "", label, role }) {
  return (
    <div
      className={`bg-no-repeat h-20 w-48 mx-auto md:mx-0 md:absolute top-10 left-10 ${className}`}
      role={role}
      aria-label={label}
    ></div>
  );
}
export default Logo;
