import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className=" md:flex justify-between items-center">
            <h1 className="text-3xl font-semibold">Event <span className="text-blue-500">360</span> </h1>
            <div>
                <ul className=" md:flex md:justify-center items-center gap-2 py-5">
                    <Link to='#'>Home</Link>
                    <Link to='#'>About</Link>
                    <Link to='#'>Contact</Link>
                    <Link to='/admin/event'>Dashboard</Link>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;