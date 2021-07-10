import idGenerator from '../../services/generateId.js'

const createPostBusiness = async (post, createPostData, verifyToken) => {
    try {
        // Validando Token
        post.created_by = verifyToken(post.token)
        if (!post.created_by)
            throw new Error('Forbidden')
        if (!post.title || post.title == "")
            throw new Error('Title is not valid')
        if (!post.content || post.content == "")
            throw new Error('Content is not valid')
        if (!post.slug || post.slug == "")
            throw new Error('Slug is not valid')
        post.id = idGenerator()
        return createPostData(post)
    } catch (error) {
        throw error
    }
}
export default createPostBusiness;