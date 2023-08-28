import { NavLink } from "react-router-dom";
import { FaFlipboard, FaHome, FaMap} from "react-icons/fa";
import Home from "../Home/Home/Home";


const Dashboard = () => {
   
    const option = <>
        <ul id="sidebar" className="menu p-4 w-80 min-h-full  z-20">
            {/* Sidebar content here */}
           

            <li><NavLink to="/dashboard/userHome"> <FaFlipboard></FaFlipboard> Boards</NavLink></li>
            <li><NavLink to="/dashboard/reservations"><FaMap></FaMap> Templates</NavLink></li>
            <li><NavLink to="/"><FaHome></FaHome> Home</NavLink></li>
           


            <div className="divider"></div>


            <li><NavLink to="#">Personal</NavLink></li>
           


        </ul>

    </>

    return (
        <div className="max-w-screen-xl mx-auto">


            <div className="drawer lg:drawer-open ">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-side hidden lg:block z-20">
                    <label htmlFor="my-drawer-2" className="drawer-overlay "></label>
                    {option}
                </div>
                <div className="drawer-content flex flex-col ">
                    
                <Home></Home>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;