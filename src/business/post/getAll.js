const getAllPostsBusiness = async (token, getAllPostsData, verifyToken) => {
    try {
        // Validando Token
        if (!verifyToken(token))
            throw new Error('Forbidden')

        return await getAllPostsData()
    } catch (error) {
        throw error
    }
}
export default getAllPostsBusiness;