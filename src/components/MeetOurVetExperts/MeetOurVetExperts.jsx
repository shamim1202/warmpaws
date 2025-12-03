const MeetOurVetExperts = () => {
  // ---------> Vetnoneries Experts Data
  const vets = [
    {
      id: 1,
      name: "Dr. Emily Johnson",
      specialty: "Veterinary Surgeon",
      image: "https://i.ibb.co.com/tTyfWsx6/Dr-Emily-Johnson.jpg",
      experience: 8,
      qualifications: "DVM, Veterinary Dental Practitioner Certification",
    },
    {
      id: 2,
      name: "Dr. Anna Brooks",
      specialty: "Exotic Animal & Wildlife Veterinarian",
      image: "https://i.ibb.co.com/hF96sPkx/Dr-Michael-Smith.jpg",
      experience: 4,
      qualifications: "DVM, Certified in Wildlife Rehabilitation",
    },
    {
      id: 3,
      name: "Dr. Priya Das",
      specialty: "Pet Physiotherapy & Rehabilitation",
      image: "https://i.ibb.co.com/LhhNzPsL/Dr-Sarah-Lee.jpg",
      experience: 6,
      qualifications:
        "DVM, Certified Canine Rehabilitation Practitioner (CCRP)",
    },
    {
      name: "Dr. Lucas Ramirez",
      specialty: "Emergency & Critical-Care Veterinarian",
      image: "https://i.ibb.co.com/LhhNzPsL/Dr-Sarah-Lee.jpg",
      experience: 12,
      qualifications:
        "DVM, ACVECC (American College of Veterinary Emergency & Critical Care)",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 my-4 md:my-12 py-4 md:py-10 bg-sky-50">
      <h2 className="text-xl md:text-4xl font-bold mb-4 md:mb-10 text-center">
        Meet Our Expert Vets
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
        {vets.map((vet) => (
          <div
            key={vet.id}
            className="bg-linear-to-r from-sky-50 via-pink-50 to-violet-50 rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:scale-[1.03] transition-all duration-300 text-center"
          >
            {/* Vet Image */}
            <img
              src={vet.image}
              alt={vet.name}
              className="w-16 h-16 md:w-24 md:h-24 mx-auto mt-2 md:mt-5 rounded-full object-cover border-4 border-white shadow-md"
            />

            {/* Name & Specialty */}
            <div className="py-3 md:py-5">
              <h3 className="text-sm md:text-xl font-bold mb-1">{vet.name}</h3>
              <div className="space-y-2">
                <p className="text-gray-800 text-xs md:text-base font-medium">
                  Experience: {vet.experience} years
                </p>
                <p className="text-gray-500 text-xs md:text-sm font-medium">
                  Position: <span className="font-light">{vet.specialty}</span>
                </p>
                <p className="text-gray-500 text-xs md:text-sm font-medium">
                  Qualification:{" "}
                  <span className="font-light">{vet.qualifications}</span>
                </p>
              </div>
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
