import axios from 'axios'
import { Notify } from '../helpers/toast'

const http = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon',
  headers: {
    'Content-Type': 'application/json',
  },
})

http.interceptors.response.use(
  (res) => {
    return res
  },
  (error) => {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx

      if (error.response.data?.message) {
        // show global toast message
        Notify({
          icon: 'error',
          title: error.response.data.message,
        })
      }
      throw error.response.data
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js

      console.log('request')

      Notify({
        icon: 'error',
        title: 'There was an error fetching data. Please try again',
      })

      throw error.request
    } else {
      // Something happened in setting up the request that triggered an Error

      Notify({
        icon: 'error',
        title: error.message,
      })

      // show toast message
      throw error
    }
  },
)

export default http
