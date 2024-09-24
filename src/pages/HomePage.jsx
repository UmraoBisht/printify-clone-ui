import React, { lazy } from "react";
const Navbar = React.lazy(() => import("../components/Navbar"));
const Hero = React.lazy(() => import("../components/Hero"));
const StoreSection = React.lazy(() => import("../components/StoreSection"));
const FeaturesSection = React.lazy(() =>
  import("../components/FeaturesSection")
);
const ProductCustomizationComponent = React.lazy(() =>
  import("../components/ProductCustomizationComponent ")
);
const Testimonials = React.lazy(() => import("../components/Testimonials"));
const MakeMoney = React.lazy(() => import("../components/MakeMoney"));
const Footer = lazy(() => import("../components/Footer"));

function Homepage() {
  return (
    <Navbar>
      <Hero />
      <FeaturesSection />
      <ProductCustomizationComponent />
      <StoreSection />
      <Testimonials />
      <MakeMoney />
      <Footer />
    </Navbar>
  );
}

export default Homepage;
