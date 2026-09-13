
interface YourStackCardsProps {
  icon: string;
  name: string;
  category: string;
  onRemove: () => void;
}

const YourStackCards = (props: YourStackCardsProps) => {
  return (
    <div className="flex justify-between items-center mb-5 border-[1.5px] px-4 py-3 rounded-xl border-[#b6b6b6]">
      <div className="flex gap-3 items-center">
        <div>
          <img src={props.icon} alt={props.name} className="w-8" />
        </div>

        <div className="leading-5">
          <h2 className="text-[16px] font-medium">{props.name}</h2>

          <h3 className="text-[13px]">{props.category}</h3>
        </div>
      </div>

      <button
        onClick={props.onRemove}
        className="w-8 h-8 flex items-center justify-center rounded-full text-gray-500 hover:bg-red-100 hover:text-red-500 transition cursor-pointer text-xl"
        aria-label={`Remove ${props.name}`}
      >
        ✕
      </button>
    </div>
  );
};

export default YourStackCards;
