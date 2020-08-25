const axios = require('axios')

const searchURL = `https://api.spotify.com/v1/search`
const playlistURL = 'https://api.spotify.com/v1/playlists/37i9dQZF1DX0XUsuxWHRQd/tracks' //test fetch

class Spotify {
    static search = async (token) => {
        try {
            const newSearch = await axios.get(`${searchURL}`, {
                method: 'GET',
                headers: {
                    'Conetent-Type': 'application/json',
                    'Authorization': 'Bearer' + token
                }
            })
        } 
        catch (error) {
            console.log(error)
        }
    }

    static playlist = async (token) => {
        try {
            const getPlaylist = await axios.get(playlistURL, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer' + token
                }, 
                // body: JSON.stringify()
            })
        }
        catch (error) {
            console.log(error)
        }
    }
}


export default Spotify;

