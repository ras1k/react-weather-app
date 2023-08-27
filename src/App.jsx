
import './App.css'
import { useEffect, useState } from 'react'
import Forcast from './components/Forcast'
import Inputs from './components/Inputs'
import TempAndDetails from './components/TempAndDetails'
import TimeAndLocation from './components/TimeAndLocation'
import TopButtons from './components/TopButtons'
import getFormattedWeatherData from './services/weatherService'

function App() {

  const [query, setQuery] = useState({ q: 'Chittagong' });
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units })
        .then((data) => {
          setWeather(data);
        });
    };

    fetchWeather();
  }, [query, units]);

  // const formatBg = () => {
  //   if(!weather) return 'from-cyan-700 to-blue-700';
  //   const threshhold = units === 'metric' ? 20 : 60;
  //   if (weather.temp <= threshhold) return 'from-cyan-700 to-blue-700'
  //   return 'from-yellow-700 to-orange-700'
  // }
  const formatBackground = () => {
    if (!weather) {
      return "from-cyan-700 to-blue-700";
    }
    const threshold = units === "imperial" ? 20 : 60;
    if (weather.temp <= threshold) {
      return "from-cyan-700 to-blue-700";
    }
    return "from-yellow-700 to-orange-700";
  }

  return (
    <>
      <div className={`mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}>
        <TopButtons setQuery={setQuery} />
        <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

        {weather && (
          <div>
            <TimeAndLocation weather={weather} />
            <TempAndDetails weather={weather} />
            <Forcast title={'Hourly Forcast'} items={weather.hourly} />
            <Forcast title={'Daily Forcast'} items={weather.daily} />
          </div>
        )}
      </div>
    </>
  )
}

export default App
