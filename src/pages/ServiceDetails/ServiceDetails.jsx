import { useContext, useEffect, useState } from "react";
import { TiArrowLeftThick } from "react-icons/ti";
import { useLoaderData, useNavigate, useParams } from "react-router";
import BookService from "../../components/BookService/BookService";
import PageLoader from "../../components/PageLoader/PageLoader";
import { usePageTitle } from "../../hooks/usePageTitle";
import { AuthContext } from "../../providers/AuthProvider";

const ServiceDetails = () => {
  const { loading } = useContext(AuthContext);
  const services = useLoaderData();
  const { id } = useParams();
  const [allService, setAllService] = useState({});
  const navigate = useNavigate();


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

  usePageTitle(`${serviceName}`);

  if (loading) return <PageLoader></PageLoader>;

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-10 mt-2 md:mt-8 bg-linear-to-r from-purple-100 via-green-100 to-rose-100 rounded md:rounded-xl">
      <div className="flex flex-col md:flex-row items-center justify-between rounded md:rounded-xl">
        {/* ---- Image ---- */}
        <div className="flex-1 md:w-3/5 md:mb-8">
          <img
            src={image}
            alt={""}
            className="w-full h-64 md:h-96 object-cover rounded md:rounded-xl transition-all duration-500 hover:scale-103"
          />
        </div>

        <div className="flex-1 rounded md:rounded-xl overflow-hidden flex flex-col md:flex-row items-center md:items-start">
          {/* -------------- Details -------------- */}
          <div className="w-full p-4 md:p-8 md:space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <h2 className="text-xl md:text-3xl font-bold text-gray-800">
                {serviceName}
              </h2>
            </div>

            <div className="flex flex-row justify-between items-start md:items-center gap-1 mt-4 text-blue-600 md:mb-2">
              <span className="font-medium md:font-semibold text-sm md:text-lg">
                Category: {category}
              </span>
              <span className="font-medium md:font-semibold text-sm md:text-lg">
                Rating: {rating}
              </span>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-1 mt-2 md:mt-4 text-blue-600 mb-2">
              <span className="font-medium md:font-semibold text-sm md:text-lg">
                Provider: {providerName}
              </span>
              <span className="font-medium md:font-semibold text-sm md:text-lg">
                Email: {providerEmail}
              </span>
            </div>

            {/* -------- Description --------- */}
            <p className="w-full text-gray-600 text-xs md:text-base leading-relaxed">
              <span className="font-medium md:font-semibold text-sm md:text-lg">
                Description :
              </span>{" "}
              {description}
            </p>

            {/* -------- Price & Slots ------- */}
            <div className="flex flex-row justify-between items-start md:items-center gap-1 mt-4 text-blue-600">
              <span className="font-medium md:font-semibold text-sm md:text-lg">
                Price: ${price}
              </span>
              <span className="font-medium md:font-semibold text-sm md:text-lg">
                Slot Available: {slotsAvailable}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-fit md:mx-auto mx-10 my-4 md:my-8 border-t-2 md:border-t-4 border-amber-200">
        <BookService></BookService>
      </div>
    </div>
  );
};

export default ServiceDetails;
