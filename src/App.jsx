
import './App.css'
import { useEffect, useState } from 'react'
import Forcast from './components/Forcast'
import Inputs from './components/Inputs'
import TempAndDetails from './components/TempAndDetails'
import TimeAndLocation from './components/TimeAndLocation'
import TopButtons from './components/TopButtons'
import getFormattedWeatherData from './services/weatherService'

function App() {

  const [query, setQuery] = useState({ q: 'berlin' });
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
  }, [query, units])


  return (
    <>
      <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400'>
        <TopButtons />
        <Inputs />

        {weather && (
          <div>
            <TimeAndLocation weather={weather}/>
            <TempAndDetails weather={weather}/>
            <Forcast title={'Hourly Forcast'} items={weather.hourly} />
            <Forcast title={'Daily Forcast'} items={weather.daily} />
          </div>
        )}
      </div>
    </>
  )
}

export default App
