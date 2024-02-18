import bannerImg from '../../assets/img/header.jpg'
import {motion} from 'framer-motion'

const parent = {
    hidden : {opacity: 0, scale:0, x: 0, y:0},
    visible : {opacity: 1,
        scale: 1,
        x:[0,50, -100,0],
        y:[0,50, -100,0], 
        // rotate:[0,300, -300,0], 
    transition: {
        ease: 'linear',
        transition: {
            duration: 1,
        },
        duration: 2,
    
        // repeat: Infinity,
    }},
}

const BannerText = () => {
    
    return (
        <div>
            <div className="md:flex md:justify-between  mt-5 md:mt-10">
            <div>
                <motion.h1 className=" text-3xl md:text-5xl uppercase font-bold"
                variants={parent}
            initial='hidden'
            animate='visible'
                >Best Event <br /> management firm</motion.h1>
                <button className="bg-blue-500 px-10 py-1 text-white mt-5 md:mt-10">Explore</button>
            </div>
            <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Cursus imperdiet sed id elementum. Quam vel aliquam sit <br />vulputate.</p>
         </div>
         <div className="mt-10">
            <img src={bannerImg} alt="" />
         </div>
        </div>
    );
};

export default BannerText;