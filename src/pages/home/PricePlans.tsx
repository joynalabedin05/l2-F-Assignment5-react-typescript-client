
import { FaCheck, FaTimes  } from 'react-icons/fa';

const PricePlans = () => {
    return (
        <div>
            <div className="text-center mt-16">
                <h1 className="text-4xl font-bold">Explore our pricing plans</h1>
                <p className="mt-10">Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut posuere felis <br /> arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-16 text-center ">
                <div className=" p-5 rounded">
                    <div className='bg-white p-6 rounded text-center border'>
                        <h1 className='text-3xl'>Starter</h1>
                        <h2 className='text-3xl text-blue-500'>$10</h2>
                        <button className='bg-blue-600 px-3 rounded-md mt-4 py-1 text-white '>Get this package</button>
                        <p className='text-md mt-2'>Ut posuere felis arcu tellus <br />  tempus in in ultricies. <br /> Gravida.</p>
                    </div>
                    <h1 className='bg-gray-200 font-semibold'>All Feature options</h1>
                    <div className='bg-white p-5 border'>
                        <ul>
                        <li className='flex items-center gap-3'> <span className='bg-blue-600 rounded-full p-1'><FaCheck size={8} color='white'/></span> <span>Free Custom Domain*</span></li>
                        <li className='my-2 flex items-center gap-3'> <span className='bg-blue-600 rounded-full p-1'><FaCheck size={8} color='white'/></span> <span>Unlimited Bandwith</span></li>
                        <li className='flex items-center gap-3'> <span className='bg-blue-600 rounded-full p-1'><FaCheck size={8} color='white'/></span> <span>Contributors</span></li>
                        <li className=' my-2 flex items-center gap-3'> <span className='bg-blue-600 rounded-full p-1'><FaCheck size={8} color='white'/></span> <span>Basic Website Metrics</span></li>
                        <li className='mt-4 flex items-center gap-3'> <span className='bg-red-300 rounded-full p-1'><FaTimes size={8} color='white' /></span> <span className=''>Squarespace Extention</span></li>
                        <li className='my-2 flex items-center gap-3'> <span className='bg-red-300 rounded-full p-1'><FaTimes size={8} color='white' /></span> <span className=''>Customer support</span></li>
                        <li className=' flex items-center gap-3'> <span className='bg-red-300 rounded-full p-1'><FaTimes size={8} color='white' /></span> <span className=''>Project Roles</span></li>
                        
                        </ul>
                    </div>
                </div>
                <div className=" p-5 rounded">
                    <div className='bg-white p-6 rounded text-center border'>
                        <h1 className='text-3xl'>Basic</h1>
                        <h2 className='text-3xl text-blue-500'>$15</h2>
                        <button className='bg-blue-600 px-3 rounded-md mt-4 py-1 text-white '>Get this package</button>
                        <p className='text-md mt-2'>Ut posuere felis arcu tellus <br />  tempus in in ultricies. <br /> Gravida.</p>
                    </div>
                    <h1 className='bg-gray-200 font-semibold'>All Feature options</h1>
                    <div className='bg-white p-5 border'>
                        <ul>
                        <li className='flex items-center gap-3'> <span className='bg-blue-600 rounded-full p-1'><FaCheck size={8} color='white'/></span> <span>Free Custom Domain*</span></li>
                        <li className='my-2 flex items-center gap-3'> <span className='bg-blue-600 rounded-full p-1'><FaCheck size={8} color='white'/></span> <span>Unlimited Bandwith</span></li>
                        <li className='flex items-center gap-3'> <span className='bg-blue-600 rounded-full p-1'><FaCheck size={8} color='white'/></span> <span>Contributors</span></li>
                        <li className=' my-2 flex items-center gap-3'> <span className='bg-blue-600 rounded-full p-1'><FaCheck size={8} color='white'/></span> <span>Basic Website Metrics</span></li>
                        <li className='mt-4 flex items-center gap-3'> <span className='bg-red-300 rounded-full p-1'><FaTimes size={8} color='white' /></span> <span className=''>Squarespace Extention</span></li>
                        <li className='my-2 flex items-center gap-3'> <span className='bg-red-300 rounded-full p-1'><FaTimes size={8} color='white' /></span> <span className=''>Customer support</span></li>
                        <li className=' flex items-center gap-3'> <span className='bg-red-300 rounded-full p-1'><FaTimes size={8} color='white' /></span> <span className=''>Project Roles</span></li>
                        
                        </ul>
                    </div>
                </div>
                <div className=" p-5 rounded">
                    <div className='bg-white p-6 rounded text-center border relative'>
                        <button className='absolute top-0 left-0 w-full bg-blue-600 text-white rounded '>Popular Plan</button>
                        <h1 className='text-3xl'>Standard</h1>
                        <h2 className='text-3xl text-blue-500'>$35</h2>
                        <button className='bg-blue-600 px-3 rounded-md mt-4 py-1 text-white '>Get this package</button>
                        <p className='text-md mt-2'>Ut posuere felis arcu tellus <br />  tempus in in ultricies. <br /> Gravida.</p>
                    </div>
                    <h1 className='bg-gray-200 font-semibold'>All Feature options</h1>
                    <div className='bg-white p-5 border'>
                        <ul>
                        <li className='flex items-center gap-3'> <span className='bg-blue-600 rounded-full p-1'><FaCheck size={8} color='white'/></span> <span>Free Custom Domain*</span></li>
                        <li className='my-2 flex items-center gap-3'> <span className='bg-blue-600 rounded-full p-1'><FaCheck size={8} color='white'/></span> <span>Unlimited Bandwith</span></li>
                        <li className='flex items-center gap-3'> <span className='bg-blue-600 rounded-full p-1'><FaCheck size={8} color='white'/></span> <span>Contributors</span></li>
                        <li className=' my-2 flex items-center gap-3'> <span className='bg-blue-600 rounded-full p-1'><FaCheck size={8} color='white'/></span> <span>Basic Website Metrics</span></li>
                        <li className='mt-4 flex items-center gap-3'> <span className='bg-red-300 rounded-full p-1'><FaTimes size={8} color='white' /></span> <span className=''>Squarespace Extention</span></li>
                        <li className='my-2 flex items-center gap-3'> <span className='bg-red-300 rounded-full p-1'><FaTimes size={8} color='white' /></span> <span className=''>Customer support</span></li>
                        <li className=' flex items-center gap-3'> <span className='bg-red-300 rounded-full p-1'><FaTimes size={8} color='white' /></span> <span className=''>Project Roles</span></li>
                        
                        </ul>
                    </div>
                </div>
                <div className=" p-5 rounded">
                    <div className='bg-white p-6 rounded text-center border'>
                        <h1 className='text-3xl'>Professional</h1>
                        <h2 className='text-3xl text-blue-500'>$15</h2>
                        <button className='bg-blue-600 px-3 rounded-md mt-4 py-1 text-white '>Get this package</button>
                        <p className='text-md mt-2'>Ut posuere felis arcu tellus <br />  tempus in in ultricies. <br /> Gravida.</p>
                    </div>
                    <h1 className='bg-gray-200 font-semibold'>All Feature options</h1>
                    <div className='bg-white p-5 border'>
                        <ul>
                        <li className='flex items-center gap-3'> <span className='bg-blue-600 rounded-full p-1'><FaCheck size={8} color='white'/></span> <span>Free Custom Domain*</span></li>
                        <li className='my-2 flex items-center gap-3'> <span className='bg-blue-600 rounded-full p-1'><FaCheck size={8} color='white'/></span> <span>Unlimited Bandwith</span></li>
                        <li className='flex items-center gap-3'> <span className='bg-blue-600 rounded-full p-1'><FaCheck size={8} color='white'/></span> <span>Contributors</span></li>
                        <li className=' my-2 flex items-center gap-3'> <span className='bg-blue-600 rounded-full p-1'><FaCheck size={8} color='white'/></span> <span>Basic Website Metrics</span></li>
                        <li className='mt-4 flex items-center gap-3'> <span className='bg-red-300 rounded-full p-1'><FaTimes size={8} color='white' /></span> <span className=''>Squarespace Extention</span></li>
                        <li className='my-2 flex items-center gap-3'> <span className='bg-red-300 rounded-full p-1'><FaTimes size={8} color='white' /></span> <span className=''>Customer support</span></li>
                        <li className=' flex items-center gap-3'> <span className='bg-red-300 rounded-full p-1'><FaTimes size={8} color='white' /></span> <span className=''>Project Roles</span></li>
                        
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricePlans;