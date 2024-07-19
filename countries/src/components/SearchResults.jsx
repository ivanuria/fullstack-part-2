import SearchResult from "./SearchResult"

const SearchResults = ({countries, setCountry}) => {
    if (countries.length === 1) {
        setCountry(countries[0])
        return null
    }
    if (countries === null) return null    
    if (countries.length === 0 ) return null
    if (countries.length > 10) {
        return (
            <p>Too Many matches, please narrow your filter</p>
        )
    }    
    return (
        <ul className="country-list">
            {countries.map((country => <SearchResult key={country.name.common} country={country} setCountry={setCountry} /> ))}
        </ul>
    )
}

export default SearchResults