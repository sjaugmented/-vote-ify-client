const url = `http://localhost:3001/api/v1`

export default class PlaylistModel {
    static all = async () => {
    //   return fetch(`${url}/playlists`)
    //     .then(res => res.json())
        try {
          const response = await fetch(`${url}/playlists`)
          const playlists = await response.json()
          console.log('playlists', playlists)
        } catch (error) {
            console.log(error)
        }
    }
    static show = async (playlistId) => {
        try {
            const response = await fetch(`${url}/playlists/${playlistId}`)
            const playlist = await response.json()
            console.log('playlist', playlist);
        } catch (error) {
            console.log(error)
        }
    }
}