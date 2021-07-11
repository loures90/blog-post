const editPostBusiness = async (post, token, createPostData, verifyToken) => {
    try {
        // Validando Token
        if (!verifyToken(token))
            throw new Error('Forbidden')
        // Validando inputs

        return await editPostData(post)
    } catch (error) {
        throw error
    }
}
export default editPostBusiness;