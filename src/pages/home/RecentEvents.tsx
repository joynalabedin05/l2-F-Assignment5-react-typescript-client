// import recent1 from '../../assets/img/recent1.png'
// import recent2 from '../../assets/img/recent2.png'
// import recent3 from '../../assets/img/recent3.png'
// import recent4 from '../../assets/img/recent4.png'
// import recent5 from '../../assets/img/recent5.png'
// import recent6 from '../../assets/img/recent6.png'
import { useQuery } from "react-query";

const RecentEvents = () => {

    const { data: recentEvents = [], isLoading } = useQuery({
        queryKey:  ['recentEvents'], 
         queryFn: async()=>{
          return await fetch('https://assignment5-frontend-server.vercel.app/recent-event')
          .then(res=>res.json())
         }
      });
  
      if(isLoading){
          return <p>Loading....</p>
      }
  
      console.log(recentEvents);
    return (
        <div className="grid md:grid-cols-2 mt-28">
           <div className='flex items-center'>
           <div className="">
                <h1 className="text-4xl font-bold">Recent Events</h1>
                <p className="mt-4">Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh <br /> ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut <br /> posuere felis arcu tellus tempus in in ultricies. Gravida id nibh <br /> ornare viverra. Ultrices faucibus neque velit risus ac id lorem.</p>
                <button className="bg-blue-500 px-10 py-1 text-white mt-10">Learn More</button>
            </div>
           </div>
            <div className="grid md:grid-cols-3 gap-5 ">
                {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    recentEvents.slice(0,6).map((recentEvent: any)=>
                    <div key={recentEvent._id} className="mt-5">
                    <img className='rounded w-full h-[150px]' src={recentEvent.image} alt="" />
                </div>)
                }
                
                
            </div>
        </div>
    );
};

export default RecentEvents;