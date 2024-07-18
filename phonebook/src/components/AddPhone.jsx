import { useState } from "react"

const AddPhone = ({ setter, updater, contacts }) => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")

    const checkDuplicatedName = () => {
        console.log("Check if", name, "in", contacts)
        const contact = contacts.find(contact => name.toLowerCase() === contact.name.toLowerCase())
        if (contact !== undefined) {
            console.log("Id", contact.id)
            return contact.id
        }
    }

    const addPhone = (event) => {
        event.preventDefault()
        const id = checkDuplicatedName();
        if (id !== undefined) {            
            updater(id, {name, phone, id })
        } else {
            setter({ name, phone })
        }
        setName("")
        setPhone("")
    }

    return (
        <form onSubmit={addPhone}>
            <div>
                <label htmlFor="name">Name: </label><input name="name" id="name" value={name} onChange={(event) => setName(event.target.value)}/>
            </div>
            <div>
                <label htmlFor="phone">Phone: </label><input name="phone" id="phone" value={phone} onChange={(event) => setPhone(event.target.value)}/>
            </div>
            <div>
                <button type="submit">Add to phonebook</button>
            </div>
        </form>
    )
}

export default AddPhone