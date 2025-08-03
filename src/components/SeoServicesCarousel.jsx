import { useEffect, useRef } from "react";
import image1 from "../assets/webp/image1.webp";
import image2 from "../assets/webp/image2.webp";

const services = [
  {
    title: "Dubai Marina",
    description: "SEO for hospitality, real estate, and tourism businesses",
    image: image1,
  },
  {
    title: "Downtown Dubai",
    description: "E-commerce SEO for high-end brands and shopping outlets",
    image: image2,
  },
  {
    title: "Dubai Marina",
    description: "SEO for hospitality, real estate, and tourism businesses",
    image: image1,
  },
  {
    title: "Downtown Dubai",
    description: "E-commerce SEO for high-end brands and shopping outlets",
    image: image2,
  },
];

const SeoServicesCarousel = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollAmount = 0;
    let isPaused = false;

    const scroll = () => {
      if (isPaused) return;

      scrollAmount += 1.5;
      container.scrollLeft = scrollAmount;

      if (scrollAmount >= container.scrollWidth / 2) {
        scrollAmount = 0;
      }
    };

    const interval = setInterval(scroll, 20);

    // Pause on hover
    container.addEventListener("mouseenter", () => (isPaused = true));
    container.addEventListener("mouseleave", () => (isPaused = false));

    return () => {
      clearInterval(interval);
      container.removeEventListener("mouseenter", () => (isPaused = true));
      container.removeEventListener("mouseleave", () => (isPaused = false));
    };
  }, []);

  const duplicatedServices = [...services, ...services];

  return (
    <div className="bg-white py-16 px-4 sm:px-8 lg:px-16">
      {/* Scrollable Cards */}
      <div
        ref={scrollRef}
        className="overflow-x-auto pb-4 whitespace-nowrap scrollbar-hide"
        style={{ scrollBehavior: "auto" }}
      >
        <div className="flex gap-6 w-max">
          {duplicatedServices.map((service, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[350px] sm:w-[400px] md:w-[450px] h-[140px] bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
            >
              <div className="flex h-full">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-1/3 h-full object-cover"
                />
                <div className="p-4 flex flex-col justify-center">
                  <h3 className="text-md font-semibold text-gray-900 mb-1">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-12 text-center">
        <p className="text-lg font-medium text-gray-800 mb-3">
          We tailor our SEO strategies to the needs of Dubai’s dynamic market,
          helping businesses achieve top search rankings and drive local
          traffic.
        </p>
        <p className="text-sm text-gray-600 mb-6">
          Want to dominate local search results in Dubai?
        </p>
        <button className="bg-violet-600 hover:bg-violet-700 text-white font-semibold px-6 py-3 rounded-md transition">
          Get a Free SEO Audit
        </button>
      </div>
    </div>
  );
};

export default SeoServicesCarousel;
