import { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import SeoServicesCarousel from "./SeoServicesCarousel";
import SeoPromoCard from "./SeoPromoCard";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const locations = [
  { name: "Downtown Dubai", coords: [25.1972, 55.2744] },
  { name: "Dubai Marina", coords: [25.08, 55.1403], color: "red" },
  { name: "Business Bay", coords: [25.1851, 55.2637] },
  { name: "Al Quoz & Dubai Silicon Oasis", coords: [25.1264, 55.3773] },
  { name: "Jumeirah & JBR", coords: [25.0805, 55.1372] },
];

const ServiceAreasMapLeaflet = () => {
  const [isInView, setIsInView] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);
  const [descriptionVisible, setDescriptionVisible] = useState(false);
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  const [mapVisible, setMapVisible] = useState(false);
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
      // Staggered animation sequence
      setTimeout(() => setTitleVisible(true), 200);
      setTimeout(() => setDescriptionVisible(true), 400);
      setTimeout(() => setSubtitleVisible(true), 600);
      setTimeout(() => setMapVisible(true), 800);
    }
  }, [isInView]);

  return (
    <>
      <div ref={sectionRef} className="bg-white p-6 max-w-6xl mx-auto">
        <div className="text-center mb-6">
          <h2
            className={`text-3xl font-bold text-gray-900 transition-all duration-700 ease-out ${
              titleVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Serving Businesses Across Dubai
          </h2>
          <p
            className={`mt-3 text-gray-600 max-w-3xl mx-auto text-sm transition-all duration-700 ease-out ${
              descriptionVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            As a leading SEO company in Dubai, we understand the unique digital
            landscape of the city's diverse business hubs. Whether you're a
            luxury retailer in Downtown Dubai, a tech startup in Business Bay,
            or a restaurant in Dubai Marina, our Dubai-focused SEO strategies
            ensure you stand out in local search results.
          </p>
        </div>

        <div
          className={`text-xl font-semibold text-center mb-4 transition-all duration-700 ease-out ${
            subtitleVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          Our Key Service Areas in Dubai
        </div>

        <div
          className={`transition-all duration-700 ease-out ${
            mapVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-12 scale-95"
          }`}
        >
          <MapContainer
            center={[25.2048, 55.2708]}
            zoom={11}
            scrollWheelZoom={false}
            className="h-[500px] w-full rounded-md"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {locations.map((location) => (
              <Marker key={location.name} position={location.coords}>
                <Popup>{location.name}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
      <SeoServicesCarousel />
      <SeoPromoCard />
    </>
  );
};

export default ServiceAreasMapLeaflet;
