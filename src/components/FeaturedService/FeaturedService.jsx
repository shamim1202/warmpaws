import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import ServiceCard from "../ServiceCard/ServiceCard";

const FeaturedService = () => {
  const [pets, setPets] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/PetServices.json")
      .then((res) => res.json())
      .then((data) => setPets(data));
  }, []);

  const fourPets = pets.slice(0, 8);

  return (
    <div className="px-6 py-10">
      <h1 className="text-xl md:text-4xl font-bold text-center mb-4 md:mb-10">
        Our Featured Pet Care Services
      </h1>

      {/* 4 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {fourPets.map((service) => (
          <ServiceCard key={service.id} service={service}></ServiceCard>
        ))}
      </div>

      {/* See All Button */}
      <div className="text-center mt-8">
        <button
          onClick={() => navigate("/services")}
          className="btn btn-primary btn-sm md:btn-md transition-all"
        >
          See All Services
        </button>
      </div>
    </div>
  );
};

export default FeaturedService;
