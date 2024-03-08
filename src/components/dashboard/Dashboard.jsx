import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex">
            <div className="static w-1/5">
                <div>
                    <ul className="invisible lg:visible">
                        <li><Link to='/overview'>Overview</Link></li>
                        <li><Link to='/profile'>Profile</Link></li>
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