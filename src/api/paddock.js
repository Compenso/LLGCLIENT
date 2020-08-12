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

export const allPaddocks = (token) => {
  console.log('api line 19')
  return axios({
    url: apiUrl + '/paddocks',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + token
    }
  })
}

export const patchPaddock = (padId, title, token) => {
  console.log(padId, title, token)
  return axios({
    url: apiUrl + '/paddocks/' + padId,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + token
    },
    data: {
      paddock: {
        title: title.title
      }
    }
  })
}

export const deletePaddock = (padId, token) => {
  console.log('here in the delete api call')
  return axios({
    url: apiUrl + '/paddocks/' + padId,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + token
    }
  })
}
