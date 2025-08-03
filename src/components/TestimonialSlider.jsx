import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import testimonialImage from "../assets/webp/testimonial.webp";

const testimonials = [
  {
    image: testimonialImage,
    title: "E-Commerce SEO in Downtown Dubai",
    client: "Leading Fashion Retailer in Dubai",
    results: [
      "150% increase in organic traffic within 6 months",
      "85% boost in online sales through targeted SEO campaigns",
      "#1 ranking for high-competition keywords 'like luxury fashion in Dubai'",
    ],
    quote:
      "Brandstory transformed our online visibility. Our sales skyrocketed thanks to their expert SEO strategies!",
    author: "Mighty Warner",
  },
  {
    image: testimonialImage,
    title: "B2B SEO for Tech Startup in Abu Dhabi",
    client: "AI SaaS Company",
    results: [
      "400% increase in B2B lead conversions",
      "Ranked #1 for 'AI software for logistics'",
      "Improved domain authority from 12 to 42",
    ],
    quote:
      "We've never seen leads come in this consistently. The Brandstory team understood our niche and delivered real results.",
    author: "QuantumLogix",
  },
  {
    image: testimonialImage,
    title: "Local SEO for Restaurant Chain in Sharjah",
    client: "Al Karak Restaurants",
    results: [
      "Ranked in Google 3-pack for 10+ locations",
      "70% increase in reservations from Google",
      "1,200+ 5-star reviews generated",
    ],
    quote:
      "Our restaurants are now constantly booked. The team made local SEO easy for us!",
    author: "Al Karak Marketing Team",
  },
  {
    image: testimonialImage,
    title: "Enterprise SEO for Real Estate Firm in Dubai Marina",
    client: "Luxury Property Developers",
    results: [
      "Ranked top 5 for competitive real estate keywords",
      "300% increase in website engagement",
      "High-net-worth leads grew by 190%",
    ],
    quote:
      "They helped us dominate the Dubai luxury property space. Couldn't have asked for better ROI.",
    author: "Damac Elite Properties",
  },
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  const [cardVisible, setCardVisible] = useState(false);
  const [controlsVisible, setControlsVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);
  const sectionRef = useRef(null);
  const total = testimonials.length;

  const next = () => setCurrent((prev) => (prev + 1) % total);
  const prev = () => setCurrent((prev) => (prev - 1 + total) % total);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
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
      // Staggered animation sequence
      setTimeout(() => setTitleVisible(true), 100);
      setTimeout(() => setSubtitleVisible(true), 300);
      setTimeout(() => setCardVisible(true), 500);
      setTimeout(() => setControlsVisible(true), 700);
      setTimeout(() => setCtaVisible(true), 900);
    }
  }, [isInView]);

  return (
    <section ref={sectionRef} className="py-16 px-4 bg-gray-100">
      <h2 className={`text-3xl font-bold text-center mb-2 transition-all duration-700 ease-out ${
        titleVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}>
        What Our Clients Say
      </h2>
      <p className={`text-center text-gray-500 mb-10 max-w-xl mx-auto transition-all duration-700 ease-out ${
        subtitleVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}>
        Real businesses. Real results. See how our Dubai SEO strategies have
        helped brands grow.
      </p>

      <div className="relative max-w-5xl mx-auto">
        <div className={`bg-white p-6 md:p-10 rounded-2xl shadow-md flex flex-col md:flex-row gap-6 items-center transition-all duration-700 ease-out ${
          cardVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-12'
        }`}>
          <img
            src={testimonials[current].image}
            alt="Client"
            className="w-full md:w-1/2 h-64 object-cover rounded-lg"
          />
          <div className="w-full md:w-1/2">
            <h3 className="text-xl font-semibold">
              {testimonials[current].title}
            </h3>
            <p className="text-sm font-medium text-gray-600 mb-2">
              <strong>Client:</strong> {testimonials[current].client}
            </p>
            <p className="font-semibold mb-2">Results:</p>
            <ul className="list-disc list-inside mb-4 text-gray-700">
              {testimonials[current].results.map((r, idx) => (
                <li key={idx}>{r}</li>
              ))}
            </ul>
            <hr className="my-4" />
            <blockquote className="text-gray-800 italic mb-1">
              "{testimonials[current].quote}"
            </blockquote>
            <p className="font-bold text-sm">{testimonials[current].author}</p>
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={prev}
          className={`absolute top-1/3 -left-20 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:scale-105 transition-all duration-700 ease-out ${
            controlsVisible 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 -translate-x-8'
          }`}
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={next}
          className={`absolute top-1/3 -right-20 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:scale-105 transition-all duration-700 ease-out ${
            controlsVisible 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 translate-x-8'
          }`}
        >
          <ChevronRight size={20} />
        </button>

        {/* Pagination dots */}
        <div className={`flex justify-center mt-6 space-x-2 transition-all duration-700 ease-out ${
          controlsVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-4'
        }`}>
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full transition ${
                idx === current ? "bg-[#D9D9D9]  w-12" : "bg-[#D9D9D9]"
              }`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-10 transition-all duration-700 ease-out ${
          ctaVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-gray-600 mb-3">
            Want to see similar results for your business?
          </p>
          <button className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition">
            Get a Free SEO Audit
          </button>
        </div>
      </div>
    </section>
  );
}