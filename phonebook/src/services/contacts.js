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
    return axios
        .post(urlBase, newContact)
        .then(response => response.data)
        .catch(logError("add"))
}

const remove = (id) => {
    console.log("REMOVE", id)
    return axios
        .delete(`${urlBase}/${id}`)
        .then(response => response.data)
        .catch(logError("remove"))
}

export default { getAll, add, remove }