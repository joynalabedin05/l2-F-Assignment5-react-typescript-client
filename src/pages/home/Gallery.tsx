
import gallery1 from '../../assets/img/gallery1.png'
import gallery2 from '../../assets/img/gallery2.png'
import gallery3 from '../../assets/img/gallery3.png'
import gallery4 from '../../assets/img/gallery4.png'
import gallery5 from '../../assets/img/gallery5.png'
import gallery6 from '../../assets/img/gallery6.png'
import gallery7 from '../../assets/img/gallery7.png'
import gallery8 from '../../assets/img/gallery8.png'
import gallery9 from '../../assets/img/gallery9.png'
import gallery10 from '../../assets/img/gallery10.png'
import gallery11 from '../../assets/img/gallery11.png'
import gallery12 from '../../assets/img/gallery12.png'
const Gallery = () => {
    return (
        <div className=''>
            <div className="text-center mt-16">
                <h1 className="text-4xl font-bold">Gallery</h1>
                <p className="mt-3">Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut posuere felis <br /> arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.</p>
            </div>
            <div className="grid md:grid-cols-7 mt-10 max-w-[1000px] mx-auto">
                <div className=" flex flex-col justify-center items-center">
                    <img src={gallery1} alt="" />
                    <img src={gallery2} alt="" />
                </div>
                <div className="flex flex-col justify-center items-center">
                    
                    <img src={gallery3} alt="" />
                </div>
                <div className="flex flex-col justify-center items-center">
                    <img src={gallery4} alt="" />
                    <img src={gallery5} alt="" />
                </div>
                <div className="flex flex-col justify-center items-center">
                    <img src={gallery6} alt="" />
                    <img src={gallery7} alt="" />
                </div>
                <div className="flex flex-col justify-center items-center">
                    <img src={gallery8} alt="" />
                    <img src={gallery9} alt="" />
                </div>
                <div className="flex flex-col justify-center items-center">
                    <img src={gallery10} alt="" />                    
                </div>
                <div className="flex flex-col justify-center items-center">
                    <img src={gallery11} alt="" />                    
                    <img src={gallery12} alt="" />                    
                </div>
               
            </div>
        </div>
    );
};

export default Gallery;