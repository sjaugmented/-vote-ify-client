// API's
const local = 'http://localhost:3001/api/v1'
const heroku = 'https://spotify-us-api.herokuapp.com/api/v1'

export default class PlaylistModel {
    static all = async () => {
        try {
            const response = await fetch(`${local}`)
            const playlists = await response.json()
            return playlists
        } catch (error) {
            console.log(error)
        }
    }
    static show = async (playlistId) => {
        try {
            const response = await fetch(`${local}/playlist/${playlistId}`)
            const playlist = await response.json()
            return playlist
        } catch (error) {
            console.log(error)
        }
    }




    
} 

