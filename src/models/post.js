const axios = require('axios')
// API's
const local = 'https://localhost:3000/api/v1'
const heroku = 'https://spotify-us-api.herokuapp.com/api/v1'

export default class PostModel {
    static create = async (data) => {
        try {
            const newPost = await axios.post(`${local}/posts/${data.urlId}`, {
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
    static update = async (post) => {
        try {
            const updatedPost = await axios.put(`${local}/posts/${post._id}`, post)
            return updatedPost
        } catch (error) {
            console.log(error)
        }
    }
    static delete = async (post) => {
        try {
            const deletedPost = await axios.delete(`${local}/posts/${post}`, {
                // method: 'DELETE',
                // headers: {
                //     'Content-Type': 'application/json'
                // }
            })
            console.log('deleted>>>>>', deletedPost)
            //return deletedPost
        } catch (error) {
            console.log(error)
        }
    }
}