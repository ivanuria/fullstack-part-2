import { useState } from 'react'

import AddPhone from './components/AddPhone'
import ContactList from './components/ContactList'

const App = () => {
  const [contacts, setContacts] = useState([
    {
      name: "Persephone",
      phone: "+34 666 777 666"
    },
    {
      name: "Hades",
      phone: "You better don't call me"
    },
    {
      name: "Zeus",
      phone: "+34 777 666 777"
    },
    {
      name: "Europa",
      phone: "+34 767 676 767"
    },
    {
      name: "Scott Summers",
      phone: "+1 (212) 555 65 45"
    },
    {
      name: "Alex Summers",
      phone: "+1 (212) 555 22 15"
    }
  ])

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
