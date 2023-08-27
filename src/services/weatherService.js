import { DateTime } from "luxon";

const API_KEY = "9cdb7e7734c0b7c196ee77b2ace89e29";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

// https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key}

const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + '/' + infoType);
    url.search = new URLSearchParams({ ...searchParams, appid: API_KEY })
    // console.log(url);

    return fetch(url)
        .then((res) => res.json())
    // .then((data) => data);
}

const formatCurrentWeather = (data) => {
    const {
        coord: { lat, lon },
        main: { temp, feels_like, temp_min, temp_max, humidity },
        name,
        dt,
        sys: { country, sunrise, sunset },
        weather,
        wind: { speed }
    } = data;

    const { main: details, icon } = weather[0];

    return { lat, lon, feels_like, temp, temp_min, temp_max, humidity, name, dt, country, sunset, sunrise, speed, details, icon }
};

const formatForcastWeather = (data) => {
    let { timezone, daily, hourly } = data;
    
    daily = daily.slice(1, 6).map(d => {
        return {
            title: formatToLocalTime(d.dt, timezone, 'ccc'),
            temp: d.temp.day,
            icon: d.weather[0].icon,
        }
    });

    hourly = hourly.slice(1, 6).map(d => {
        return {
            title: formatToLocalTime(d.dt, timezone, 'hh:mm a'),
            temp: d.temp,
            icon: d.weather[0].icon,
        }
    });

    return { timezone, daily, hourly }
}

const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData('weather', searchParams).then(formatCurrentWeather);

    const { lat, lon } = formattedCurrentWeather;

    const formattedForcastWeather = await getWeatherData('onecall',
        {
            lat,
            lon,
            exclude: 'current, minutely, alerts',
            units: searchParams.units
        }).then(formatForcastWeather)

    return { ...formattedCurrentWeather, ...formattedForcastWeather };
}

const formatToLocalTime = (
    secs,
    zone,
    format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const iconUrlFromCode = (code) => `http://openweathermap.org/img/wn/${code}@2x.png` ;

export default getFormattedWeatherData;
export {formatToLocalTime, iconUrlFromCode}