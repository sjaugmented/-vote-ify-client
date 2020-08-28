const axios = require('axios')
const url = 'http://localhost:3001/api/v1'

export default class PostModel {
    static create = async (data) => {
        try {
            const newPost = await axios.post(`${url}/posts/${data.urlId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data.song)
            })
            return newPost
        }
        catch (error) {
            console.log(error)
        }
    }

    static show = async (id) => {
        try {
            return await axios.get(`${url}/posts/${id}`)
        } catch (error) {
            console.log(error)
        }
    }

    static update = async (post) => {
        try {

        } catch (error) {
            console.log(error)
        }
    }
    static delete = async (post) => {
        try {

        } catch (error) {
            console.log(error)
        }
    }
}