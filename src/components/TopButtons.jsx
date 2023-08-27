
const TopButtons = ({ setQuery }) => {
    const cities = [
        {
            id: 1,
            title: 'Dhaka'
        },
        {
            id: 2,
            title: 'Madrid'
        },
        {
            id: 3,
            title: 'London'
        },
        {
            id: 4,
            title: 'Berlin'
        },
        {
            id: 5,
            title: 'Moscow'
        },
        {
            id: 6,
            title: 'Paris'
        },
    ]
    return (
        <div className="hidden lg:flex items-center justify-around my-6">
            {cities.map((city) => (
                <button
                    key={city.id}
                    className="text-white text-lg font-medium"
                    onClick={() => setQuery({q: city.title})}
                >
                    {city.title}
                </button>
            ))}
        </div>
    );
};

export default TopButtons;