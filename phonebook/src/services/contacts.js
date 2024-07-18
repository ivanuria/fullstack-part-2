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

export default { getAll }