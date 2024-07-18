import { useState, useEffect } from 'react'
import contactService from "./services/contacts"
import AddPhone from './components/AddPhone'
import ContactList from './components/ContactList'

const App = () => {
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    contactService
      .getAll()
      .then(cantactsData => setContacts(cantactsData))
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
