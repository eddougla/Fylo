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
import Productive from "./components/Productive";
import Testimonials from "./components/Testimonials";
import TestimonialCard from "./components/TestimonialCard";

import stayProductive from "./assets/images/illustration-stay-productive.png";
import quotes from "./assets/images/bg-quotes.png";

import features from "./data/features";
import productive from "./data/productive";
import testimonials from "./data/testimonials";

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
      <Productive
        id="productive"
        img={stayProductive}
        imgAlt="Team collaboration illustration"
        heading="Stay productive, wherever you are."
        ariaLabel="productive-heading"
        linkText="See how Fylo works"
        linkHref="#"
        className="bg-white dark:bg-darkBlue"
      >
        {productive.map((paragraph) => (
          <p key={paragraph.id} className="text-md md:text-lg">
            {paragraph.paragraph}
          </p>
        ))}
      </Productive>
      <Testimonials
        id="testimonials"
        className="bg-gray-50 dark:bg-darkBlue"
        ariaLabel="Customer testimonials"
        img={quotes}
        imgAlt="Quote icon"
      >
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            quote={testimonial.quote}
            title={testimonial.title}
            name={testimonial.name}
            avatar={testimonial.avatar}
          />
        ))}
      </Testimonials>
    </>
  );
}

export default App;
