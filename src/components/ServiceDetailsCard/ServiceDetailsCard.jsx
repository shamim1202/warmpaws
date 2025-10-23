
const ServiceDetailsCard = () => {
  return (
    <div>
      {/* ---- Service Card ---- */}
      <div className="bg-base-100 shadow-xl rounded-xl overflow-hidden flex flex-col md:flex-row items-center md:items-start">
        {/* ---- Image ---- */}
        <div className="w-full md:w-1/2">
          <img
            src={'image'}
            alt={''}
            className="w-full h-64 md:h-full object-cover"
          />
        </div>

        {/* ---- Details ---- */}
        <div className="w-full md:w-1/2 p-6 space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            {'serviceName'}
          </h2>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            {'description'}
          </p>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mt-4">
            <span className="text-blue-600 font-semibold text-lg">
              💰 Price: ${'price'}
            </span>
            <span className="text-yellow-500 font-medium text-lg">
              ⭐ Rating: {'rating'}
            </span>
          </div>

          {/* ---- Book Now Button ---- */}
          <button className="btn btn-primary w-full md:w-auto mt-5 transition-all duration-300 hover:scale-105">
            Book This Service
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsCard;
