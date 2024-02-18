import { FaHive , FaMusic} from "react-icons/fa";
import axn from '../../assets/img/axn2.png'
import recentlaptop from '../../assets/img/laptop.jpg'
import amazon from '../../assets/img/amazon.png'
import slack from '../../assets/img/slack.png'
import tube from '../../assets/img/u tube.png'
import google from '../../assets/img/google.png'
import lenovo from '../../assets/img/lenovo.png'


const UpEvents = () => {
    return (
        <div>
            <div className="md:flex justify-between mt-20">      
            <div className="">
                <h1 className="text-4xl font-bold">Upcoming Events</h1>
                <p className="mt-4">Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh <br /> ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut <br /> posuere felis arcu tellus tempus in in ultricies. Gravida id nibh <br /> ornare viverra. Ultrices faucibus neque velit risus ac id lorem.</p>
                <div className="bg-[#fff9ee] mt-10 p-5 rounded-md">
                    <div className="flex mb-5 gap-4">
                        <FaHive size={30} color="red" />
                        <div>
                            <h1 className="text-xl font-semibold">Golf Clubbers Annual Agenda</h1>
                            <p>Etiam sed vulputate nisl, eu elementum arcu. Vivamus <br /> dignissim tortor in tellus dictum pellentesque. </p>
                        </div>
                    </div>
                    <hr />
                    <div className="flex gap-4 mt-5">
                        <FaMusic color="blue" size={30} />
                        <div>
                            <h1 className="text-xl font-semibold">Music Events at LA</h1>
                            <p>Etiam sed vulputate nisl, eu elementum arcu. Vivamus <br /> dignissim tortor in tellus dictum pellentesque. </p>
                        </div>
                    </div>
                   
                </div>
        </div>       
         <div className="flex items-center">            
            <img className="rounded-md" src={recentlaptop} alt="" />        
         </div>
       </div>
       <div className="mt-14">
        <h1 className="text-lg text-center font-semibold">We have 23k+ Satisfied & Trusted Customers</h1>
        <div className="md:flex justify-center items-center gap-20 mt-5">
            <img className="w-[100px]" src={axn} alt="" />
            <img className="w-[100px]" src={lenovo} alt="" />
            <img className="w-[100px]" src={amazon} alt="" />
            <img className="w-[100px]" src={slack} alt="" />
            <img className="w-[100px]" src={tube} alt="" />
            <img className="w-[70px] h-[40px]" src={google} alt="" />
        </div>
       </div>
        </div>
    );
};

export default UpEvents;