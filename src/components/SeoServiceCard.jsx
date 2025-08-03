import { useEffect, useState } from "react";
import Tick from "../assets/icons/tick.png";
const SeoServiceCard = ({
  title,
  description,
  points,
  bg,
  index,
  isInView,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const rgbaBg = hexToRgba(bg, 0.1);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, index * 150);

      return () => clearTimeout(timer);
    }
  }, [index, isInView]);

  return (
    <div
      className={`hover:scale-105 rounded-lg shadow-md p-6 h-full cursor-pointer transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ backgroundColor: rgbaBg }}
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="list-none space-y-2 text-sm text-gray-700">
        {points.map((point, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <span className="text-black text-lg mt-1">
              <img src={Tick} alt="Tick icon" className="w-4 h-4" />
            </span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const hexToRgba = (hex, opacity) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

export default SeoServiceCard;
