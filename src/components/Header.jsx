function Header({ children }) {
  return (
    <header
      className="container mx-auto mt-10 px-6 text-center h-40 md:h-20"
      role="banner"
    >
      {children}
    </header>
  );
}
export default Header;
