import { useState } from 'react'

import AddPhone from './components/AddPhone'
import ContactList from './components/ContactList'

const App = () => {
  const [contacts, setContacts] = useState([
    {
      name: "Persephone"
    }
  ])

  const addToPhoneBook = (contact) => {
    setContacts(contacts.concat(contact))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <AddPhone setter={addToPhoneBook} contacts={contacts}/>
      <ContactList contacts={contacts} />
    </div>
  )
}

export default App
