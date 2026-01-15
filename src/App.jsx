import Header from "./components/Header";
import Logo from "./components/Logo";
import MainNavigation from "./components/MainNavigation";
import DesktopMenu from "./components/DesktopMenu";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <>
      <Header>
        <Logo
          className="bg-logo-light-mode dark:bg-logo-dark-mode"
          label="Fylo Logo"
          role="img"
        />
        <DesktopMenu>
          <MainNavigation />
          <ThemeToggle />
        </DesktopMenu>
      </Header>
    </>
  );
}

export default App;
