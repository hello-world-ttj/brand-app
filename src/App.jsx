import FaqTabs from "./components/FaqTabs";
import HeroSection from "./components/HeroSection";
import SeoFeaturesSection from "./components/SeoFeaturesSection";
import SEOProcessSlider from "./components/SEOProcessSlider";
import SeoServicesSection from "./components/SeoServicesSection";
import ServiceAreasMapInteractive from "./components/ServiceAreasMap";
import SocialMediaSection from "./components/SocialMediaSection";
import TestimonialSlider from "./components/TestimonialSlider";
import WhyChooseUsSection from "./components/WhyChooseUsSection";

function App() {
  return (
    <>
      <HeroSection />
      <SeoFeaturesSection />
      <SeoServicesSection />
      <WhyChooseUsSection />
      <SEOProcessSlider />
      <TestimonialSlider />
      <SocialMediaSection />
      <ServiceAreasMapInteractive />
      <FaqTabs />
    </>
  );
}

export default App;
