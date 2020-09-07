const axios = require('axios')
// API's
const local = 'http://localhost:3001/api/v1'
const heroku = 'https://spotify-us-api.herokuapp.com/api/v1'

export default class UserModel {
    
    static show = async (spotifyId) => {
        console.log(spotifyId);
        const user = await axios.get(`${local}/users/${spotifyId}`)
        return user.data
    }
}