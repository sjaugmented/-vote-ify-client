const axios = require('axios')
const url = process.env.REACT_APP_API_URL

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
    static update = async (post) => {
        console.log('POST>>>', post)
        try {
            const updatedPost = await axios.put(`${url}/posts/${post._id}`, post)
            return updatedPost
        } catch (error) {
            console.log(error)
        }
    }
    static delete = async (post) => {
        try {
            const deletedPost = await axios.delete(`${url}/posts/${post}`, {
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