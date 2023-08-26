import {
    UilArrowUp,
    UilArrowDown,
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset,
} from "@iconscout/react-unicons";

const TempAndDetails = () => {
    return (
        <div>
            <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
                <p>Cloudy</p>
            </div>
            <div className="flex items-center justify-between py-3 text-xl text-white">
                <img src="/logo.png" alt="Weather Image" className="w-20" />
                <p className="text-5xl">34°</p>
                <div className="flex flex-col space-y-2">
                    <div className="flex font-light text-sm items-center justify-center">
                        <UilTemperature size={18} className='mr-1' />
                        Real Feel
                        <span className="font-medium ml-1">32°</span>
                    </div>
                    <div className="flex font-light text-sm items-center justify-center">
                        <UilTear size={18} className='mr-1' />
                        Humidity
                        <span className="font-medium ml-1">65%</span>
                    </div>
                    <div className="flex font-light text-sm items-center justify-center">
                        <UilWind size={18} className='mr-1' />
                        Wind
                        <span className="font-medium ml-1">11 kmph</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
                <UilSun />
                <p className="font-light">Rise: <span>06:45</span></p>
                <p className="font-light">|</p>
                    
                <UilSunset />
                <p className="font-light">Set: <span>07:45</span></p>
                <p className="font-light">|</p>

                <UilArrowUp />
                <p className="font-light">High: <span>45°</span></p>
                <p className="font-light">|</p>

                <UilArrowDown />
                <p className="font-light">Low: <span>25°</span></p>

            </div>
        </div>
    );
};

export default TempAndDetails;