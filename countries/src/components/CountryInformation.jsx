const CountryInformation = ({country}) => {
    return (
        <div className="country-information">
            <h1 className="country-information__name">{country.name.common}</h1>
            <div className="country-information__wrapper">
                <p><b>Capital{country.capital.length > 1 ? "s" : ""}</b>: {country.capital.join(", ")}</p>
                <p><b>Area</b>: {new Intl.NumberFormat("en-EU").format(country.area)} km<sup>2</sup></p>
                <h2>Languages:</h2>
                <ul className="country-languages">
                    {Object.keys(country.languages).map(code => <li className="country-languages__language" key={code}>{country.languages[code]}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default CountryInformation