import { useEffect, useState } from "react";
import Card from "./Card";
import YourStackCards from "./YourStackCards";
import toast from "react-hot-toast";
const ExplorTheTech = () => {
  interface Technology {
    id: string;
    name: string;
    category: string;
    description: string;
    icon: string;
    rating: number;
    difficulty: string;
    badge: string;
  }
  const [data, setData] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedStack, setSelectedStack] = useState<Technology[]>([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("/data.json");
      const data = await response.json();

      setData(data);
      setLoading(false);
    };

    getData();
  }, []);

  const handleAddToStack = (technology: Technology) => {
    const isAlreadyAdded = selectedStack.some(
      (item) => item.id === technology.id,
    );

    if (isAlreadyAdded) {
      return;
    }

    setSelectedStack([...selectedStack, technology]);
    toast.success(`${technology.name} added successfully`);
  };

  const handleRemoveFromStack = (id: string) => {
  const technology = selectedStack.find(
    (item) => item.id === id
  );

  setSelectedStack(
    selectedStack.filter((item) => item.id !== id)
  );

  if (technology) {
    toast.success(`${technology.name} removed successfully`);
  }
};

  const handleRemoveAll = () => {
    setSelectedStack([]);
    toast.success("All technologies removed successfully");
  };

  return (
  <>
    {loading ? (
      <div className="flex justify-center items-center h-100">
        <div className="w-10 h-10 border-4 border-gray-300 border-t-purple-500 rounded-full animate-spin"></div>
      </div>
    ) : (
      <div className="mainContainer max-w-280 m-auto flex flex-col gap-10">
        <div className="heading-sebheading flex flex-col gap-2">
          <h1 className="text-5xl font-bold">
            Explore the{" "}
            <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
              Technologies
            </span>
          </h1>

          <h2 className="font-medium">
            Pick one technology per category to build your ideal stack.
          </h2>
        </div>

        <div className="card-and-yourStack flex gap-10">
          <div className="card-container grid grid-cols-3 gap-6">
            {data.map((item) => {
              return (
                <Card
                  key={item.id}
                  name={item.name}
                  category={item.category}
                  badge={item.badge}
                  rating={item.rating}
                  icon={item.icon}
                  description={item.description}
                  difficulty={item.difficulty}
                  onAdd={() => handleAddToStack(item)}
                />
              );
            })}
          </div>

          <div className="w-200">
            <div className="yourStack-Card-Container bg-[#f8f8f8] rounded py-3 px-2">
              <h2 className="text-3xl font-medium">Your Stack</h2>

              <p className="text-[18px] font-light mt-2 mb-6">
                {selectedStack.length} Technology Selected
              </p>

              {selectedStack.map((item) => {
                return (
                  <YourStackCards
                    key={item.id}
                    icon={item.icon}
                    name={item.name}
                    category={item.category}
                    onRemove={() => handleRemoveFromStack(item.id)}
                  />
                );
              })}

              {selectedStack.length > 0 && (
                <button
                  onClick={handleRemoveAll}
                  className="text-red-500 text-center w-full border border-red-500 px-4 py-2 rounded-lg text-sm font-medium cursor-pointer hover:opacity-80 transition"
                >
                  Remove All
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    )}
  </>
);
};

export default ExplorTheTech;
