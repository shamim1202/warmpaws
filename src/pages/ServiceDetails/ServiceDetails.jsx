import { useEffect, useState } from "react";
import { TiArrowLeftThick } from "react-icons/ti";
import { useLoaderData, useNavigate, useParams } from "react-router";
import BookService from "../../components/BookService/BookService";

const ServiceDetails = () => {
  const services = useLoaderData();
  const { id } = useParams();
  const [allService, setAllService] = useState({});
  const navigate = useNavigate();
  console.log(services, id);

  useEffect(() => {
    const service = services.find((item) => item.serviceId === parseInt(id));
    setAllService(service);
  }, [services, id]);

  if (!allService) {
    return (
      <div className="text-center py-10 text-gray-600 md:text-xl">
        Service not found.
      </div>
    );
  }

  const {
    serviceName,
    image,
    rating,
    price,
    description,
    providerName,
    providerEmail,
    slotsAvailable,
    category,
  } = allService;

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

        <div className="w-full rounded md:rounded-xl overflow-hidden flex flex-col md:flex-row items-center md:items-start">
          {/* -------------- Details -------------- */}
          <div className="w-full p-4 md:p-8 md:space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <h2 className="text-xl md:text-3xl font-bold text-gray-800">
                {serviceName}
              </h2>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-1 mt-4 text-blue-600 mb-2">
              <span className="flex items-center gap-2 font-semibold text-sm md:text-lg">
                Category: {category}
              </span>
              <span className="font-semibold text-sm md:text-lg mt-2 md:mt-0">
                Rating: {rating}
              </span>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-1 mt-4 text-blue-600 mb-2">
              <span className="flex items-center gap-2 font-semibold text-sm md:text-lg">
                Provider: {providerName}
              </span>
              <span className="text-sm md:text-lg font-semibold">
                Email: {providerEmail}
              </span>
            </div>

            {/* -------- Description --------- */}
            <p className="w-full text-gray-600 text-xs md:text-base leading-relaxed">
              <span className="font-semibold text-sm md:text-lg">
                Description :
              </span>{" "}
              {description}
            </p>

            {/* -------- Price & Slots ------- */}
            <div className="flex flex-row justify-between items-start md:items-center gap-1 mt-4 text-blue-600">
              <span className="flex items-center gap-2 font-semibold text-sm md:text-lg">
                Price: ${price}
              </span>
              <span className="text-sm md:text-lg font-semibold">
                Slot Available: {slotsAvailable}
              </span>
            </div>

            {/* -------- Back & Book button ------- */}
            <div className="flex flex-col-reverse md:flex-row gap-3 items-center justify-between mt-3 md:m-0">
              {/* ---- Back Button ---- */}
              <button
                onClick={() => navigate(-1)}
                className="text-blue-500 hover:text-blue-700 transition-colors flex items-center gap-2 btn btn-outline w-full md:w-auto"
              >
                <TiArrowLeftThick /> Back
              </button>

              {/* ---- Book Now Button ---- */}
              <button className="btn btn-primary w-full md:w-auto transition-all duration-400 hover:scale-101">
                Book Service
              </button>
            </div>
          </div>
        </div>
        <BookService></BookService>
      </div>
    </div>
  );
};

export default ServiceDetails;
