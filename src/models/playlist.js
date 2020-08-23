const url = `http://localhost:3001/api/v1`

export default class PlaylistModel {
    static all = async () => {
      // return fetch(`${url}`)
      //   .then(res => res.json())
        try {
          const response = await fetch(`${url}`)
          const playlists = await response.json()
          return playlists
        } catch (error) {
            console.log(error)
        }
    }
    static show = async (id) => {
      // return fetch(`${url}/${id}`)
      //   .then(res => res.json())
        try {
            const response = await fetch(`${url}/playlist/${id}`)
            const playlist = await response.json()
            return playlist
        } catch (error) {
            console.log(error)
        }
    }
}