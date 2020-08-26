const axios = require('axios')
const url = 'http://localhost:3001/api/v1'

export default class PostModel {
    static create = async (post) => {
        try {
            const newPost = await axios.get(`${url}/posts`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(post)
            })
            console.log(newPost) // TODO: remove
            return await newPost.json()
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