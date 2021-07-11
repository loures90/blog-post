const getAllPostsBusiness = async (token, getAllPostsData, verifyToken) => {
    try {
        // Validando Token
        verifyToken(token)

        return await getAllPostsData()
    } catch (error) {
        throw error
    }
}
export default getAllPostsBusiness;