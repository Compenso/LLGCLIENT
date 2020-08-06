import apiUrl from '../apiConfig'
import axios from 'axios'

export const newPaddock = (userId, title) => {
  return axios({
    url: apiUrl + '/paddocks',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + userId
    },
    data: {
      title: title
    }
  })
}

export const indexPaddock = (userId) => {
  return axios({
    url: apiUrl + '/paddocks',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + userId
    }
  })
}
