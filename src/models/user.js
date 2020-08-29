const axios = require('axios')
const url = 'https://spotify-us-api.herokuapp.com/api/v1'

export default class UserModel {
    
    static show = async (spotifyId) => {
        const user = await axios.get(`${url}/users/${spotifyId}`)
        return user.data
    }
}