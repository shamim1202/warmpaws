import { HiOutlineLightBulb } from "react-icons/hi";

const WinterCareTips = () => {
  const tips = [
    {
      id: 1,
      title: "Keep Them Warm",
      desc: "Provide warm bedding and limit outdoor exposure. Small or short-haired pets may need a cozy sweater when going outside.",
    },
    {
      id: 2,
      title: "Protect Their Paws",
      desc: "Salt and ice can harm paws. Use pet-safe paw balm and wipe paws after walks to keep them healthy and clean.",
    },
    {
      id: 3,
      title: "Keep Them Hydrated",
      desc: "Pets can get dehydrated in cold weather too. Make sure their water bowl doesn’t freeze and stays clean.",
    },
    {
      id: 4,
      title: "Healthy Diet",
      desc: "Ensure your pet gets proper nutrition. Some may need extra calories to stay warm—ask your vet for guidance.",
    },
    {
      id: 5,
      title: "Avoid Cold Cars",
      desc: "Never leave pets in cold vehicles. Cars can trap cold air like a refrigerator and quickly become dangerous.",
    },
    {
      id: 6,
      title: "Watch for Frostbite",
      desc: "Look for pale or red skin on ears, paws, or tails. If you suspect frostbite, bring your pet indoors and contact your vet.",
    },
  ];

  return (
    <div className="md:my-10 md:px-6 bg-sky-50">
      <section className="max-w-7xl mx-auto px-4 md:px-0 py-8">
        <h2 className="text-xl md:text-4xl font-bold text-center mb-4 md:mb-6 text-primary">
          Winter Care Tips for Your Pets
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {tips.map((tip) => (
            <div
              key={tip.id}
              className="rounded-xl border border-transparent hover:border-gradient-to-r hover:from-blue-400 hover:via-purple-500 hover:to-teal-400 transition-all duration-300"
            >
              <div className="bg-base-100 rounded md:rounded-xl p-2 md:p-5 shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300 h-42 md:h-36">
                <h3 className="text-sm md:text-xl font-bold mb-2 flex items-center gap-2 text-secondary">
                  <HiOutlineLightBulb className="text-xl text-yellow-600"/>  {tip.title}
                </h3>
                <p className="text-gray-600 text-xs md:text-base">{tip.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs md:text-sm text-gray-500 mt-5 md:mt-8">
          💡 Tip: Always consult your veterinarian for professional advice on
          pet winter care.
        </p>
      </section>
    </div>
  );
};

export default WinterCareTips;
