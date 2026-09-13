interface CardProps {
  name: string;
  category: string;
  badge: string;
  rating: number;
  icon: string;
  description: string;
  difficulty: string;
   onAdd: () => void;
}

const Card = (props: CardProps) => {
  console.log(props.onAdd)

  return (
    <div className="container border border-[#f1f1f1] rounded-2xl px-4 py-3">
      <div className="flex justify-between">
        <img src={props.icon} alt="" className="w-8"/>
        <h2 className="bg-[#595959]  text-white font-light  flex justify-center items-center px-2 rounded-full py-0 text-[14px]">{props.badge}</h2>
      </div>

      <div className="flex flex-col gap-4 mb-5 mt-4">
        <h1 className="text-2xl font-medium">{props.name}</h1> 
        <p className="font-light">{props.description}</p>
        </div>

      <div className="flex justify-between mb-10 text-[13px] font-medium">
        <h3 className="bg-[#475569] rounded text-white py-0.5 px-0.75">{props.category}</h3>
        <h2>{props.difficulty}</h2>
        <h2 className="flex items-center gap-0.5">
            <span className="text-yellow-400 text-[15px]">★</span>{props.rating}</h2>
        </div>

      <button 
      onClick={props.onAdd}
      className="text-center font-medium text-[17px] text-white bg-[#1f1f1f] w-full rounded py-1 cursor-pointer">Add To Stack</button>
    </div>
  );
};

export default Card;
