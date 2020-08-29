const axios = require('axios')
const url = process.env.REACT_APP_API_URL

export default class UserModel {
    
    static show = async (spotifyId) => {
        const user = await axios.get(`${url}/users/${spotifyId}`)
        return user.data
    }
}