import React, { useState } from "react";
import { CircleMinus } from "lucide-react";

const tabs = [
  "General FAQ",
  "Dubai-Specific SEO FAQs",
  "Pricing & Process FAQs",
  "Company & Expertise FAQs",
];

const faqData = {
  "General FAQ": [
    {
      q: "How long does it take to see results from SEO?",
      a: [
        "SEO is a long-term strategy, and results depend on several factors, including industry competition, website history, and the effectiveness of the SEO strategy.",
        "Typically, you may start seeing noticeable improvements in rankings, traffic, and conversions within 3 to 6 months.",
        "More competitive industries may take 6 to 12 months or longer for significant results.",
        "Consistency and quality in SEO efforts are key to sustained growth.",
      ],
    },
    {
      q: "How do you measure the success of your SEO campaigns?",
      a: [
        "We track SEO success using key performance indicators (KPIs), such as:",
        "- Organic Traffic: The number of visitors from search engines.",
        "- Keyword Rankings: Improvements in rankings for targeted keywords.",
        "- Click-Through Rate (CTR): The percentage of users who click on search results.",
        "- Domain Authority & Backlinks: Growth in high-quality backlinks.",
        "- Conversions & ROI: The impact on leads, sales, or other business goals.",
        "We use tools like Google Analytics, Google Search Console, SEMrush, and Ahrefs to monitor performance and provide detailed reports.",
      ],
    },
    {
      q: "What is the difference between on-page and off-page SEO?",
      a: [
        "- On-Page SEO refers to optimizations made on the website itself, such as keyword optimization, content quality, meta tags, internal linking, and page speed. Think of it as optimizing the “inside” of your store.",
        "- Off-Page SEO involves external factors that influence your rankings, such as backlinks, social media signals, and brand mentions. It’s like building your store’s reputation through word-of-mouth and partnerships.",
        "Both are essential for a well-rounded SEO strategy.",
      ],
    },
  ],

  "Dubai-Specific SEO FAQs": [
    {
      q: "Do you specialize in SEO for Dubai-based businesses?",
      a: [
        "Yes, we have extensive experience working with businesses in Dubai and the UAE region.",
        "Our strategies are tailored to meet the local search trends, user behavior, and competitive landscape specific to Dubai.",
      ],
    },
    {
      q: "Can you help improve my Google ranking in the UAE region?",
      a: [
        "Absolutely. We optimize for regional SEO by targeting local keywords, setting up Google My Business, building local backlinks, and ensuring NAP (Name, Address, Phone) consistency.",
        "We also track rankings specific to users searching from Dubai, Abu Dhabi, and other Emirates.",
      ],
    },
  ],

  "Pricing & Process FAQs": [
    {
      q: "How much does your SEO service cost?",
      a: [
        "Our SEO packages are customized based on your business goals, website size, and competition.",
        "Pricing typically starts from $500/month and can go up depending on the scope.",
        "We offer flexible plans for startups, small businesses, and enterprise clients.",
      ],
    },
    {
      q: "What is your SEO process?",
      a: [
        "Our SEO process includes:",
        "- Website Audit & Competitor Analysis.",
        "- Keyword Research & Strategy Planning.",
        "- On-Page Optimization (technical and content).",
        "- Off-Page Optimization (link building and outreach).",
        "- Monthly Reporting and Strategy Adjustment.",
        "We maintain transparency throughout and collaborate closely with your team.",
      ],
    },
  ],

  "Company & Expertise FAQs": [
    {
      q: "Why should we choose your agency for SEO?",
      a: [
        "- Proven track record with measurable results for clients across industries.",
        "- Transparent reporting and ethical (white-hat) SEO practices.",
        "- Dedicated team of SEO experts with up-to-date knowledge.",
        "Our focus is always on long-term, sustainable growth for your business.",
      ],
    },
    {
      q: "Do you offer custom SEO strategies?",
      a: [
        "Yes. Every business is unique, and we don’t believe in cookie-cutter SEO.",
        "We create a tailored SEO roadmap based on your goals, industry, target audience, and current digital presence.",
      ],
    },
    {
      q: "Are your team members Google-certified?",
      a: [
        "Yes, many of our SEO professionals are certified in Google Analytics, Google Ads, and other relevant platforms.",
        "Continuous learning is a core part of our company culture.",
      ],
    },
  ],
};

const FaqTabs = () => {
  const [activeTab, setActiveTab] = useState("General FAQ");

  return (
    <section className="bg-[#f7f7f7] px-6 py-12 md:px-12 lg:px-20">
      {/* Heading */}
      <div className="flex items-center justify-center gap-3 mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          Frequently Asked Questions
        </h2>
        <CircleMinus size={24} />
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center items-center gap-6 border-b border-transparent mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative pb-2 text-sm md:text-base font-medium transition-all duration-200 ${
              activeTab === tab
                ? "text-black font-semibold"
                : "text-gray-700 hover:text-black"
            }`}
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#8255ff] rounded-full"></span>
            )}
          </button>
        ))}
      </div>

      {/* FAQ Panels */}
      <div className="space-y-6 max-w-5xl mx-auto">
        {faqData[activeTab].length > 0 ? (
          faqData[activeTab].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-gray-100 shadow-xs px-6 py-5"
            >
              <h4 className="font-semibold text-base sm:text-lg mb-2">
                {item.q}
              </h4>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                {item.a}
              </p>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500 text-sm italic">
            Content for "{activeTab}" is coming soon.
          </div>
        )}
      </div>
    </section>
  );
};

export default FaqTabs;
