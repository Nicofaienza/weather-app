import { useState, useEffect } from "react";
import Form from "../form/Form";
import WeatherCard from "../weather card/WeatherCard";
import '../../styles/index.css';
import { Appbg } from './Weatherpanelelements.js';

const WeatherPanel = () => {

    const [weather, setWeather] = useState([]);
    const [forecast, setForecast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [weatherDesc, setWeatherDesc] = useState("none");
    const [sunset, setSunset] = useState(0);
    const [sunrise, setSunrise] = useState(0);
    let location = [];

    const apikey = "919f626e28124439012dda1cb0912f01";

    const getWeather = async (loc) => {
        location = loc;
        setLoading(true);
        console.log("location ",location);

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location[0]},${location[1]}&appid=${apikey}&lang=es&units=metric`;
        const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${location[0]},${location[1]}&appid=${apikey}&lang=es&units=metric`;

        //weather

        await fetch(url).then(response =>{
            // eslint-disable-next-line no-throw-literal
            if(!response.ok)throw{response}
            return response.json();
        }).then(weatherData =>{
            console.log(weatherData);
            setWeather(weatherData);
            setWeatherDesc(weatherData.weather[0].main);
            setSunset(weatherData.sys.sunset);
            setSunrise(weatherData.sys.sunrise);
        }).catch(error =>{
            console.log(error);
            setLoading(false);
            setShow(false);
        })

        //forecast

        await fetch(urlForecast).then(response =>{
            // eslint-disable-next-line no-throw-literal
            if(!response.ok)throw{response}
            return response.json();
        }).then(forecastData => {
            console.log(forecastData);
            setForecast(forecastData);

            setLoading(false);
            setShow(true);

        }).catch(error =>{
            console.log(error);
            setLoading(false);
            setShow(false);
        })

    }

  

    useEffect(() =>{
        show ? 
        document.title = weather.name+ " | " +weather.main.temp+"°C"
        : document.title = "Weather App"
    })

    return(
        <div id="app-container">
            <Appbg weatherDesc = {weatherDesc} sunset = {sunset} sunrise = {sunrise}></Appbg>
            {
                show ? 
                <WeatherCard setWeatherDesc = {setWeatherDesc} weather = {weather} forecast = {forecast} setShow = {setShow}/> :
                <Form getWeather = {getWeather} loading = {loading} />
            }
        
        </div>
        
    );

};

export default WeatherPanel;