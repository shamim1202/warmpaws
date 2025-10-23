import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

const ServiceDetails = () => {
  const services = useLoaderData();
  const { id } = useParams();
  const [allService, setAllService] = useState({});
  console.log(services, id);

  useEffect(() => {
    const service = services.find((item) => item.serviceId === parseInt(id));
    setAllService(service);
  }, [services, id]);

  if (!allService) {
    return (
      <div className="text-center py-10 text-gray-600">Service not found.</div>
    );
  }

  const { serviceName, image, rating, price, description } = allService;

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-10 bg-linear-to-r from-indigo-200 via-purple-200 to-pink-200 rounded md:rounded-xl">
      <div className="flex flex-col items-center justify-center rounded md:rounded-xl">
        {/* ---- Image ---- */}
        <div className="w-full md:w-3/5 md:mb-8">
          <img
            src={image}
            alt={""}
            className="w-full h-64 md:h-96 object-cover rounded md:rounded-xl transition-all duration-500 hover:scale-103"
          />
        </div>

        <div className="w-full bg-base-100 rounded md:rounded-xl overflow-hidden flex flex-col md:flex-row items-center md:items-start">
          {/* ---- Details ---- */}
          <div className="w-full p-4 md:p-8 md:space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              {serviceName}
            </h2>

            <p className="w-full text-gray-600 text-xs md:text-base leading-relaxed">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mt-4">
              <span className="text-blue-600 font-semibold text-lg">
                💰 Price: ${price}
              </span>
              <span className="text-yellow-500 font-medium text-lg">
                ⭐ Rating: {rating}
              </span>
            </div>

            {/* ---- Book Now Button ---- */}
            <button className="btn btn-primary w-full md:w-auto mt-5 transition-all duration-400 hover:scale-102">
              Book This Service
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
