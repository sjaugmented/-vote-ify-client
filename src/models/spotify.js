const axios = require('axios')

const searchURL = `https://api.spotify.com/v1/search`
const playlistURL = 'https://api.spotify.com/v1/playlists/37i9dQZF1DX0XUsuxWHRQd/tracks' //test fetch

class Spotify {
    static search = async (data) => {
      try {
        const newSearch = await axios.get(`${searchURL}?query=${data.search}&type=track,artist&limit=25&popularity=100&include_external=audio`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + data.token
            }
        })
        return newSearch
    } 
      catch (error) {
        console.log(error)
      }
    }
  
  
     

    static playlist = async (token) => {
      console.log(token)
        console.log('SPOTIFY.JS - running playlist');
        try {
            console.log('SPOTIFY.JS - inside TRY block');

            const playlist = await axios.get(playlistURL, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
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

