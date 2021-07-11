import { hashCompare } from "../../services/hashManager.js"

const loginBusiness = async (login, loginData, generateToken) => {
    try {
        //Username é único para cada usuário.
        if (!login.username || login.username == "")
            throw new Error("Username not valid")
        if (!login.password || login.password.length < 6)
            throw new Error("Password not valid")

        const result = await loginData(login.username)

        if (!hashCompare(login.password, result.password))
            throw new Error("Forbidden")
        return generateToken(result.id) 
    } catch (error) {
        throw error
    }
}
export default loginBusiness;