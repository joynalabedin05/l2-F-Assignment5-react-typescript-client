import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "../../pages/home/Footer";


const MainLayouts = () => {
    return (
        <div className="">
             <div className="max-w-[1200px] mx-auto p-3 md:py-10">
                <Navbar></Navbar>
                <Outlet></Outlet>
             </div>
             <Footer></Footer>
        </div>
    );
};

export default MainLayouts;