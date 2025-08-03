import { useEffect, useRef, useState } from "react";
import image1 from "../assets/choose/1.png";
import image2 from "../assets/choose/2.png";
import image3 from "../assets/choose/3.png";
import image4 from "../assets/choose/4.png";
import image5 from "../assets/choose/5.png";
import image6 from "../assets/choose/6.png";

const cardData = [
  { img: image1 },
  { img: image2 },
  { img: image3 },
  { img: image4 },
  { img: image5 },
  { img: image6 },
];

export default function WhyChooseUsSection() {
  const [isInView, setIsInView] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);
  const [descriptionVisible, setDescriptionVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(new Array(6).fill(false));
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
      setTimeout(() => setTitleVisible(true), 200);
      setTimeout(() => setDescriptionVisible(true), 400);

      cardData.forEach((_, index) => {
        setTimeout(() => {
          setCardsVisible((prev) => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });
        }, 600 + index * 150);
      });
    }
  }, [isInView]);

  return (
    <section ref={sectionRef} className="py-16 px-4 max-w-7xl mx-auto">
      <h2
        className={`text-3xl font-bold text-center mb-4 transition-all duration-700 ease-out ${
          titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        Our Comprehensive SEO Services In Dubai
      </h2>
      <p
        className={`text-center text-gray-600 max-w-2xl mx-auto mb-12 transition-all duration-700 ease-out ${
          descriptionVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        At Brandstory, we offer a full suite of Dubai SEO services designed to
        help businesses rank higher, attract quality traffic, and maximize ROI.
      </p>

      <div className="flex flex-wrap justify-between gap-y-6">
        {cardData.map((item, idx) => (
          <div key={idx} className="w-full sm:w-[48%]">
            <img
              src={item.img}
              alt={`SEO service ${idx + 1}`}
              className={`w-[510px] h-auto cursor-pointer hover:scale-105 transition-all duration-700 ease-out ${
                cardsVisible[idx]
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-12 scale-95"
              }`}
              style={{
                transitionDelay: cardsVisible[idx] ? "0ms" : `${idx * 150}ms`,
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
