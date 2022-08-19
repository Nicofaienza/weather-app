import styled from "styled-components";
import clouds from '../../imgs/clouds.jpg';
import clear from '../../imgs/clear.jpg';
import snow from '../../imgs/snow.jpg';
import rain from '../../imgs/rain.jpg';
import mist from '../../imgs/mist.jpg';
import sand from '../../imgs/sand.jpg';
import night from '../../imgs/night.jpg';

const time = Date.now();
console.log("time: ",time)

export const Appbg = styled.div`
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(0deg, rgba(85,85,85,1) 0%, rgba(176,176,176,1) 23%, rgba(219,219,219,1) 100%);
    background-position: center;
    background-size: cover;
    filter: blur(5px);
    background-image: ${({ weatherDesc, sunset, sunrise }) => {
            return  (weatherDesc === "Clear" && sunrise < time < sunset) ? `url(${clear});`:
                (weatherDesc === "Clear" && sunrise > time > sunset) ? `url(${night});`:
                (weatherDesc === "Clouds") ? `url(${clouds});`:
                (weatherDesc === "Snow") ? `url(${snow});`:
                (weatherDesc === "Rain" | weatherDesc === "Drizzle" | weatherDesc === "Squall") ? `url(${rain});`:
                (weatherDesc === "Mist" | weatherDesc === "Haze" | weatherDesc === "Smooke" | weatherDesc === "Fog" | weatherDesc === "Ash" | weatherDesc === "Tornado") ? `url(${mist});`:
                (weatherDesc === "Sand" | weatherDesc === "Dust") ? `url(${sand});`:
                ""
        
    }}
`;