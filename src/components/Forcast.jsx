import { iconUrlFromCode } from "../services/weatherService";

const Forcast = ({ title, items }) => {
    console.log(items);
    return (
        <div>
            <div className="flex items-center justify-start mt-6">
                <p className="text-white font-medium uppercase">
                    {title}
                </p>
            </div>

            <hr className="my-2" />

            <div className="flex flex-row justify-between text-white">

                {items.map((item, index) => (
                    <div className="flex flex-col items-center justify-center" key={index}>
                        <p className="font-light text-sm">
                            {item.title}
                        </p>
                        <img src={iconUrlFromCode(item.icon)} alt="" className="w-12 my-1" />
                        <p className="font-medium">
                            {item.temp.toFixed()}°
                        </p>
                    </div>
                ))}

                {/* <div className="flex flex-col items-center justify-center">
                    <p className="font-light text-sm">
                        04:30
                    </p>
                    <img src="/logo.png" alt="" className="w-12 my-1" />
                    <p className="font-medium">
                        22°
                    </p>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <p className="font-light text-sm">
                        04:30
                    </p>
                    <img src="/logo.png" alt="" className="w-12 my-1" />
                    <p className="font-medium">
                        22°
                    </p>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <p className="font-light text-sm">
                        04:30
                    </p>
                    <img src="/logo.png" alt="" className="w-12 my-1" />
                    <p className="font-medium">
                        22°
                    </p>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <p className="font-light text-sm">
                        04:30
                    </p>
                    <img src="/logo.png" alt="" className="w-12 my-1" />
                    <p className="font-medium">
                        22°
                    </p>
                </div> */}

            </div>
        </div>
    );
};

export default Forcast;