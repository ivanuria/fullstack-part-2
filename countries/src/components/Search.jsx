import { useState, useDeferredValue, useEffect } from "react"
// Components
import SearchResults from "./SearchResults"

const Search = ({ countries, setCountry }) => {
    const [filter, setFilter] = useState("")
    const executeFilter = () => {
        let filteredCountries = []
        if (filter !== "" && filter !== null) {
            filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()))
        }
        return filteredCountries
    }
    const filteredCountries = useDeferredValue(executeFilter(), [])

    useEffect(() => {
        if (filteredCountries.length === 1) {
            setCountry(filteredCountries[0])
        }
    }, [filteredCountries]) // This fixes a disturbing console error

    return (
        <div className="search">
            <label className="search__label" htmlFor="search" >Find the country: </label>
            <div className="search-input">
                <input className="search__input" value={filter} name="search" id="search" onChange={(event) => setFilter(event.target.value)} autoComplete="off"/>            
                <SearchResults countries={filteredCountries} setCountry={setCountry} />
            </div>
        </div>
    )
}

export default Search