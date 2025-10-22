import { Link } from "react-router";

const PopularServices = ({ services }) => {
  const data = services;
  console.log(data);

  // Sort by rating and pick top 3
  const topServices = [...data].sort((a, b) => b.rating - a.rating).slice(0, 3);
  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 md:px-0 py-10">
        <h2 className="text-xl md:text-4xl font-bold text-center mb-8">
          Discover Our Popular Pet Services ⭐
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {topServices.map((service) => (
            <div
              key={service.serviceId}
              className="bg-base-100 rounded-xl border border-base-200 shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300 overflow-hidden"
            >
              <img
                src={service.image}
                alt={service.serviceName}
                className="w-full h-48 object-cover"
              />

              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2">
                  {service.serviceName}
                </h3>

                <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                  <p>⭐ {service.rating}</p>
                  <p className="font-semibold">${service.price}</p>
                </div>

                <Link
                  to={`/service_details/${service.serviceId}`}
                  className="inline-block mt-2 px-4 py-2 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-lg transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PopularServices;
