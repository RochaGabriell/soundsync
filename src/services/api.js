import axios from 'axios'

const api = axios.create({
  baseURL: 'http://ws.audioscrobbler.com/2.0/',
  params: {
    api_key: '',
    format: 'json'
  }
})

export default api