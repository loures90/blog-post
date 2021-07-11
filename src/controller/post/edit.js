import { verifyToken } from "../../services/authenticator.js";
import editPostData from '../../data/post/edit.js'
import editPostBusiness from "../../business/post/edit.js";

async function editPostContoller(req, res) {
    try {
        const post = req.body
        const token = req.headers.authorization
        const result = await editPostBusiness(post, token, editPostData, verifyToken)
        res.status(200).send({ message: result })
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
}
export default editPostContoller;