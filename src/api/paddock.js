import apiUrl from '../apiConfig'
import axios from 'axios'

export const newPaddock = (userId, data) => {
  return axios({
    url: apiUrl + '/paddocks',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + userId
    },
    data
  })
}
