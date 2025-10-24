const MeetOurVetExperts = () => {
  // ---------> Vetnoneries Experts Data

  const vets = [
    {
      id: 1,
      name: "Dr. Emily Johnson",
      specialty: "Veterinary Surgeon",
      image: "https://i.ibb.co.com/tTyfWsx6/Dr-Emily-Johnson.jpg",
    },
    {
      id: 2,
      name: "Dr. Michael Smith",
      specialty: "Animal Nutritionist",
      image: "https://i.ibb.co.com/hF96sPkx/Dr-Michael-Smith.jpg",
    },
    {
      id: 3,
      name: "Dr. Sarah Lee",
      specialty: "Behavioral Veterinarian",
      image: "https://i.ibb.co.com/LhhNzPsL/Dr-Sarah-Lee.jpg",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 my-4 md:my-12 py-4 md:py-10 bg-linear-to-r from-sky-100 via-pink-100 to-violet-100">
      <h2 className="text-xl md:text-4xl font-bold text-center mb-4 md:mb-10">
        Meet Our Expert Vets 🩺
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
        {vets.map((vet) => (
          <div
            key={vet.id}
            className="bg-linear-to-r from-sky-50 via-pink-50 to-violet-50 rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:scale-[1.03] transition-all duration-300 text-center"
          >
            {/* Vet Image */}
            <img
              src={vet.image}
              alt={vet.name}
              className="w-24 h-24 md:w-40 md:h-40 mx-auto mt-2 md:mt-5 rounded-full object-cover border-4 border-white shadow-md"
            />

            {/* Name & Specialty */}
            <div className="py-3 md:py-5">
              <h3 className="md:text-xl font-bold mb-1">{vet.name}</h3>
              <p className="text-gray-600 text-sm md:text-base font-medium">
                {vet.specialty}
              </p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-xs md:text-sm text-gray-500 mt-5 md:mt-8">
        🩺 Our team of dedicated veterinarians ensures the best care for your
        pets.
      </p>
    </section>
  );
};

export default MeetOurVetExperts;
