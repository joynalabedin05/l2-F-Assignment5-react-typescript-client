import {  FaArrowAltCircleUp, FaArrowRight, FaEuroSign, FaGlobe } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div className="bg-slate-800 px-14 py-10 text-white">
            <div className="grid md:grid-cols-3 lg:grid-cols-6">
                <div>
                <h1 className="text-3xl font-semibold">Event <span className="text-blue-500">360</span> </h1>
                </div>
                <div>
                    <ul className="flex flex-col">
                        <Link to='#' className="text-sm">Product</Link>
                        <Link to='#' className="text-sm my-2">Price</Link>
                        <Link to='#' className="text-sm">Overview</Link>
                        <Link to='#' className="text-sm my-2">Browse</Link>
                        <Link to='#' className="text-sm">Accessibility</Link>
                    </ul>
                </div>
                <div>
                    <ul className="flex flex-col">
                        <Link to='#' className="text-sm">Solution</Link>
                        <Link to='#' className="text-sm my-2">Brainstorming</Link>
                        <Link to='#' className="text-sm">Ideation</Link>
                        <Link to='#' className="text-sm my-2">WareFarming</Link>
                        <Link to='#' className="text-sm">Research</Link>
                    </ul>
                </div>
                <div>
                    <ul className="flex flex-col">
                        <Link to='#' className="text-sm">Resource</Link>
                        <Link to='#' className="text-sm my-2">Help Center</Link>
                        <Link to='#' className="text-sm">Blog</Link>
                        <Link to='#' className="text-sm my-2">Tutorials</Link>
                        <Link to='#' className="text-sm">FAQs</Link>
                    </ul>
                </div>
                <div>
                    <ul className="flex flex-col">
                        <Link to='#' className="text-sm">Support</Link>
                        <Link to='#' className="text-sm my-2">Contact us</Link>
                        <Link to='#' className="text-sm">Developers</Link>
                        <Link to='#' className="text-sm my-2">Documentations</Link>
                        <Link to='#' className="text-sm">Integrations</Link>
                    </ul>
                </div>
                <div>
                    <ul className="flex flex-col">
                        <Link to='#' className="text-sm">Company</Link>
                        <Link to='#' className="text-sm my-2">About</Link>
                        <Link to='#' className="text-sm">Press</Link>
                        <Link to='#' className="text-sm my-2">Events</Link>
                        <Link  to='#' className="text-sm">Requestdemo   <button className="ml-2"><FaArrowRight  color="" size={10} /></button></Link>
                    </ul>
                </div>
                             
            </div>
            <div className="bg-slate-800 p-4 rounded-md md:flex justify-between mt-10">
                <p className="text-sm"> @ 2023. All rights reserved.</p>
                <div>
                <ul className="md:flex justify-center items-center gap-7">
                        <Link to='#' className="text-sm">Terms</Link>
                        <Link to='#' className="text-sm my-2">Privacy</Link>
                        <Link to='#' className="text-sm">Contact</Link>
                        <Link  to='#' className="text-sm my-2 flex justify-center items-center gap-2"> <FaGlobe /> <span>EN</span></Link>
                        <Link to='#' className="text-sm flex justify-center items-center gap-2"> <FaEuroSign /> EUR </Link>
                        <Link to='#' className="text-sm"> <FaArrowAltCircleUp /> </Link>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;