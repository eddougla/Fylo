function Footer({ children, role, ariaLabel, className }) {
  return (
    <footer
      className={`text-white ${className}`}
      role={role}
      aria-label={ariaLabel}
    >
      <div className="container mx-auto pt-12 px-5 pb-10">
        <div className="flex flex-col justify-between space-y-24 md:flex-row md:space-y-0">
          {children}
        </div>
      </div>
    </footer>
  );
}
export default Footer;
