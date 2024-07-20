import { useState, useEffect } from 'react'
// Components
import Country from './components/Country'
import HeaderFlag from './components/HeaderFlag'
import Search from './components/Search'
// Services
import countriesData from './services/countriesData'
// CSS
import "./styles/index.css"

const App = () => {
  const [countries, setCountries] = useState(null)
  const [country, setCountry] = useState(null) 

  useEffect(() => {
    countriesData
      .getAll()
      .then(allCountries => {
        setCountries(allCountries)
      })
  }, [])

  const setCountryHelper = (country) => {
    setCountry(country)
  }

  const renderBody = () => {
    if (countries === null) {
      return (
        <h1>Loading data, please wait</h1> 
      )
    }
    return (
      <>
        <header>
          <div className="content-wrapper">
            
            <Search countries={countries} setCountry={setCountryHelper}/>
          </div>
        </header>
        <main>
          <div className="content-wrapper">
            <Country country={country}/>
          </div>
        </main>
      </>
    )
  }
  return (
    <div className="country-app">
      {renderBody()}
    </div>
  )
}

export default App
