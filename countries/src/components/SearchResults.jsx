import SearchResult from "./SearchResult"

const SearchResults = ({countries, setCountry}) => {
    if (countries.length === 1) return null
    if (countries === null) return null    
    if (countries.length === 0 ) return null
    if (countries.length > 10) {
        return (
            <div className="search__results">
                <p>Too Many matches, please narrow your filter</p>
            </div>
        )
    }    
    return (
        <div className="search__results">
            <ul className="country-list">
                {countries.map((country => <SearchResult key={country.name.common} country={country} setCountry={setCountry} /> ))}
            </ul>
        </div>
    )
}

export default SearchResults