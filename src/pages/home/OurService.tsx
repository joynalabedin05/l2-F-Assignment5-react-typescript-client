import serviceImg from '../../assets/img/event3.png'
import { FaCheck  } from 'react-icons/fa';
import Aos from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';


const OurService = () => {
    useEffect(()=>{
        Aos.init({duration: 2000});
    })
    return (
        <div>
            <div className="text-center mt-10">
                <h1 className="text-4xl font-bold">Our Services</h1>
                <p className="mt-3">Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices <br /> faucibus neque velit risus ac id lorem.</p> 
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5'>
                <div data-aos="fade-left" className="bg-gray-100 hover:bg-gray-200 rounded-md p-5">
                    <img className='w-full h-[250px]' src={serviceImg} alt="" />
                    <h1 className='my-5 text-xl font-semibold'>Corporate Event</h1>
                    <ul className=''>
                        <li className='flex items-center gap-3'> <span className='bg-gray-100 rounded-full p-1'><FaCheck size={10} color='blue'/></span> <span>One day pas access all lecture</span></li>
                        <li className='flex items-center gap-3'> <span className='bg-gray-100 rounded-full p-1'><FaCheck size={10} color='blue'/></span> <span>Lunch and Snack</span></li>
                        <li className='flex items-center gap-3'> <span className='bg-gray-100 rounded-full p-1'><FaCheck size={10} color='blue'/></span> <span>Meet event speaker</span></li>
                        <li className='flex items-center gap-3'> <span className='bg-gray-100 rounded-full p-1'><FaCheck size={10} color='blue'/></span> <span>Front seat</span></li>
                        <li className='flex items-center gap-3'> <span className='bg-gray-100 rounded-full p-1'><FaCheck size={10} color='blue'/></span> <span>One day pas access all lecture</span></li>
                        
                    </ul>
                   
                </div>
                <div data-aos="fade-down"  className="bg-gray-100 hover:bg-gray-200 rounded-md p-5">
                    <h1 className='mb-3 text-xl font-semibold'>Wedding Event</h1>
                    <p>Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut posuere felis arcu tellus tempus in in ultricies.Ut posuere felis arcu tellus tempus in in ultricies.</p>
                    <ul className='mt-4'>
                        <li className='flex items-center gap-3'> <span className='bg-gray-100 rounded-full p-1'><FaCheck size={10} color='blue'/></span> <span>One day pas access all lecture</span></li>
                        <li className='flex items-center gap-3'> <span className='bg-gray-100 rounded-full p-1'><FaCheck size={10} color='blue'/></span> <span>Lunch and Snack</span></li>
                        <li className='flex items-center gap-3'> <span className='bg-gray-100 rounded-full p-1'><FaCheck size={10} color='blue'/></span> <span>Meet event speaker</span></li>
                        <li className='flex items-center gap-3'> <span className='bg-gray-100 rounded-full p-1'><FaCheck size={10} color='blue'/></span> <span>Front seat</span></li>
                        <li className='flex items-center gap-3'> <span className='bg-gray-100 rounded-full p-1'><FaCheck size={10} color='blue'/></span> <span>One day pas access all lecture</span></li>
                        
                    </ul>
                    <button className="bg-blue-500 px-20 py-2 text-white mt-20">Cheeck it out</button>
                </div>
                <div data-aos="fade-right" className="bg-gray-100 hover:bg-gray-200 rounded-md p-5">
                    <img className='w-full h-[250px]' src={serviceImg} alt="" />
                    <h1 className='my-5 text-xl font-semibold'>Organization Event</h1>
                    <ul className=''>
                        <li className='flex items-center gap-3'> <span className='bg-gray-100 rounded-full p-1'><FaCheck size={10} color='blue'/></span> <span>One day pas access all lecture</span></li>
                        <li className='flex items-center gap-3'> <span className='bg-gray-100 rounded-full p-1'><FaCheck size={10} color='blue'/></span> <span>Lunch and Snack</span></li>
                        <li className='flex items-center gap-3'> <span className='bg-gray-100 rounded-full p-1'><FaCheck size={10} color='blue'/></span> <span>Meet event speaker</span></li>
                        <li className='flex items-center gap-3'> <span className='bg-gray-100 rounded-full p-1'><FaCheck size={10} color='blue'/></span> <span>Front seat</span></li>
                        <li className='flex items-center gap-3'> <span className='bg-gray-100 rounded-full p-1'><FaCheck size={10} color='blue'/></span> <span>One day pas access all lecture</span></li>
                        
                    </ul>
                   
                </div>
            </div>
        </div>
    );
};

export default OurService;