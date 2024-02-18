import man3 from '../../assets/img/man3.jpg'
import amazon from '../../assets/img/amazon.png'
import tube from '../../assets/img/u tube.png'
import google from '../../assets/img/google.png'


import { FaArrowCircleLeft , FaArrowCircleRight} from "react-icons/fa";
const WhatClientSay = () => {
    return (
        <div className="mt-14">
            <div className="md:flex justify-between">
                <div>
                    <h1 className="text-4xl font-bold">What Client Say</h1>
                    <p className="mt-4">Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh <br /> ornare viverra.</p>
                </div>
                <div className="flex gap-5">
                    <button><FaArrowCircleLeft color="gray" size={20} /></button>
                    <button><FaArrowCircleRight color="blue" size={20} /></button>
                </div>
            </div>
            <div className="grid md:grid-cols-3 mt-10 gap-5">
                <div className="bg-[#fff9ee] p-10 rounded-lg ">
                    <div className="flex gap-5">
                        <img className='w-10 rounded-full' src={man3} alt="" />
                        <div className=''>
                            <h2 className="font-semibold">Annette Black</h2>
                            <p>Chief Chairman of<span className='text-blue-500'> Amazon</span></p>
                        </div>
                    </div>
                    <p className='my-5 text-sm'>“Golio is one of the BEST web designers <br /> I've ever worked with professionally. I <br /> am a repeat customer who continues to work <br /> with Zakir because of his talent/skills, great customer service, work <br /> ethic, and attention to detail. ”</p>
                    <img className='w-[100px]' src={amazon} alt="" />
                </div>
                <div className="bg-[#E7F5E8] p-10 rounded-lg ">
                    <div className="flex gap-5">
                        <img className='w-10 rounded-full' src={man3} alt="" />
                        <div className=''>
                            <h2 className="font-semibold">Annette Black</h2>
                            <p>Chief Chairman of<span className='text-blue-500'> Utube</span></p>
                        </div>
                    </div>
                    <p className='my-5 text-sm'>“Golio is one of the BEST web designers <br /> I've ever worked with professionally. I <br /> am a repeat customer who continues to work <br /> with Zakir because of his talent/skills, great customer service, work <br /> ethic, and attention to detail. ”</p>
                    <img className='w-[100px]' src={tube} alt="" />
                </div>
                <div className="bg-[#F5F6F7] p-10 rounded-lg ">
                    <div className="flex gap-5">
                        <img className='w-10 rounded-full' src={man3} alt="" />
                        <div className=''>
                            <h2 className="font-semibold">Annette Black</h2>
                            <p>Chief Chairman of<span className='text-blue-500'> Google</span></p>
                        </div>
                    </div>
                    <p className='my-5 text-sm'>“Golio is one of the BEST web designers <br /> I've ever worked with professionally. I <br /> am a repeat customer who continues to work <br /> with Zakir because of his talent/skills, great customer service, work <br /> ethic, and attention to detail. ”</p>
                    <img className='w-[100px]' src={google} alt="" />
                </div>
            </div>
            
        </div>
    );
};

export default WhatClientSay;