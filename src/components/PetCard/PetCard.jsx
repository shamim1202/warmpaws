import { Link } from "react-router";

const PetCard = ({ pet }) => {
  const { id, name, type, breed, image, status, description } = pet;
  return (
    <div className="card bg-base-100 rounded-lg shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300 overflow-hidden">
      {/* ---------------------- Image -----------------------*/}
      <img src={image} alt={name} className="w-full h-40 object-cover" />

      {/* ------------------- Card content ------------------- */}
      <div className="p-2 md:p-4 flex flex-col gap-2 md:gap-3  bg-linear-to-r from-sky-50 via-pink-50 to-violet-50">
        <div className="md:h-32">
          <h3 className="md:text-xl font-semibold mb-2 text-secondary">{name}</h3>

          <span className="p-1.5 md:px-2 md:py-1.5 text-xs md:text-sm rounded bg-green-200 w-auto">
            {status}
          </span>

          <p className="text-gray-600 text-sm md:text-base mt-2">
            {description.split(" ").length > 10
              ? description.split(" ").slice(0, 10).join(" ") + "..."
              : description}
          </p>
        </div>

        <div>
          <p className="text-gray-700 font-semibold text-sm md:text-base">
            Type: <span className="font-normal">{type}</span>
          </p>

          <p className="text-gray-700 font-semibold text-sm md:text-base">
            Breed: <span className="font-normal">{breed}</span>
          </p>
        </div>

        {/* ------------ View Details button------------- */}
        <Link
          to={`/pet_details/${id}`}
          className="btn btn-primary btn-sm md:btn-md w-full text-center"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default PetCard;
