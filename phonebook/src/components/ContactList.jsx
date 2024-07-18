import { useState } from "react"
import Contact from "./Contact"
import Filter from "./Filter"

const ContactList = ({ contacts, removeContact }) => {
    const [filter, setFilter] = useState("")

    let filteredContacts = contacts;
    if (filter != "") filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
    
    console.log("Filtered Contacts", filteredContacts)

    return (
        <div>
            <Filter setter={setFilter} filter={filter} />
            <ul>
                {filteredContacts.map(contact => <Contact key={contact.id} contact={contact} remove={removeContact} />)}
            </ul>
        </div>
    )
}

export default ContactList