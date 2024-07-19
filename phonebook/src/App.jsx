import { useState, useEffect } from 'react'
import contactService from "./services/contacts"
import AddPhone from './components/AddPhone'
import ContactList from './components/ContactList'
import Notification from './components/Notification'
// Helpers
import messageTypes from './helpers/messageTypes'
// CSS
import "./styles/index.css"

const App = () => {
  const [contacts, setContacts] = useState([])
  const [notification, setNotification] = useState({
    message: null,
    type: null
  })

  const addNotification = (message, type) => {
    setNotification({message, type})
    setTimeout(() => {
      setNotification({
        message: null, 
        type: null
      })
    }, 5000)
  }

  useEffect(() => {
    contactService
      .getAll()
      .then(cantactsData => setContacts(cantactsData))
  }, [])

  const addToPhoneBook = (contact) => {
    contactService
      .add(contact)
      .then(savedContact => {
        setContacts(contacts.concat(savedContact))
        addNotification(
          `Added ${contact.name} to phonebook`,
          messageTypes.INFORMATION
        )
      })
  }

  const removeContact = (id) => {
    const index = contacts.findIndex(c => c.id === id)
    console.log("REQUESTED remove Contact", id, "with index", index, "which existence is", contacts[index] !== undefined)
    if (contacts[index] && window.confirm(`Do you really want to delete "${contacts[index].name}"`)) {
      let name = contacts[index].name
      contactService
        .remove(id)
        .then(response => {
          addNotification(
            `Removed ${name} from phonebook`,
            messageTypes.INFORMATION
          )
        })
        .catch(error => {
          addNotification(
            `Contact ${name} has already been removed from server`,
            messageTypes.ERROR
          )
        })
        .finally(() => {
          setContacts(contacts.filter(c => c.id !== id))
        })
    }
  }

  const updateContact = (id, newData) => {
    console.log("REQUESTED contact updating", id, newData)
    if (window.confirm(`${newData.name} is already added to Phonebook. Do you want to update the phone?`)) {
      contactService
        .update(id, newData)
        .then(response => {
          setContacts(contacts.map(c => c.id !== id ? c : newData))
          addNotification(
            `Updated ${newData.name} with new phone ${newData.phone}`,
            messageTypes.INFORMATION
          )
        })
        .catch(error => {
          setContacts(contacts.filter(c => c.id !== id))
          addNotification(
            `Contact ${newData.name} has already been removed from server`,
            messageTypes.ERROR
          )          
        })
    }
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={notification.message} type={notification.type} />
      <h2>Add new</h2>
      <AddPhone setter={addToPhoneBook} contacts={contacts} updater={ updateContact }/>        
      <h2>Contact List</h2>
      <ContactList contacts={contacts} removeContact={removeContact} />
    </div>
  )
}

export default App
