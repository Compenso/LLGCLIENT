import apiUrl from '../apiConfig'
import axios from 'axios'

export const newStep = (padId, title) => {
  console.log(padId, title.title)
  return axios({
    url: apiUrl + '/paddocks/' + padId,
    method: 'POST',
    data: {
      paddock: {
        steps: {
          title: title.title
        }
      }
    }
  })
}

export const allSteps = (padId, stepId) => {
  console.log('All steps request')
  console.log('padId', padId, stepId)
  return axios({
    url: apiUrl + '/paddocks/' + padId + '/steps/' + stepId,
    method: 'GET'
  })
}

export const patchStep = (padId, title, stepId) => {
  console.log(padId, title, stepId)
  return axios({
    url: apiUrl + '/paddocks/' + padId + '/steps/' + stepId,
    method: 'PATCH',
    data: {
      paddock: {
        step: {
          title: title
        }
      }
    }
  })
}

export const deleteStep = (padId, token) => {
  console.log('here in the delete api call')
  return axios({
    url: apiUrl + '/paddocks/' + padId,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + token
    }
  })
}
