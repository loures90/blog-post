import getPostBusiness from "../../business/post/getPost.js";
import getPostData from "../../data/post/getPost.js";
import { verifyToken } from "../../services/authenticator.js";

async function getPostContoller(req, res) {
    try {
        const id = req.params.id
        const token = req.headers.authorization
        const result = await getPostBusiness(id,token, getPostData, verifyToken)
        res.status(200).send(result)
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
}
export default getPostContoller;