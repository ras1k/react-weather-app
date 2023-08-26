
const TopButtons = () => {
    const cities = [
        {
            id: 1,
            title: 'Dhaka'
        },
        {
            id: 2,
            title: 'Delhi'
        },
        {
            id: 3,
            title: 'London'
        },
        {
            id: 4,
            title: 'New York'
        },
        {
            id: 5,
            title: 'Paris'
        },
    ]
    return (
        <div className="flex items-center justify-around my-6">
            {cities.map((city) => (
                <button key={city.id} className="text-white text-lg font-medium">
                    {city.title}
                </button>
            ))}
            <p>1:33</p>
        </div>
    );
};

export default TopButtons;