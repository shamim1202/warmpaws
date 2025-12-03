import { useState } from "react";
import toast from "react-hot-toast";

const quizItems = [
  { id: 1, label: "My pet has a warm winter sweater" },
  { id: 2, label: "Paw balm is applied after outdoor walks" },
  { id: 3, label: "Heated bed or warm resting area is available" },
  {
    id: 4,
    label: "My pet’s water bowl is checked regularly to prevent freezing",
  },
  { id: 5, label: "Pet’s coat is brushed regularly to maintain insulation" },
  { id: 6, label: "Outdoor walks are shortened during extreme cold" },
];

const WinterQuiz = () => {
  const [checkedItems, setCheckedItems] = useState([]);

  const toggleItem = (id) => {
    setCheckedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleCheck = () => {
    if (checkedItems.length >= 4) {
      toast.success("Yes - Your pet is fully ready for winter!");
    } else {
      toast.error("Ops -Your pet is not fully ready for winter!");
    }
    setCheckedItems([]);
  };

  return (
    <section className="winter-quiz p-6 md:p-10 bg-sky-50 md:rounded shadow md:shadow-lg hover:shadow-xl transition-all duration-300 max-w-2xl mx-auto mb-10 md:mb-14">
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-center text-primary">
        Is Your Pet Winter-Ready?
      </h2>
      <ul className="mb-2 md:mb-4 space-y-2 text-xs md:text-base">
        {quizItems.map((item) => (
          <li key={item.id}>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={checkedItems.includes(item.id)}
                onChange={() => toggleItem(item.id)}
                className="md:w-5 md:h-5"
              />
              <span>{item.label}</span>
            </label>
          </li>
        ))}
      </ul>

      {/* -- button -- */}
      <div className="text-center mt-4">
        <button
          onClick={handleCheck}
          className="btn btn-primary btn-sm md:btn-md md:px-10"
        >
          Check
        </button>
      </div>
    </section>
  );
};
export default WinterQuiz;
