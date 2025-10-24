import { useLoaderData } from "react-router";
import ServiceCard from "../../components/ServiceCard/ServiceCard";

const Services = () => {
  const services = useLoaderData();

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-0 md:mt-10">
      <h2 className="text-xl md:text-4xl font-bold text-center mb-4 md:mb-6">
        Our Trusted Pet Care Services 🐾
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {services.map((service) => (
          <ServiceCard key={service.serviceId} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
