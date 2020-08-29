const axios = require('axios')
const apiUrl = 'https://spotify-us-api.herokuapp.com/api/v1'

export default class UserModel {
    
    static show = async (spotifyId) => {
        const user = await axios.get(`${apiUrl}/users/${spotifyId}`)
        return user.data
    }
}