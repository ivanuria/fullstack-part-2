import { useState, useEffect } from "react"
// Components
import CountryFlag from "./CountryFlag"
import CountryInformation from "./CountryInformation"
import Weather from "./Weather"
// Services
import openweatherData from "../services/openweatherData"

const Country = ({country}) => {
    const [weather, setWeather] = useState(null)

    console.log("Wheather", weather)

    useEffect(() => {
        if (country) {
            setWeather(null)
            openweatherData.getCurrent(...country.latlng).then(weatherData => setWeather(weatherData))
        }
    }, [country])

    if (country && country !== "") {
        console.log("Render Country", country);
        return (
            <div className="country" data-name={country.name.common}>                
                <CountryInformation country={country} />                
                <CountryFlag src={country.flags.svg} alt={country.flags.alt} />
                <Weather country={country} weather={weather}/>
            </div>
        )
    }
}

export default Country