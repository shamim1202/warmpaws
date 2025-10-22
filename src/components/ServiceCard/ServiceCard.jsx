import { Link } from "react-router";

const ServiceCard = ({ data }) => {
  const { serviceId, image, serviceName, rating, price } = data;
  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition rounded-lg overflow-hidden">
      {/* Image */}
      <img src={image} alt={serviceName} className="w-full h-56 object-cover" />

      {/* Card content */}
      <div className="p-3 md:p-6 flex flex-col gap-3 md:gap-5 h-full">
        <div>
          <h3 className="text-lg font-semibold mb-2">{serviceName}</h3>

          {/* Rating */}
          <div className="flex items-center mb-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <span key={index} className={`text-yellow-400`}>
                {index < data.rating ? "★" : "☆"}
              </span>
            ))}
            <span className="ml-2 text-gray-500 text-sm">({rating})</span>
          </div>

          {/* Price */}
          <p className="text-gray-700 font-semibold">${price}</p>
        </div>

        {/* View Details button */}
        <Link
          to={`/service_details/${serviceId}`}
          className="btn btn-primary w-full text-center"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
