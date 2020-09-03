import apiUrl from '../apiConfig'
import axios from 'axios'

export const newSystem = (padId, title) => {
  console.log(padId, title.title)
  return axios({
    url: apiUrl + '/paddocks/' + padId,
    method: 'POST',
    data: {
      paddock: {
        systems: {
          title: title.title
        }
      }
    }
  })
}

export const allSteps = (padId, sysId) => {
  console.log('All steps request')
  console.log('padId', padId, sysId)
  return axios({
    url: apiUrl + '/paddocks/' + padId + '/systems/' + sysId,
    method: 'GET'
  })
}

export const patchSystem = (padId, title, sysId) => {
  console.log(padId, title, sysId)
  return axios({
    url: apiUrl + '/paddocks/' + padId + '/systems/' + sysId,
    method: 'PATCH',
    data: {
      paddock: {
        system: {
          title: title
        }
      }
    }
  })
}

export const deleteSystem = (padId, token) => {
  console.log('here in the delete api call')
  return axios({
    url: apiUrl + '/paddocks/' + padId,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + token
    }
  })
}
