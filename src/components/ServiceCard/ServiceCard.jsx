import { Link } from "react-router";

const ServiceCard = ({ service }) => {
  const {
    serviceId,
    image,
    serviceName,
    description,
    rating,
    price,
    providerName,
    category,
  } = service;
  return (
    <div className="card bg-base-100 rounded-lg shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300 overflow-hidden">
      {/* Image */}
      <img src={image} alt={serviceName} className="w-full h-56 object-cover" />

      {/* ----------------- Card content ------------------- */}
      <div className="p-3 md:p-6 flex flex-col gap-2 md:gap-4 md:h-full bg-linear-to-r from-sky-50 via-pink-50 to-violet-50 ">
        <div>
          <h3 className="md:text-xl font-semibold mb-2">{serviceName}</h3>

          <span className="p-1.5 md:px-2 md:py-1.5 text-xs md:text-sm rounded bg-green-200 w-auto font-medium">{category}</span>

          <p className="text-gray-600 text-sm md:text-base mt-2">
            {description.split(" ").length > 40
              ? description.split(" ").slice(0, 40).join(" ") + "..."
              : description}
          </p>
        </div>

        <div>
          <p className="text-gray-700 font-semibold text-sm md:text-base">
            Provider: <span className="font-normal">{providerName}</span>
          </p>
        </div>

        <div className="flex items-center justify-between">
          {/* ------------------ Price ------------------*/}
          <p className="text-gray-700 font-semibold text-sm md:text-base">
            Price : ${price}
          </p>

          {/* ------------------- Rating ----------------- */}
          <div className="flex items-center mb-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <span key={index} className={`text-yellow-400`}>
                {index < service.rating ? "★" : "☆"}
              </span>
            ))}
            <span className="ml-2 text-gray-500 text-sm">({rating})</span>
          </div>
        </div>

        {/* ------------ View Details button------------- */}
        <Link
          to={`/service_details/${serviceId}`}
          className="btn btn-primary btn-sm md:btn-md w-full text-center"
        >
          View More
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
