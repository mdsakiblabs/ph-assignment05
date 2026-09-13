import { useEffect,useState } from "react"
import Card from "./Card";
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
   
    
   
    useEffect(() => {
    const getData = async () => {
      const response = await fetch("/data.json");
      const data = await response.json();

      setData(data);
    };

    getData();
  }, []);

  console.log(data)
  return (  
   <>
   <div className="mainContainer max-w-280 m-auto flex flex-col gap-10">
    <div className="heading-sebheading flex flex-col gap-2">
        <h1 className="text-5xl font-bold">Explore the <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent "> Technologies</span></h1>
        <h2 className="font-medium">Pick one technology per category to build your ideal stack.</h2>
    </div>
    <div className="card-and-yourStack flex gap-10">
        <div className="card-container grid grid-cols-3 gap-6">
            {data.map((item)=>{
                return (
                    <Card name={item.name} category={item.category} badge={item.badge} rating={item.rating} icon={item.icon} description={item.description} difficulty={item.difficulty}/>
                )
            })}
        </div>
        <div className="yourStack-Container">

        </div>
    </div>

   </div>
   </>
  )
}

export default ExplorTheTech
