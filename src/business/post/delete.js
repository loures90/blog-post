const deletePostBusiness = async (id, token, createPostData, verifyToken) => {
    try {
        // Validando Token
        if (!verifyToken(token))
            throw new Error('Forbidden')
        return await deletePostData(post)
    } catch (error) {
        throw error
    }
}
export default deletePostBusiness;