const FeatureCard = ({ icon, title, description, color }) => {
  return (
    <div
      className={`feature-card opacity-0 translate-y-5 bg-[#F2F2F2] rounded-md p-6 flex flex-col items-start shadow-sm transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg cursor-pointer`}
    >
      <div
        className={`w-15 h-15 rounded-sm flex items-center justify-center text-white text-xl mb-4 ${color}`}
      >
        <img src={icon} alt={title} className="w-8 h-8 invert" />
      </div>
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default FeatureCard;
