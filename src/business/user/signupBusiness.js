import idGenerator from '../../services/generateId.js'
import { hashCreator } from '../../services/hashManager.js'

const signupBusiness = async (user, saveUser) => {
    try {
        if (!user.name || user.name == "") throw new Error("Name is not valid")
        if (!user.username || user.username == "") throw new Error("Username is not valid")
        if (!user.password || user.password == "" || user.password.length <= 6) throw new Error("Password is not valid")
        user.id = idGenerator()
        user.password = hashCreator(user.password)

        const result = await saveUser(user)
        return result
    } catch (error) {
        throw error
    }
}
export default signupBusiness;