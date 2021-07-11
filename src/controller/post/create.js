import createPostBusiness from "../../business/post/create.js";
import createPostData from "../../data/post/create.js";
import { verifyToken } from "../../services/authenticator.js";

async function createPostContoller(req, res) {
    try {
        const post = req.body
        post.token = req.headers.authorization
        const result = await createPostBusiness(post, createPostData, verifyToken)
        res.status(201).send({ message: result })
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
}
export default createPostContoller;