import { useState, useDeferredValue } from "react"
// Components
import SearchResults from "./SearchResults"

const Search = ({ countries, country, setCountry }) => {
    const [filter, setFilter] = useState("")
    const executeFilter = () => {
        let filteredCountries = [];
        if (filter !== "" && filter !== null) {
            filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()))
        }
        return filteredCountries
    }
    const filteredCountries = useDeferredValue(executeFilter(), null)

    return (
        <div className="search">
            <label className="search__label" htmlFor="search" >Find the country: </label>
            <input className="search__input" value={filter} name="search" id="search" onChange={(event) => setFilter(event.target.value)} autoComplete="off"/>
            <div className="search__results">
                <SearchResults countries={filteredCountries} setCountry={setCountry} />
            </div>
        </div>
    )
}

export default Search