import Header from "./components/Header";
import Logo from "./components/Logo";
import MainNavigation from "./components/MainNavigation";
import DesktopMenu from "./components/DesktopMenu";
import ThemeToggle from "./components/ThemeToggle";
import illustrationIntro from "./assets/images/illustration-intro.png";
import Hero from "./components/Hero";
import Features from "./components/Features";
import FeatureRow from "./components/FeatureRow";
import FeatureCard from "./components/FeatureCard";

import features from "./data/features";

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
      <Hero
        id="hero"
        className="bg-curvy-light-mode dark:bg-curvy-dark-mode"
        image={illustrationIntro}
        imageAlt="File storage illustration"
        heading="All your files in one secure location, assessible anywhere."
        description="Fylo stores all your most important files in one secure location.
        Access them wherever you need, share and collaborate with friends
        family, and co-workers."
        ctaText="Get Started"
      />
      <Features
        id="features"
        className="bg-gray-50 dark:bg-darkBlue1"
        ariaLabel="Features"
      >
        {features.map((feature) => (
          <FeatureRow key={feature.id} className={feature.className}>
            {feature.rows.map((row) => (
              <FeatureCard
                key={row.icon}
                icon={row.icon}
                iconAlt={row.iconAlt}
                title={row.title}
                description={row.description}
              />
            ))}
          </FeatureRow>
        ))}
      </Features>
    </>
  );
}

export default App;
