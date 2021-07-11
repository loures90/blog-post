import { generateToken } from '../../services/authenticator.js'
import loginBusiness from "../../business/user/loginBusiness.js";
import loginData from "../../data/user/loginData.js";

async function loginController(req, res) {
    try {
        const result = await loginBusiness(req.body, loginData, generateToken)
        res.status(201).send({ token: result })
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
}
export default loginController;