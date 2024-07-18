import { useState, useEffect } from 'react'
import axios from "axios"
import AddPhone from './components/AddPhone'
import ContactList from './components/ContactList'

const App = () => {
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:3001/contacts")
      .then(response => setContacts(response.data))
  }, [])

  const addToPhoneBook = (contact) => {
    setContacts(contacts.concat(contact))
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <h2>Add new</h2>
      <AddPhone setter={addToPhoneBook} contacts={contacts}/>        
      <h2>Contact List</h2>
      <ContactList contacts={contacts} />
    </div>
  )
}

export default App
