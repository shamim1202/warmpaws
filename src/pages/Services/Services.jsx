import { useLoaderData } from "react-router";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import { usePageTitle } from "../../hooks/usePageTitle";

const Services = () => {
  const services = useLoaderData();
  
  usePageTitle("Services")

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-0 my-10 md:my-20">
      <h2 className="text-xl md:text-4xl font-bold text-center mb-4 md:mb-10 text-primary">
        All Pet Care Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {services.map((service) => (
          <ServiceCard key={service.serviceId} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
