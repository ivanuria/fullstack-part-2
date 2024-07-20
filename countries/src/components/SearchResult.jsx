const SearchResult = ({country, setCountry}) => {
    if (!country) return null
    if (country === "") return null
    
    return (
        <li className="countries-list__country"><button className="country-list__country-selector" onClick={() => setCountry(country)}>{country.name.common}</button></li>
    )
}

export default SearchResult