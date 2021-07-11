const getPostBusiness = async (id, token, getPostData, verifyToken) => {
    try {
        // Validando Token
        if (!verifyToken(token))
            throw new Error('Forbidden')
        return await getPostData(id)
    } catch (error) {
        throw error
    }
}
export default getPostBusiness;