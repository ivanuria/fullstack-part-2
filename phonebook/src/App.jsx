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
    contactService
      .add(contact)
      .then(savedContact => setContacts(contacts.concat(savedContact)))    
  }

  const removeContact = (id) => {
    const index = contacts.findIndex(c => c.id === id)
    console.log("REQUESTED remove Contact", id, "with index", index, "which existence is", contacts[index] !== undefined)
    if (contacts[index] && window.confirm(`Do you really want to delete "${contacts[index].name}"`)) {
      contactService
        .remove(id)
        .then(setContacts(contacts.filter(c => c.id !== id)))
    }
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <h2>Add new</h2>
      <AddPhone setter={addToPhoneBook} contacts={contacts} />        
      <h2>Contact List</h2>
      <ContactList contacts={contacts} removeContact={removeContact} />
    </div>
  )
}

export default App
