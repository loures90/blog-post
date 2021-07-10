import signupBusiness from "../../business/user/signupBusiness.js";
import signupData from "../../data/user/signupData.js";


async function signupController (req,res) {
    try {
    const result = await signupBusiness(req.body, signupData)
        res.status(201).send(result)
    } catch (error) {
        res.status(400).send({error:error.message})
    }
}
export default signupController;