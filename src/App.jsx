import { lazy, Suspense } from "react";
import Header from "./components/Header";
import Logo from "./components/Logo";
import MainNavigation from "./components/MainNavigation";
import DesktopMenu from "./components/DesktopMenu";
import ThemeToggle from "./components/ThemeToggle";
import illustrationIntro from "./assets/images/illustration-intro.png";
import Hero from "./components/Hero";
import Features from "./components/Features";
import FeatureRow from "./components/FeatureRow";
import LoadingSpinner from "./components/LoadingSpinner";
import Productive from "./components/Productive";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import NewsletterForm from "./components/NewsletterForm";
import Footer from "./components/Footer";
import FooterContactInfo from "./components/FooterContactInfo";
import FooterNavigation from "./components/FooterNavigation";
import FooterSocialLinks from "./components/FooterSocialLinks";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const FeatureCard = lazy(() =>
  delay(2000).then(() => import("./components/FeatureCard"))
);

const TestimonialCard = lazy(() =>
  delay(4000).then(() => import("./components/TestimonialCard"))
);

import stayProductive from "./assets/images/illustration-stay-productive.png";
import quotes from "./assets/images/bg-quotes.png";
import phone from "./assets/images/icon-phone.svg";
import email from "./assets/images/icon-email.svg";

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
        <Suspense
          fallback={
            <LoadingSpinner className="py-20" color="border-accentCyan" />
          }
        >
          {features && features.length > 0 ? (
            features.map((feature) => (
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
            ))
          ) : (
            <div className="flex justify-center items-center py-20">
              <p className="text-gray-500 dark:text-gray-400">
                No features available at the moment.
              </p>
            </div>
          )}
        </Suspense>
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
        <Suspense
          fallback={
            <LoadingSpinner
              className="py-20 w-full"
              color="border-accentCyan"
            />
          }
        >
          {testimonials && testimonials.length > 0 ? (
            testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                quote={testimonial.quote}
                title={testimonial.title}
                name={testimonial.name}
                avatar={testimonial.avatar}
              />
            ))
          ) : (
            <div className="flex justify-center items-center py-20 w-full">
              <p className="text-gray-500 dark:text-gray-400">
                No testimonials available at the moment.
              </p>
            </div>
          )}
        </Suspense>
      </Testimonials>
      <Newsletter
        id="early-access"
        className="dark:bg-darkBlue2"
        ariaLabel="early-access-heading"
        heading="Get early access today"
        description="It only takes a minute to sign up and our free starter tier is
        extremely generous. If you have any questions, our support team would
        be happy to help you."
      >
        <NewsletterForm
          ctaText="Get Started For Free"
          ariaLabel="Sign up form"
        />
      </Newsletter>
      <Footer role="contentinfo" className="bg-darkBlue2" ariaLabel="Footer">
        <FooterContactInfo
          phoneIcon={phone}
          phoneNumber="+1-543-123-4567"
          emailIcon={email}
          emailAddress="example@fylo.com"
        />
        <FooterNavigation ariaLabel="Footer navigation" />
        <FooterSocialLinks ariaLabel="Social media" />
      </Footer>
    </>
  );
}

export default App;
