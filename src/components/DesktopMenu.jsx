function DesktopMenu({ className = "", children, label }) {
  return (
    <nav
      className={`flex items-center justify-center space-x-4 md:space-x-10 md:absolute top-12 right-10 ${className}`}
      aria-label={label}
    >
      {children}
    </nav>
  );
}
export default DesktopMenu;
