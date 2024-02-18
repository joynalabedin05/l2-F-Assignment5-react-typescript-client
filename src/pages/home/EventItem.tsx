import serviceImg from '../../assets/img/event3.png'
import { useQuery } from "react-query";


const EventItem = () => {

    const { data: events = [], isLoading } = useQuery({
      queryKey:  ['events'], 
       queryFn: async()=>{
        return await fetch('https://assignment5-frontend-server.vercel.app/events')
        .then(res=>res.json())
       }
    });

    if(isLoading){
        return <p>Loading....</p>
    }

    console.log(events);
    return (
        <div>
            <div className="text-center mt-16">
                <h1 className="text-4xl font-bold">Event Items</h1>
                <p className="mt-3">Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices <br /> faucibus neque velit risus ac id lorem.</p>
            </div>
           
            <div className="grid md:grid-cols-12 gap-5 mt-10">              
                <div className='col-span-8 grid md:grid-cols-2 gap-5'>
                    {
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        events.slice(0,4).map((event: any)=>
                        <div key={event._id} className="pb-12 p-3 bg-gray-100 rounded">
                        <img className='w-full h-full rounded' src={event.image} alt="" />
                        <p className='mt-3'>{event.name}</p>
                    </div>)
                    }                             
                </div>              
                <div className="col-span-4 bg-gray-100 rounded pb-12 p-3">
                    <img className='w-full h-full rounded mb-3' src={serviceImg} alt="" />
                    <p>name</p>
                </div>
            </div>
            
        </div>
    );
};

export default EventItem;