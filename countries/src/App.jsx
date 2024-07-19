import { useState, useEffect } from 'react'
// Components
import Country from './components/Country'
import Search from './components/Search'
// Services
import countriesData from './services/countriesData'

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


  const renderBody = () => {
    if (countries === null) {
      return (
        <h1>Loading data, please wait</h1> 
      )
    }
    return (
      <>
        <header>
          <Search countries={countries} setCountry={setCountry}/>
        </header>
        <main>
          <Country country={country}/>
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
