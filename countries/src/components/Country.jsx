import { useState, useEffect } from "react"
// Components
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
                <div className="country-flag">
                    <img src={country.flags.svg} alt={country.flags.alt} />
                </div>
                <div className="country-information">
                    <h1>{country.name.common}</h1>
                    <p><b>Capital{country.capital.length > 1 ? "s" : ""}</b>: {country.capital.join(", ")}</p>
                    <p><b>Area</b>: {new Intl.NumberFormat("en-EU").format(country.area)} km<sup>2</sup></p>
                    <h2>Languages:</h2>
                    <ul className="country-languages">
                        {Object.keys(country.languages).map(code => <li className="country-languages__language" key={code}>{country.languages[code]}</li>)}
                    </ul>
                </div>
                <Weather country={country} weather={weather}/>
            </div>
        )
    }
}

export default Country