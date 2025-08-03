import { useEffect, useState } from "react";
import FeatureCard from "./FeatureCard";
import Eye from "../assets/icons/eye.png";
import Bar from "../assets/icons/bar.png";
import Mike from "../assets/icons/mike.png";
import Trophy from "../assets/icons/trophy.png";
import Money from "../assets/icons/money.png";
import Conversion from "../assets/icons/conversion.png";
import Coin from "../assets/icons/coin.png";
import Auction from "../assets/icons/auction.png";
import Pie from "../assets/icons/pie.png";

const seoFeatures1 = [
  {
    icon: Eye,
    title: "Increased Visibility",
    description:
      "SEO helps businesses in Dubai to rank higher in search engine results, making them more visible to potential customers.",
    color: "bg-red-500",
  },
  {
    icon: Bar,
    title: "Targeted Traffic",
    description:
      "SEO helps businesses to attract targeted traffic to their websites, increasing the chances of conversions.",
    color: "bg-indigo-700",
  },
  {
    icon: Mike,
    title: "Brand Awareness",
    description:
      "SEO helps businesses to build brand awareness and establish themselves as leaders in their industry.",
    color: "bg-purple-600",
  },
  {
    icon: Trophy,
    title: "Competitive Advantage",
    description:
      "SEO helps businesses to gain a competitive advantage over their rivals.",
    color: "bg-blue-500",
  },
  {
    icon: Money,
    title: "Cost-Effective",
    description:
      "SEO is a cost-effective marketing strategy that can generate a high ROI.",
    color: "bg-orange-500",
  },
];

const seoFeatures2 = [
  {
    icon: Bar,
    title: "Increased Website Traffic",
    description:
      "SEO can help to increase website traffic from organic search results.",
    color: "bg-red-400",
  },
  {
    icon: Conversion,
    title: "Improved Conversion Rates",
    description:
      "SEO can help to improve conversion rates by attracting targeted traffic to your website.",
    color: "bg-purple-800",
  },
  {
    icon: Coin,
    title: "Higher ROI",
    description:
      "SEO is a cost-effective marketing strategy that can generate a high ROI.",
    color: "bg-purple-500",
  },
  {
    icon: Auction,
    title: "Brand Authority",
    description:
      "SEO can help to build brand authority and establish your business as a leader in your industry.",
    color: "bg-blue-600",
  },
  {
    icon: Pie,
    title: "Long-Term Results",
    description:
      "SEO is a long-term strategy that can provide sustainable results for your business.",
    color: "bg-orange-400",
  },
];

const SeoFeaturesSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const cards = document.querySelectorAll(".feature-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-5");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white py-16 px-4 md:px-20">
      <div
        className={`text-center mb-12 transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Dominate Dubai’s Competitive Market With Expert SEO Solutions
        </h2>
        <p className="text-gray-700 max-w-5xl mx-auto text-justify">
          In Dubai’s fast-paced digital landscape, standing out among
          competitors is a challenge. Businesses struggle with high competition,
          shifting search algorithms, and the need for a strong online presence
          to attract local and international customers.
        </p>
        <p className="text-gray-700 max-w-5xl mx-auto mt-4 text-justify">
          As a leading SEO company in Dubai, we specialize in tailored Dubai SEO
          services that drive measurable growth. Our data-driven strategies
          ensure your brand ranks higher, attracts the right audience, and
          achieves long-term success.
        </p>
      </div>

      <h3 className="text-2xl font-semibold mb-6 text-center">
        Importance Of SEO In Dubai
      </h3>
      <div className="flex flex-wrap justify-center gap-6 mb-16">
        {seoFeatures1.map((item, idx) => (
          <div key={idx} className="w-full sm:w-[45%] md:w-[30%]">
            <div className="h-full flex">
              <FeatureCard {...item} />
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-2xl font-semibold mb-6 text-center">
        Benefits Of SEO
      </h3>
      <div className="flex flex-wrap justify-center gap-6">
        {seoFeatures2.map((item, idx) => (
          <div key={idx} className="w-full sm:w-[45%] md:w-[30%]">
            <div className="h-full flex">
              <FeatureCard {...item} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SeoFeaturesSection;
