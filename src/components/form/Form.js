import { useState } from "react";
import { Formbutton, Forminput, Formlabel, Formwrapper } from "./Formelements";
import { Cardtitle } from '../weather card/Weathercardelements.js';

const Form = ({ getWeather, loading }) =>{

    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
  
  
    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log("City: ",city, "Country: ",country);
        await getWeather([city, country]);
        setCity("");
        setCountry("");
    }

    
    return(
        <Formwrapper onSubmit={handleSubmit}>
            <Cardtitle>Weather App</Cardtitle>
            <Formlabel>Ciudad</Formlabel>
            <Forminput id="city" type="text" placeholder="Ciudad" onChange={(e) => setCity(e.target.value)} value={city}></Forminput>
            <Formlabel>Código del Pais</Formlabel>
            <Forminput  type="text" placeholder= "Ej: ar, es, us, etc.." id="myInput"></Forminput>
            <Formbutton onClick={handleSubmit}>Buscar</Formbutton>
            {loading ? <div className="lds-ring"><div></div><div></div><div></div><div></div></div> : ""}
        </Formwrapper>
    );
}

export default Form;