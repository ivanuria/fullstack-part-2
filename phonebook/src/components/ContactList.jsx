import { useState } from "react"
import Contact from "./Contact"
import Filter from "./Filter"

const ContactList = ({contacts}) => {
    const [filter, setFilter] = useState("")

    let filteredContacts = contacts;
    if (filter != "") filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
    
    return (
        <div>
            <Filter setter={setFilter} filter={filter} />
            <ul>
                {filteredContacts.map(contact => <Contact key={contact.name} contact={contact} />)}
            </ul>
        </div>
    )
}

export default ContactList