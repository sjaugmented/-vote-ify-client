const axios = require('axios')
const apiUrl = 'http://localhost:3001/api/v1'

export default class PostModel {
    static create = async (data) => {
        try {
            const newPost = await axios.post(`${apiUrl}/posts/${data.urlId}`, {
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
        console.log('POST>>>', post)
        try {
            const updatedPost = await axios.put(`${apiUrl}/posts/${post._id}`, post)
            return updatedPost
        } catch (error) {
            console.log(error)
        }
    }
    static delete = async (post) => {
        try {
            const deletedPost = await axios.delete(`${apiUrl}/posts/${post}`, {
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