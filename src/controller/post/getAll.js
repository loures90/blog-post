import getAllPostsBusiness from "../../business/post/getAll.js";
import getAllPostsData from "../../data/post/getAll.js";
import { verifyToken } from "../../services/authenticator.js";

async function getAllPostsContoller(req, res) {
    try {
        const token = req.headers.authorization
        const result = await getAllPostsBusiness(token, getAllPostsData, verifyToken)
        res.status(200).send(result)
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
}
export default getAllPostsContoller;