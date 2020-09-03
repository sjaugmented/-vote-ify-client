const apiUrl = 'http://localhost:3001/api/v1'

export default class PlaylistModel {
    static all = async () => {
        try {
            const response = await fetch(`${apiUrl}`)
            const playlists = await response.json()
            return playlists
        } catch (error) {
            console.log(error)
        }
    }
    static show = async (playlistId) => {
        try {
            const response = await fetch(`${apiUrl}/playlist/${playlistId}`)
            const playlist = await response.json()
            return playlist
        } catch (error) {
            console.log(error)
        }
    }




    
} 

