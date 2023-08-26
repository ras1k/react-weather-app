import { BsSearch } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";

const Inputs = () => {
    return (
        <div className="flex flex-row justify-center my-6">
            <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
                <input type="text"
                    className="text-xl font-semibold p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
                    placeholder="Search for city..."
                />
                <BsSearch
                    className="text-white cursor-pointer transition ease-out hover:scale-150"
                />
                <FaLocationDot
                    className="text-white cursor-pointer transition ease-out hover:scale-150"
                />
            </div >
            <div className="flex flex-row w-1/4 items-center justify-center">
                <button name="metric" className="text-xl text-white mx-2">
                    °C
                </button>
                <p className="text-white">|</p>
                <button name="imperial" className="text-xl text-white mx-2">
                    °F
                </button>
            </div>
        </div >
    );
};

export default Inputs;