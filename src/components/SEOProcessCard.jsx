const SEOProcessCard = ({ step, isVisible }) => {
  return (
    <div
      className={`bg-violet-50 rounded-2xl p-6 w-full max-w-2xl transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
      <img
        src={step.image}
        alt={step.title}
        className="rounded-xl mb-4 w-full"
      />
      <p className="text-gray-700">{step.description}</p>
    </div>
  );
};

export default SEOProcessCard;
