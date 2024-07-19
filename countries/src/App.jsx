import { useState, useEffect } from 'react'
import Search from './components/Search'

const App = () => {
  const [countries, setCountries] = useState(null)
  const [country, setCountry] = useState(null)

  useEffect(() => {
    
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
          <Search />
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
