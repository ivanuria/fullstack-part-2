import axios from "axios"
const baseUrl = "https://api.openweathermap.org/data/2.5/weather"

const getCurrent = (lat, lon) => {
    const apiKey = import.meta.env.VITE_OPENWEATHER
    return axios
        .get(`${baseUrl}?lat=${lat}&lon=${lon}&appid=${apiKey}`)
        .then(request => request.data)
}

export default { getCurrent }