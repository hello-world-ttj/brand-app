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
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-4">
        Our Comprehensive SEO Services In Dubai
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        At Brandstory, we offer a full suite of Dubai SEO services designed to
        help businesses rank higher, attract quality traffic, and maximize ROI.
      </p>

      <div className="flex flex-wrap justify-between gap-y-6">
        {cardData.map((item, idx) => (
          <div key={idx} className="w-full sm:w-[48%]">
            <img
              src={item.img}
              alt={`SEO service ${idx + 1}`}
              className="w-[510px] h-auto cursor-pointer hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
