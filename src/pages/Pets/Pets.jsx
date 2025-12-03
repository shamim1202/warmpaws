import { useLoaderData } from "react-router";
import { usePageTitle } from "../../hooks/usePageTitle";
import PetCard from "../../components/PetCard/PetCard";

const Pets = () => {
  const pets = useLoaderData();
  usePageTitle("All Available Pets");

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-0 my-10 md:my-20">
      <h2 className="text-xl md:text-4xl font-bold text-center mb-4 md:mb-10 text-primary">
        Available Pets
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-x-6 md:gap-y-10">
        {pets.map((pet) => (
          <PetCard key={pet.id} pet={pet}></PetCard>
        ))}
      </div>
    </div>
  );
};

export default Pets;
