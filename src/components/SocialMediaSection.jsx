import X from "../assets/icons/x.png";
import LinkedIn from "../assets/icons/linkedin.png";
import Instagram from "../assets/icons/instagram.png";
import Facebook from "../assets/icons/fb.png";
import { useEffect, useRef, useState } from "react";
export default function SocialMediaSection() {
  const [isInView, setIsInView] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);
  const [iconsVisible, setIconsVisible] = useState([
    false,
    false,
    false,
    false,
  ]);
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
      // Title animation
      setTimeout(() => setTitleVisible(true), 200);

      // Icons animation with stagger
      setTimeout(() => {
        setIconsVisible((prev) => {
          const newState = [...prev];
          newState[0] = true;
          return newState;
        });
      }, 600);

      setTimeout(() => {
        setIconsVisible((prev) => {
          const newState = [...prev];
          newState[1] = true;
          return newState;
        });
      }, 800);

      setTimeout(() => {
        setIconsVisible((prev) => {
          const newState = [...prev];
          newState[2] = true;
          return newState;
        });
      }, 1000);

      setTimeout(() => {
        setIconsVisible((prev) => {
          const newState = [...prev];
          newState[3] = true;
          return newState;
        });
      }, 1200);
    }
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      className="bg-[#2e1e62] text-white py-12 px-4 text-center"
    >
      <h2
        className={`text-2xl md:text-3xl font-semibold max-w-3xl mx-auto mb-16 leading-snug transition-all duration-700 ease-out ${
          titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        Our Experience Extends Across All Social Media Channels,
        <br />
        Ensuring Your Complete Presence
      </h2>

      <div className="relative w-full max-w-[400px] h-[130px] mx-auto overflow-hidden px-4">
        {/* Twitter (X) */}
        <div
          className={`w-25 h-25 rounded-full border-[6px] border-black bg-[#f1f1f1] flex items-center justify-center absolute left-0 top-0 z-40 transition-all duration-700 ease-out ${
            iconsVisible[0]
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-8 scale-75"
          }`}
        >
          <img src={X} alt="Twitter" className="w-10 h-10" />
        </div>

        {/* LinkedIn */}
        <div
          className={`w-25 h-25 rounded-full border-[6px] border-black bg-[#f1f1f1] flex items-center justify-center absolute left-[70px] top-0 z-30 transition-all duration-700 ease-out ${
            iconsVisible[1]
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-8 scale-75"
          }`}
        >
          <img src={LinkedIn} alt="LinkedIn" className="w-10 h-10" />
        </div>

        {/* Instagram */}
        <div
          className={`w-25 h-25 rounded-full border-[6px] border-black bg-[#f1f1f1] flex items-center justify-center absolute left-[145px] top-0 z-20 transition-all duration-700 ease-out ${
            iconsVisible[2]
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-8 scale-75"
          }`}
        >
          <img src={Instagram} alt="Instagram" className="w-10 h-10" />
        </div>

        {/* Facebook */}
        <div
          className={`w-25 h-25 rounded-full border-[6px] border-black bg-[#f1f1f1] flex items-center justify-center absolute left-[220px] top-0 z-10 transition-all duration-700 ease-out ${
            iconsVisible[3]
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-8 scale-75"
          }`}
        >
          <img src={Facebook} alt="Facebook" className="w-10 h-10" />
        </div>
      </div>
    </section>
  );
}
