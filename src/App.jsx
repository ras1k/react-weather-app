
import './App.css'
import Forcast from './components/Forcast'
import Inputs from './components/Inputs'
import TempAndDetails from './components/TempAndDetails'
import TimeAndLocation from './components/TimeAndLocation'
import TopButtons from './components/TopButtons'
import getFormattedWeatherData from './services/weatherService'

function App() {

  const fetchWeather = async () => {
    const data = await getFormattedWeatherData({ q: 'london' });
    console.log(data);
  }

  fetchWeather()
  return (
    <>
      <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400'>
        <TopButtons />
        <Inputs />

        <TimeAndLocation />
        <TempAndDetails />
        <Forcast title={'Hourly Forcast'} />
        <Forcast title={'Daily Forcast'} />
      </div>
    </>
  )
}

export default App
