import { BiSolidNavigation } from "react-icons/bi";

const Overview = () => {
    return (
        <div>
            <div className="flex">
                <div className="flex items-center gap-6 w-1/4 bg-white px-5 py-5 shadow-sm rounded-lg ">
                    <div>
                        <div>Lifetime Leave</div>
                        <div>9</div>
                    </div>
                    <div className="text-4xl border rounded-full p-3 bg-gray-50 text-blue-600"><BiSolidNavigation />
                    </div>
                </div>
            </div>



            <div></div>
            <div></div>
        </div>
    );
};

export default Overview;