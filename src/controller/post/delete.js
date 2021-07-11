import deletePostBusiness from "../../business/post/delete.js";
import deletePostData from "../../data/post/delete.js";
import { verifyToken } from "../../services/authenticator.js";

async function deletePostContoller(req, res) {
    try {
        const id = req.body.id
        const token = req.headers.authorization
        const result = await deletePostBusiness(id, token, deletePostData, verifyToken)
        res.status(200).send({ message: result })
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
}
export default deletePostContoller;