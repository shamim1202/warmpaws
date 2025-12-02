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
      <div className="flex flex-col md:flex-row items-start justify-between rounded md:rounded-xl">
        {/* ---- Image ---- */}
        <div className="flex-1 md:mb-8">
          <img
            src={image}
            alt={""}
            className="w-full h-64 md:h-96 object-cover rounded md:rounded-xl transition-all duration-500 hover:scale-103"
          />
        </div>

        <div className="flex-1 rounded md:rounded-xl overflow-hidden flex flex-col md:flex-row items-center md:items-start">
          {/* -------------- Details -------------- */}
          <div className="w-full p-4 md:p-6 md:space-y-2">
            {/* ---- Back Button ---- */}
            {/* <button
              onClick={() => navigate(-1)}
              className="text-blue-500 hover:text-blue-700 transition-colors flex items-center gap-2 btn btn-outline btn-sm md:btn-md w-full md:w-auto mt-2.5"
            >
              <TiArrowLeftThick /> Back
            </button> */}

            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <h2 className="text-xl md:text-3xl font-bold text-gray-800">
                {name}
              </h2>
            </div>

            {/* -------- Description --------- */}
            <p className="w-full text-gray-600 text-xs md:text-base leading-relaxed">
              <span className="font-medium md:font-semibold text-sm md:text-base">
                Description :
              </span>{" "}
              {description}
            </p>

            <div className="mt-4 md:mt-0 md:space-y-1">
              <div className="flex flex-row justify-between items-start md:items-center gap-1 text-gray-800">
                <span className="font-medium md:font-semibold text-sm md:text-base">
                  Type: {type}
                </span>
                <span className="font-medium md:font-semibold text-sm md:text-base">
                  Breed: {breed}
                </span>
              </div>

              <div className="flex flex-row justify-between items-start md:items-center gap-1 text-gray-800">
                <span className="font-medium md:font-semibold text-sm md:text-base">
                  Gender: {gender}
                </span>
                <span className="font-medium md:font-semibold text-sm md:text-base">
                  Age: {age}
                </span>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-1 text-gray-800">
                <span className="font-medium md:font-semibold text-sm md:text-base">
                  Seller: {sellerName}
                </span>
                <span className="font-medium md:font-semibold text-sm md:text-base">
                  Email: {sellerEmail}
                </span>
              </div>

              {/* -------- Price & Slots ------- */}
              <div className="flex flex-row justify-between items-start md:items-center gap-1 text-gray-800">
                <span className="font-medium md:font-semibold text-sm md:text-base">
                  Price: ${price}
                </span>
                <span className="font-medium md:font-semibold text-sm md:text-base">
                  Slot Available: {status}
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* <BookService></BookService> */}
      </div>
    </div>
  );
};

export default PetDetails;
