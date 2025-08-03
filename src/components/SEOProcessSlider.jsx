import { useEffect, useRef, useState } from "react";
import SEOProcessCard from "./SEOProcessCard";
import step from "../assets/webp/step.webp";

const steps = [
  {
    title: "Understanding Your Business",
    description:
      "At Brandstory, we prioritize understanding your business, objectives, and unique aspects to craft a tailored SEO strategy. As your trusted SEO expert in Dubai, we begin with a comprehensive website audit, identifying and fixing technical and on-page SEO issues. While premium tools help address quick fixes, we go beyond by ensuring complete error-free optimization for better crawl accessibility and user experience. Our strategic approach aligns with your business model, enabling us to highlight your unique selling propositions (USPs) and target audience preferences effectively—driving enhanced visibility and long-term growth in the competitive Dubai market.",
    image: step,
  },
  {
    title: "Website Architecture Planning",
    description:
      "We structure your site for optimal usability and search engine crawlability. Our team designs a logical and scalable site architecture that ensures search engines can index your pages efficiently. This includes creating a clear URL structure, proper internal linking, mobile responsiveness, and improving the overall navigational hierarchy to enhance both user and bot experience. The result is a seamless structure that supports current content and future growth.",
    image: step,
  },
  {
    title: "Competitor Audit",
    description:
      "We conduct a deep dive into your top-performing competitors to uncover their keyword strategies, backlink profiles, content marketing efforts, and technical strengths. This analysis helps us identify gaps and areas of opportunity that can be capitalized on. We also evaluate SERP features, local SEO efforts, and domain authority to develop strategies that can outperform competitors in targeted niches.",
    image: step,
  },
  {
    title: "Keyword Research",
    description:
      "Targeting high-intent, high-volume keywords to match user search behavior, we use a blend of manual research and AI-driven tools. Our focus is on transactional, informational, and navigational queries relevant to your audience. We map keywords to the appropriate funnel stages to support content planning, improve user journeys, and increase organic traffic quality.",
    image: step,
  },
  {
    title: "On Page Optimization",
    description:
      "Improving metadata, content, and structure to align with SEO best practices. We optimize title tags, meta descriptions, heading structures (H1-H6), alt attributes, and content hierarchy. Schema markup is implemented for rich results, and we ensure that every page is keyword-optimized while preserving readability and UX. Our goal is to make every page a high-performance SEO asset.",
    image: step,
  },
  {
    title: "Content Optimization",
    description:
      "Ensuring all website content is SEO-friendly and user-centric. We refine existing pages for keyword density, readability, formatting, and engagement. Our team also performs content gap analysis, rewriting or expanding thin pages and aligning them with the user's search intent. The outcome is content that not only ranks but also converts.",
    image: step,
  },
  {
    title: "Topical Authority Optimization",
    description:
      "Building authority around relevant topics to boost SERP performance. We create interconnected content clusters focused on core themes relevant to your industry, enabling your site to be perceived as an authoritative source by Google. This includes pillar pages, supporting blogs, FAQs, and link-building within the topical silos.",
    image: step,
  },
  {
    title: "UI UX Optimization",
    description:
      "Enhancing user experience to reduce bounce rates and increase conversions. We evaluate layout structure, loading speed, mobile usability, button placement, and accessibility to ensure an intuitive and engaging experience across all devices. This not only benefits users but also sends positive signals to search engines, boosting rankings.",
    image: step,
  },
  {
    title: "Conversion Rate Optimization - CRO",
    description:
      "Strategic changes to increase user actions and business results. We use A/B testing, heatmap analysis, and behavioral analytics to optimize call-to-actions (CTAs), forms, landing pages, and navigation flows. By minimizing friction and guiding users toward your business goals, we help turn traffic into tangible revenue.",
    image: step,
  },
  {
    title: "Technical Optimization",
    description:
      "Fixing technical SEO issues for better indexing, speed, and performance. We resolve crawl errors, optimize robots.txt and XML sitemaps, implement HTTPS, fix broken links, and improve Core Web Vitals. Structured data and canonical tags are also used to avoid duplicate content issues. All these factors ensure your site performs well in both search engines and user sessions.",
    image: step,
  },
  {
    title: "Off Page Management",
    description:
      "Building backlinks and managing external signals to grow authority. Our off-page strategy involves high-quality link-building from relevant domains, brand mention monitoring, guest blogging, digital PR, and local citations. We focus on ethical, white-hat tactics that sustain rankings and resist algorithm penalties.",
    image: step,
  },
  {
    title: "Monitoring & Reporting",
    description:
      "Tracking SEO performance and sending detailed reports and insights. We monitor rankings, traffic sources, engagement metrics, and conversions via tools like Google Analytics, Search Console, and third-party trackers. Our transparent reporting includes monthly summaries, key takeaways, and actionable insights to refine strategy based on real-time data.",
    image: step,
  },
];

const SEOProcessSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [visibleSteps, setVisibleSteps] = useState(new Set());
  const [cardVisible, setCardVisible] = useState(false);
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
      // Animate steps list
      steps.forEach((_, index) => {
        setTimeout(() => {
          setVisibleSteps((prev) => new Set([...prev, index]));
        }, index * 100);
      });

      // Animate card after steps
      setTimeout(() => {
        setCardVisible(true);
      }, steps.length * 100 + 200);
    }
  }, [isInView]);

  return (
    <section ref={sectionRef} className="w-full py-16 bg-white">
      <h2
        className={`text-3xl font-bold text-center mb-10 transition-all duration-700 ease-out ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        Our Comprehensive SEO Process
      </h2>
      <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto px-4">
        {/* Left: Steps List */}
        <div className="md:w-1/3 space-y-4">
          {steps.map((step, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`block text-left w-full px-4 py-2 rounded-lg text-sm font-medium transition-all duration-700 ease-out ${
                index === activeIndex
                  ? "text-violet-600 font-semibold"
                  : "text-gray-500"
              } ${
                visibleSteps.has(index)
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              <span className="inline-flex items-center gap-2 cursor-pointer">
                <span
                  className={`h-2 w-2 rounded-full inline-block cursor-pointer transition-colors duration-300 ${
                    index === activeIndex ? "bg-violet-600" : "bg-gray-300"
                  }`}
                ></span>
                {step.title}
              </span>
            </button>
          ))}
        </div>

        {/* Right: Active Card */}
        <div className="md:w-2/3">
          <SEOProcessCard step={steps[activeIndex]} isVisible={cardVisible} />
        </div>
      </div>
    </section>
  );
};

export default SEOProcessSlider;
