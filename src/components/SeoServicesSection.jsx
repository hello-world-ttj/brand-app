import { useEffect, useRef, useState } from "react";
import SeoServiceCard from "./SeoServiceCard";

const services = [
  {
    title: "Keyword Research & Strategy",
    description:
      "We identify high-value keywords that align with your target audience’s search intent.",
    points: [
      "Competitor analysis & market research",
      "Long-tail keyword strategy for high conversion rates",
      "Industry-specific keyword optimization",
    ],
    bg: "#31A8FE",
  },
  {
    title: "On-Page Optimization",
    description:
      "Our team fine-tunes your website’s content, structure, and metadata to improve rankings.",
    points: [
      "Optimized meta titles, descriptions, and headers",
      "SEO-friendly content enhancements",
      "Internal linking & URL structuring",
    ],
    bg: "#EA7D30",
  },
  {
    title: "Technical SEO",
    description:
      "We ensure your website is fast, mobile-friendly, and technically sound for search engines.",
    points: [
      "Website speed optimization & Core Web Vitals improvements",
      "Schema markup for better search visibility",
      "Mobile responsiveness & secure HTTPS implementation",
    ],
    bg: "#EC696A",
  },
  {
    title: "Local SEO (Google My Business & Citations)",
    description:
      "Dominate local search results and attract nearby customers with expert local SEO.",
    points: [
      "Google My Business optimization",
      "Local citations & NAP consistency",
      "Customer review management & backlinks",
    ],
    bg: "#302357",
  },
  {
    title: "Content Marketing & SEO Copywriting",
    description:
      "Value-driven content that boosts rankings and keeps your audience engaged.",
    points: [
      "Blog writing with Dubai SEO best practices",
      "SEO-optimized landing pages & service pages",
      "Content tailored for real estate, healthcare, e-commerce, and more",
    ],
    bg: "#845EF7",
  },
  {
    title: "Ethical Link Building",
    description:
      "We build high-quality, white-hat backlinks to enhance your site authority.",
    points: [
      "Guest posting & outreach campaigns",
      "Niche-specific backlinks",
      "Brand mentions & PR-driven link acquisition",
    ],
    bg: "#EC696A",
  },
  {
    title: "Performance Tracking & Reporting",
    description:
      "Clear insights into rankings, traffic, and ROI with transparent reports.",
    points: [
      "Google Analytics & Search Console monitoring",
      "Monthly SEO performance reports",
      "Ongoing strategy refinement",
    ],
    bg: "#EA7D30",
  },
];

export default function SeoServicesSection() {
  const [ctaVisible, setCtaVisible] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setCtaVisible(true);
      }, services.length * 150 + 200);

      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <section ref={sectionRef} className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-4">
        Our Comprehensive SEO Services In Dubai
      </h2>
      <p className="text-center text-gray-600 max-w-5xl mx-auto mb-12">
        At Brandstory, we offer a full suite of Dubai SEO services designed to
        help businesses rank higher, attract quality traffic, and maximize ROI.
        Whether you're a restaurant in Dubai Marina or an e-commerce store in
        Downtown Dubai, our customized strategies deliver real results.
      </p>

      <div className="flex flex-wrap -mx-3">
        {services.map((service, idx) => (
          <div key={idx} className="w-full sm:w-1/2 px-3 mb-6 flex">
            <div className="w-full h-full">
              <SeoServiceCard {...service} index={idx} isInView={isInView} />
            </div>
          </div>
        ))}

        <div className="w-full sm:w-1/2 px-3 mb-6 flex">
          <div
            className={`hover:scale-105 cursor-pointer bg-black text-white rounded-lg flex flex-col justify-center items-center p-6 w-full transition-all duration-700 ease-out ${
              ctaVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-xl font-semibold mb-4 text-center">
              Ready to Elevate Your Online Presence?
            </h3>
            <button className="bg-white text-black font-semibold py-2 px-4 rounded">
              Get a Free SEO Audit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
