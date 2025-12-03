import { useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router";
import BookService from "../../components/BookService/BookService";
import PageLoader from "../../components/PageLoader/PageLoader";
import { usePageTitle } from "../../hooks/usePageTitle";
import { AuthContext } from "../../providers/AuthProvider";
import { TiArrowLeftThick } from "react-icons/ti";

const PetDetails = () => {
  const { loading } = useContext(AuthContext);
  const pets = useLoaderData();
  const { id } = useParams();
  const [allPets, setAllPets] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const pet = pets.find((item) => item.id === parseInt(id));
    setAllPets(pet);
  }, [id, pets]);

  if (!allPets) {
    return (
      <div className="text-center py-10 text-gray-600 md:text-xl">
        Pets data is not found.
      </div>
    );
  }
  const {
    name,
    type,
    breed,
    image,
    status,
    description,
    price,
    age,
    gender,
    sellerName,
    sellerEmail,
  } = allPets;

  usePageTitle(`${name}`);

  if (loading) return <PageLoader></PageLoader>;

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 mt-2 md:mt-8 bg-sky-50 rounded md:rounded-xl">
      <div className="flex flex-col md:flex-row md:items-start justify-between rounded md:rounded-xl md:gap-5">
        {/* ---- Image ---- */}
        <div className="flex-1 mb-4 md:mb-0">
          <img
            src={image}
            alt={""}
            className="w-full h-52 md:h-96 object-cover rounded md:rounded-xl transition-all duration-500 hover:scale-103"
          />
        </div>

        <div className="flex-1 rounded md:rounded-xl overflow-hidden flex flex-col md:flex-row items-center md:items-start">
          {/* -------------- Details -------------- */}
          <div className="w-full px-4 md:px-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <h2 className="text-xl md:text-3xl font-bold text-secondary">
                {name}
              </h2>
            </div>

            {/* -------- Description --------- */}
            <p className="w-full text-gray-600 text-xs md:text-base leading-relaxed mb-2">
              <span className="text-sm md:text-base">
                <strong>Description :</strong>
              </span>{" "}
              {description}
            </p>

            <div className="mt-4 md:mt-0 space-y-1">
              <div className="flex flex-row justify-between items-start md:items-center gap-1 text-gray-600">
                <span className=" text-sm md:text-base">
                  <strong>Type:</strong> {type}
                </span>
                <span className=" text-sm md:text-base">
                  <strong>Breed:</strong> {breed}
                </span>
              </div>

              <div className="flex flex-row justify-between items-start md:items-center gap-1 text-gray-600">
                <span className=" text-sm md:text-base">
                  <strong>Gender:</strong> {gender}
                </span>
                <span className=" text-sm md:text-base">
                  <strong>Age:</strong> {age}
                </span>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-1 text-gray-600">
                <span className=" text-sm md:text-base">
                  <strong>Seller:</strong> {sellerName}
                </span>
                <span className=" text-sm md:text-base">
                  <strong>Email:</strong> {sellerEmail}
                </span>
              </div>

              {/* -------- Price & Slots ------- */}
              <div className="flex flex-row justify-between items-start md:items-center gap-1 text-gray-600">
                <span className=" text-sm md:text-base">
                  <strong>Price:</strong> ${price}
                </span>
                <span className=" text-sm md:text-base">
                  <strong>Slot Available:</strong> {status}
                </span>
              </div>
            </div>
            <button className="mt-3 md:mt-5 btn btn-primary btn-sm md:btn-md w-full">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetDetails;
