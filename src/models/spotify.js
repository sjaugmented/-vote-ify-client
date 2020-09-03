const axios = require('axios')

const searchURL = `https://api.spotify.com/v1/search`
const playlistURL = 'https://api.spotify.com/v1/playlists/37i9dQZF1DX0XUsuxWHRQd/tracks' //test fetch

class Spotify {
    static search = async (info) => {
      try {
        const newSearch = await axios.get(`${searchURL}?query=${info.searchValue}&type=track,artist&limit=10&popularity=100&include_external=audio/`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + info.accessToken
            }
        })
        return newSearch
    } 
      catch (error) {
        console.log(error)
      }
    }

    static playlist = async (accessToken) => {
      console.log(accessToken)
        try {
            const playlist = await axios.get(playlistURL, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + accessToken
                }
            })

            return playlist
        }
        catch (error) {
            console.log('SPOTIFY.JS error:', error)
        }
    }
}

export default Spotify;