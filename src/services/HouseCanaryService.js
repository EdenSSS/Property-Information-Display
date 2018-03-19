import axios from 'axios'

export default {
  fetchPosts () {
    return axios({
      method: 'get',
      url: 'https://cors-anywhere.herokuapp.com/https://api.housecanary.com/v2/property/details?address=7904%20Verde%20Springs%20Dr&zipcode=89128',
      auth: {
        // changed for privacy
        username: '111',
        password: '111'
      }
    })
  }
}
