const Contact = (props) => {
    console.log(props)
    const { contact, remove } = props
    return (
        <li><b>{contact.name}</b>: {contact.phone} <button onClick={() => remove(contact.id)} >Delete</button></li>
    )
}

export default Contact