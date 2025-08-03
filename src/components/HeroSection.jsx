import { useState, useEffect } from "react";
import HeroImage from "../assets/webp/hero-section.webp";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="bg-black text-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
      <div
        className={`max-w-2xl transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          Top-Rated SEO Company in <br />
          <span className="text-white">Dubai | Drive Organic Growth</span>
        </h1>
        <h2 className="text-lg md:text-xl font-medium mb-6">
          Boost Your Online Presence with Data-Driven SEO Strategies
        </h2>
        <p className="mb-6">
          We help businesses in Dubai dominate search rankings with
          cutting-edge, ROI-focused SEO solutions. Increase visibility, attract
          qualified leads, and grow your revenue with our expert team.
        </p>
        <ul className="text-sm md:text-base mb-6 space-y-1">
          <li>📍 Dubai-based experts | Proven results | Tailored strategies</li>
          <li>✅ 97% client retention rate | 🚀 50K+ keywords ranked</li>
        </ul>
        <button className="bg-white text-black px-5 py-3 rounded-md font-semibold hover:bg-gray-200 transition cursor-pointer">
          Get a Free SEO Audit
        </button>
      </div>

      <div
        className={`max-w-md md:max-w-lg transition-opacity duration-1000 delay-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <img
          src={HeroImage}
          alt="Dubai skyline"
          className="w-full object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;
