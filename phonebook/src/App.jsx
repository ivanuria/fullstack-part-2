import { useState } from 'react'

import AddPhone from './components/AddPhone'
import ContactList from './components/ContactList'

const App = () => {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "Persephone"
    }
  ])

  const addToPhoneBook = (contact) => {
    setContacts(contacts.concat({...contact, id:contacts.length+1}))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <AddPhone setter={addToPhoneBook} />
      <ContactList contacts={contacts} />
    </div>
  )
}

export default App
