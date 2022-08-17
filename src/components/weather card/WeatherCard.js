import { Cardbutton, Cardtitle, Cardimgcontainer, Cardinfo, Cardinfoli, Cardnextdayscontainer, Cardwrapper, Cardnextday } from "./Weathercardelements";
import getTemperatures from "../../GetTemperatures";



const WeatherCard = ({ weather, forecast, setShow, setWeatherDesc }) => {

    const iconNow = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

    const data = getTemperatures(forecast, weather);
    console.log("data: ", data)

    

    return(
        <Cardwrapper>
            
            <Cardtitle>{weather.name}</Cardtitle>
           
            <Cardinfo>
                <Cardinfoli><h3>Hoy <br/> {data.dates[4] < 10 ? '0' + data.dates[4] : data.dates[4]}/{data.dates[5] < 10 ? '0' + data.dates[5] : data.dates[5]}</h3></Cardinfoli>
                <Cardinfoli>
                <Cardimgcontainer>
                    <img src={iconNow}/>
                </Cardimgcontainer>
                </Cardinfoli>
                <Cardinfoli id="temperature">{weather.main.temp}°C</Cardinfoli>
                <Cardinfoli>{weather.weather[0].description}</Cardinfoli>
                <Cardinfoli>Min: {data.temps[39][0]}°C</Cardinfoli>
                <Cardinfoli>Máx: {data.temps[39][1]}°C</Cardinfoli>
            </Cardinfo>

            <Cardnextdayscontainer>
                <Cardnextday>
                    <h4>{data.dates[0]}/{data.dates[1]}</h4>
                    <div>
                        <span>Min: {data.temps[39][2]}°C</span>
                        <span>Máx: {data.temps[39][3]}°C</span>
                    </div>
                </Cardnextday>
                <Cardnextday>
                    <h4>{data.dates[2]}/{data.dates[3]}</h4>
                    <div>
                        <span>Min: {data.temps[39][4]}°C</span>
                        <span>Máx: {data.temps[39][5]}°C</span>
                    </div>
                </Cardnextday>
            </Cardnextdayscontainer>

            <Cardbutton onClick={() => {
                setShow(false);
                setWeatherDesc("none");
            }}>Buscar otra ciudad</Cardbutton>

        </Cardwrapper>
    )
}

export default WeatherCard;