import axios from 'axios'

const api = axios.create({
  baseURL: 'http://ws.audioscrobbler.com/2.0/',
  params: {
    api_key: '010aa297f459645dcd176f4c357c3e5d',
    format: 'json'
  }
})

export default api