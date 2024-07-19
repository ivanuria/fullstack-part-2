import axios from "axios"

const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api/"

const returnResponse = (url) => (response) => {
    console.log("Response to", url, ": ", response.data)
    return response.data
}

const getAll = () => {
    let url = `${baseUrl}/all`
    return axios
        .get(url)
        .then(returnResponse(url))
}

const getCountry = (countryName) => {
    let url = `${baseUrl}/name/${countryName}`
    return axios
        .get(url)
        .then(returnResponse(url))
}

export default { getAll, getCountry }