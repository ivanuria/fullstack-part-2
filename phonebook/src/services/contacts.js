import axios from "axios"

const urlBase = "http://localhost:3001/contacts"

const logError = (name) => (error) => {
    console.log("Contacts", name, error.response.status, error.response.data)
    throw error
}

const getAll = () => {
    return axios
        .get(urlBase)
        .then(response => response.data)
        .catch(logError("getAll"))
}

const add = (newContact) => {
    console.log("Adding new contact", newContact)
    return axios
        .post(urlBase, newContact)
        .then(response => response.data)
        .catch(logError("add"))
}

const remove = (id) => {
    console.log("Removing", id)
    return axios
        .delete(`${urlBase}/${id}`)
        .then(response => response.data)
        .catch(logError("remove"))
}

const update = (id, contact) => {
    console.log("Updating", id, "with", contact)
    return axios
        .put(`${urlBase}/${id}`, contact)
        .then(response => response.data)
        .catch(logError("update"))
}

export default { getAll, add, remove, update }