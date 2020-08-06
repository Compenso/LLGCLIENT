import apiUrl from '../apiConfig'
import axios from 'axios'

export const newPaddock = (userId, title) => {
  console.log(userId, title.title)
  return axios({
    url: apiUrl + '/paddocks',
    method: 'POST',
    data: {
      paddock: {
        title: title.title,
        owner: userId
      }
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
