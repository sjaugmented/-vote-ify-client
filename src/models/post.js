const axios = require('axios')
const url = 'http://localhost:3001/api/v1'

export default class PostModel {
    static create = async (data) => {
        console.log('data.uid>>>>', data.urlId)
        console.log('data.song>>>>', data.song)
        try {
            const newPost = await axios.post(`${url}/posts/${data.urlId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data.song)
            })
            console.log('newPost>>>>', newPost)
            return newPost
            //     .then(res => {    // TODO: possibly refactor?
            //   console.log(res)
            //   res.json()
            //})
        } 
        catch (error) {
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