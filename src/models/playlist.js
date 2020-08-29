const url = process.env.REACT_APP_API_URL

export default class PlaylistModel {
    static all = async () => {
        try {
            const response = await fetch(`${url}`)
            const playlists = await response.json()
            return playlists
        } catch (error) {
            console.log(error)
        }
    }
    static show = async (playlistId) => {
        try {
            const response = await fetch(`${url}/playlist/${playlistId}`)
            const playlist = await response.json()
            return playlist
        } catch (error) {
            console.log(error)
        }
    }




    
} 

