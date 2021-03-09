import axios from 'axios'

const api = axios({
    baseURL: `http://api.weatherapi.com/v1/current.json?key=${process.env.MAP_KEY}`
})

export default api
