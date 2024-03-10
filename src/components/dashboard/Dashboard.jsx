import { Link, Outlet } from "react-router-dom";
import Menu from "./Menu";

const Dashboard = () => {
    return (
        <div className="flex">
            <div className="static w-1/5 h-dvh shadow-xl ">
                <div>
                    <h2 className="font-semibold text-2xl pl-10 pt-5">HR Dev</h2>
                    <ul className="invisible lg:visible">
                        {/* <li><Link to='/overview'>Overview</Link></li>
                        <li><Link to='/profile'>Profile</Link></li> */}
                        <Menu></Menu>
                    </ul>
                </div>
            </div>
            <div className="w-4/5">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;