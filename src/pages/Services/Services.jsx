import { useEffect, useState } from "react";
import ServiceCard from "../../components/ServiceCard/ServiceCard";

const Services = () => {
  const [service, setService] = useState([]);

  useEffect(() => {
    fetch("/PetServices.json")
      .then((res) => res.json())
      .then((data) => {
        setService(data);
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-0">
      <h1>service : </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {service.map((data) => (
          <ServiceCard key={data.serviceId} data={data}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
