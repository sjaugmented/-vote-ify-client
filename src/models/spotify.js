import axios from 'axios'

const tracks = "https://api.spotify.com/v1/tracks"

export default class SpotifyModel{

    static all = async () => {
        try {
            const response = await fetch(tracks)
            const playlists = await response.json()
            return playlists
        } catch (error) {
            console.log(error)
        }
    }

    static create = async (post) => {
        try {
            const newPost = await axios.get(`${url}/posts`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(post)
            })
            console.log(newPost) // TODO: remove
        } catch (error) {
            console.log(error)
        }
    }
}