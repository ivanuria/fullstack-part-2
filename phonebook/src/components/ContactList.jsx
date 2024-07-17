const ContactList = ({contacts}) => {
    return (
        <ul>
            {contacts.map(contact => <li key={contact.name}>{contact.name}</li>)}
        </ul>
    )
}

export default ContactList