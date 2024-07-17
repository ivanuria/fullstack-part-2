import { useState } from "react"

const AddPhone = ({ setter, contacts }) => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const contactsNames = contacts.map(contact => contact.name.toLowerCase())

    const checkDuplicatedName = () => {
        if (contactsNames.includes(name.toLowerCase())) return true
        return false
    }

    const addPhone = (event) => {
        event.preventDefault()
        if (checkDuplicatedName()) {
            alert(`${name} is already added to Phonebook`)
            return
        }
        setter({
            name: name,
            phone: phone
        })
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