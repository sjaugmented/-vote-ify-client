const url = 'http://localhost:3001/api/v1'


export default class UserModel {
    // static login = async (data) => {
    //     try {
    //         const response = await fetch(`${spotifyUrl}`)
    //         const spotAuth = await response
    //         return response
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    static create = async (credentials) => {
        try {
            
        } catch (error) {
            console.log(error)
        }
    }
    static logout = async () => {
        try {
            const res = await fetch(`${url}/auth/logout`) 
            return await res.json()
        } catch (error) {
            console.log(error)
        }
    }
}