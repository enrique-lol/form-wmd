import apiUrl from '../apiConfig'
import axios from 'axios'

// Show/Index Article //////////////////////////////////////////////////////////
export const indexArt = () => {
  return axios({
    url: apiUrl + '/articles',
    method: 'GET'
  })
}

// Create an Article //////////////////////////////////////////////////////////
export const newArt = (article) => {
  return axios({
    url: apiUrl + '/articles',
    method: 'POST',
    data: { article }
  })
}
// cle ////////////////////////////////////////////////////////
export const retreiveArticles = (array) => {
  console.log(`ARRAY:${array}`)
  return axios({
    url: apiUrl + '/select-articles',
    method: 'GET',
    data: { array }
  })
}

// Show/Index Article //////////////////////////////////////////////////////////
export const getArticle = (id) => {
  return axios({
    url: apiUrl + '/articles/' + id,
    method: 'GET'
  })
}
// //////////////////////////////

export const articleUpdate = (id, article) => {
  return axios({
    url: apiUrl + '/articles/' + id,
    method: 'PATCH',
    data: { article: article }
  })
}
