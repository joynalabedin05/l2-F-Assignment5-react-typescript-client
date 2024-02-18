import { FaHome , FaCartPlus} from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <aside className="bg-purple-500 text-white col-span-2 h-screen sticky top-0 left-0 overflow-auto p-3 md:p-5">
           
        <nav className="flex flex-col gap-3 mt-10">
            <NavLink className="p-3 bg-gray hover:bg-gray-700 hover:text-white rounded-md transition-all flex  items-center gap-2 text-lg" to='/'> 
            <FaHome className="shrink-0" /><span className="truncate">Home</span>
            </NavLink>
            <NavLink className="p-3 bg-gray hover:bg-gray-700  hover:text-white rounded-md transition-all flex  items-center gap-2 text-lg" to='/admin/event'> 
            <FaCartPlus className="shrink-0"  /> <span className="truncate">Event Items</span>
            </NavLink>
            <NavLink className="p-3 bg-gray hover:bg-gray-700 hover:text-white rounded-md transition-all flex items-center gap-2 text-lg " to='/admin/recent-event'> 
            <FaCartPlus className="shrink-0"  />  <span className="truncate">Recent Event</span>
            </NavLink>
            
            
        </nav>
    </aside>
    );
};

export default Sidebar;