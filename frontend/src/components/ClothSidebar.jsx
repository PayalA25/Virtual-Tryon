import clothes from "../data/clothes";

function ClothSidebar({ selectedCloth, setSelectedCloth }) {
  return (
    <aside className="w-64 bg-white/80 backdrop-blur-md shadow-xl p-4 overflow-y-auto">
      <h2 className="text-lg font-semibold mb-4 text-gray-700">
        Choose Outfit
      </h2>

      <div className="grid grid-cols-1 gap-4">
        {clothes.map((cloth, index) => (
          <img
            key={index}
            src={cloth}
            alt="cloth"
            onClick={() => setSelectedCloth(cloth)}
            className={`cursor-pointer rounded-xl border-2 transition transform hover:scale-105 ${
              selectedCloth === cloth
                ? "border-indigo-500 shadow-xl"
                : "border-gray-200"
            }`}
          />
        ))}
      </div>
    </aside>
  );
}

export default ClothSidebar;
