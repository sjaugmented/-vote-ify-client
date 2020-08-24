const url = `http://localhost:3001/api/v1`

export default class PlaylistModel {
    static all = async () => {
    //   return fetch(`${url}/playlists`)
    //     .then(res => res.json())
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