import { Outlet } from "react-router-dom";
import Sidebar from "../../pages/admin/Sidebar";


const AdminLayout = () => {
    return (
        <div className="grid grid-cols-12">
            {/* <h1>AdminLayout</h1> */}
            <Sidebar></Sidebar>
            <div className="col-span-10 m-10">
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default AdminLayout;