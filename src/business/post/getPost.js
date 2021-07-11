const getPostBusiness = async (id, token, getPostData, verifyToken) => {
    try {
        // Validando Token
        if (!verifyToken(token))
            throw new Error('Forbidden')
        if (!id)
            throw new Error("Id not valid")
        const post = await getPostData(id)
        if (!post.length)
            throw new Error("Post not found")
        return post
    } catch (error) {
        throw error
    }
}
export default getPostBusiness;