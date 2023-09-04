import { useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import { toast } from "react-toastify";
import { isMobile } from 'react-device-detect';
const Inputs = ({ setQuery, units, setUnits }) => {

    const [city, setCity] = useState('');

    const handleSearch = () => {
        if (city !== '') setQuery({ q: city })
        setCity('');
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    const handleLocation = () => {
        if (navigator.geolocation) {
            if (!isMobile) {
                toast.info('Fetching users location')
            }
            navigator.geolocation.getCurrentPosition((position) => {
                if (!isMobile) {
                    toast.success('Location fetched')
                }

                let lat = position.coords.latitude
                let lon = position.coords.longitude

                setQuery({
                    lat,
                    lon,
                });
            });
        }
        console.log(city);
    };

    const handleUnitsChange = (e) => {
        const selectedUnit = e.currentTarget.name
        if (units !== selectedUnit) setUnits(selectedUnit)
    }

    return (
        <div className="flex flex-row justify-center my-6">
            <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
                <input
                    value={city}
                    onChange={(e) => setCity(e.currentTarget.value)}
                    onKeyDown={handleKeyPress}
                    type="text"
                    className="text-xl font-semibold p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
                    placeholder="Search for city..."
                />
                <UilSearch
                    size={25}
                    className="text-white cursor-pointer transition ease-out hover:scale-125"
                    onClick={handleSearch}
                />
                <UilLocationPoint
                    size={25}
                    className="text-white cursor-pointer transition ease-out hover:scale-125"
                    onClick={handleLocation}
                />
            </div >
            <div className="flex flex-row w-1/4 items-center justify-center">
                <button
                    name="metric"
                    className="text-xl text-white mx-2 cursor-pointer transition ease-out hover:scale-125"
                    onClick={handleUnitsChange}
                >
                    °C
                </button>
                <p className="text-white">|</p>
                <button
                    name="imperial"
                    className="text-xl text-white mx-2 cursor-pointer transition ease-out hover:scale-125"
                    onClick={handleUnitsChange}
                >
                    °F
                </button>
            </div>
        </div >
    );
};

export default Inputs;