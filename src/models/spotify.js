const tracks = "https://api.spotify.com/v1/tracks"

const show = async () => {
    try {
        const tracks = await fetch(tracks)
        const response = await response.json()
        return(response)
    } catch(erro) {
        console.log(error)
    }
}