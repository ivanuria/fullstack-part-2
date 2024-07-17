import { useState } from "react"

const AddPhone = ({setter}) => {
    const [name, setName] = useState("")

    const addPhone = (event) => {
        event.preventDefault()
        setter({
            name: name
        })
        setName("")
    }

    return (
        <form onSubmit={addPhone}>
            <div>
                <label htmlFor="name">Name: </label><input name="name" id="name" value={name} onChange={(event) => setName(event.target.value)}/>
            </div>
            <div>
                <button type="submit">Add to phonebook</button>
            </div>
        </form>
    )
}

export default AddPhone