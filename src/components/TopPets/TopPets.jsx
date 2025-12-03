import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import PetCard from "../PetCard/PetCard";

const TopPets = () => {
  const [pets, setPets] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/Pets.json")
      .then((res) => res.json())
      .then((data) => setPets(data));
  }, []);

  const fourPets = pets.slice(0, 4);

  return (
    <div className="px-6 py-10 md:px-0 md:mb-10">
      <h1 className="text-xl md:text-4xl font-bold text-center mb-4 md:mb-10">Our Featured Pets</h1>

      {/* 4 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-6 md:gap-x-6 md:gap-y-10">
        {fourPets.map((pet) => (
          <PetCard key={pet.id} pet={pet}></PetCard>
        ))}
      </div>

      {/* See All Button */}
      <div className="text-center mt-4 md:mt-8">
        <button
          onClick={() => navigate("/pets")}
          className="btn btn-primary btn-sm md:btn-md transition-all"
        >
          See All Pets
        </button>
      </div>
    </div>
  );
};

export default TopPets;
