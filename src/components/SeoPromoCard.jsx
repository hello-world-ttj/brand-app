import { useState, useEffect, useRef } from "react";
import { Mail, MapPin, CheckCircle, PhoneCall } from "lucide-react";

const SeoPromoCard = () => {
  const [isInView, setIsInView] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);
  const [descriptionVisible, setDescriptionVisible] = useState(false);
  const [auditTitleVisible, setAuditTitleVisible] = useState(false);
  const [listVisible, setListVisible] = useState([false, false, false]);
  const [contactVisible, setContactVisible] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(false);
  const [offerVisible, setOfferVisible] = useState(false);
  const [backgroundVisible, setBackgroundVisible] = useState(false);
  const cardRef = useRef(null);

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

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      // Background animation first
      setTimeout(() => setBackgroundVisible(true), 100);

      // Text animations
      setTimeout(() => setTitleVisible(true), 300);
      setTimeout(() => setDescriptionVisible(true), 500);
      setTimeout(() => setAuditTitleVisible(true), 700);

      // List items with stagger
      setTimeout(() => {
        setListVisible((prev) => {
          const newState = [...prev];
          newState[0] = true;
          return newState;
        });
      }, 900);

      setTimeout(() => {
        setListVisible((prev) => {
          const newState = [...prev];
          newState[1] = true;
          return newState;
        });
      }, 1100);

      setTimeout(() => {
        setListVisible((prev) => {
          const newState = [...prev];
          newState[2] = true;
          return newState;
        });
      }, 1300);

      // Contact info and final elements
      setTimeout(() => setContactVisible(true), 1500);
      setTimeout(() => setButtonVisible(true), 1700);
      setTimeout(() => setOfferVisible(true), 1900);
    }
  }, [isInView]);

  return (
    <div
      ref={cardRef}
      className={`relative bg-[#ec7928] max-w-6xl mx-auto text-white p-10 rounded-[50px] overflow-hidden mb-20 transition-all duration-700 ease-out ${
        backgroundVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-12 scale-95"
      }`}
    >
      <div className="absolute -right-[300px] top-0 h-full w-1/2 flex justify-end items-center pointer-events-none">
        <div className="relative w-[600px] h-[600px]">
          <div className="absolute rounded-full bg-[#FFFFFF] opacity-[0.13] w-[120%] h-[120%] top-[-10%] left-[-10%]" />
          <div className="absolute rounded-full bg-[#FFFFFF] opacity-[0.17] w-[105%] h-[105%] top-[-2.5%] left-[-2.5%]" />
          <div className="absolute rounded-full bg-[#FFFFFF] opacity-[0.20] w-[90%] h-[90%] top-[5%] left-[5%]" />
          <div className="absolute rounded-full bg-[#FFFFFF] opacity-[0.34] w-[70%] h-[70%] top-[15%] left-[15%]" />
          <div className="absolute rounded-full bg-[#FFFFFF] opacity-[0.44] w-[50%] h-[50%] top-[25%] left-[25%]" />
          <div className="absolute rounded-full bg-[#FFFFFF] opacity-100 w-[35%] h-[35%] top-[32.5%] left-[32.5%]" />
        </div>
      </div>

      <div className="max-w-2xl z-10 relative">
        <h2
          className={`text-3xl font-bold mb-4 transition-all duration-700 ease-out ${
            titleVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          Ready to Grow Your Business with SEO in Dubai?
        </h2>
        <p
          className={`mb-6 text-lg transition-all duration-700 ease-out ${
            descriptionVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          Don't let your competitors outrank you. Take the first step toward
          higher rankings, more traffic, and increased revenue with our expert
          SEO services.
        </p>

        <h3
          className={`text-xl font-semibold mb-4 transition-all duration-700 ease-out ${
            auditTitleVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          Get a Free SEO Audit Today!
        </h3>
        <ul className="space-y-2 mb-6 text-base">
          <li
            className={`transition-all duration-700 ease-out ${
              listVisible[0]
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <CheckCircle className="w-5 h-5 inline-block" /> Personalized
            strategy for your business
          </li>
          <li
            className={`transition-all duration-700 ease-out ${
              listVisible[1]
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <CheckCircle className="w-5 h-5 inline-block" /> Competitor analysis
            & keyword opportunities
          </li>
          <li
            className={`transition-all duration-700 ease-out ${
              listVisible[2]
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <CheckCircle className="w-5 h-5 inline-block" /> No-obligation
            consultation with an SEO expert
          </li>
        </ul>

        <div
          className={`flex flex-col sm:flex-row gap-4 mb-6 transition-all duration-700 ease-out ${
            contactVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-start gap-3 p-4 border border-white rounded-lg">
            <div className="flex flex-col gap-3 pt-1">
              <PhoneCall className="w-5 h-5" />
              <Mail className="w-5 h-5" />
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-base">+971 52 283 1655</p>
              <a
                href="mailto:info@brandstory.ae"
                className="underline text-white text-base"
              >
                info@brandstory.ae
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 border border-white rounded-lg">
            <MapPin className="w-5 h-5 mt-1" />
            <p className="text-base">
              G5, Al Meheri Plaza, opp DBC Building,
              <br />
              Al Khabaisi Area, Deira Dubai - 81577,
              <br />
              United Arab Emirates
            </p>
          </div>
        </div>

        <button
          className={`bg-[#845EF7] hover:bg-violet-700 cursor-pointer transition-all duration-700 ease-out text-white font-semibold py-2 px-6 rounded-md ${
            buttonVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-8 scale-95"
          }`}
        >
          Request a Free SEO Audit
        </button>

        <p
          className={`mt-6 font-semibold text-base transition-all duration-700 ease-out ${
            offerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          Limited-Time Offer: Get a FREE SEO strategy session when you sign up
          this month!
        </p>
      </div>
    </div>
  );
};

export default SeoPromoCard;
