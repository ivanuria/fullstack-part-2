const iconUrl = "https://openweathermap.org/img/wn/"

const Weather = ({weather, country}) => {
    if (weather === null) return null
    return (
        <div className="weather">
            <h2>Weather in {country.capital[0]}</h2>
            <p><b>Current Temperature</b>: {Math.round(weather.main.temp - 273.15, 2)} ºC</p>
            <p><b>Wind</b>: {weather.wind.speed} m/s</p>
            <img src={`${iconUrl}${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
        </div>
    )
}

export default Weather