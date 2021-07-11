const editPostBusiness = async (post, token, editPostData, verifyToken) => {
    try {
        // Validando Token
        verifyToken(token)
        
        //Validate inputs
        if (!post.id || post.id == "")
            throw new Error("Id not valid")
        if (!post.title || post.title == "")
            throw new Error('Title is not valid')
        if (!post.content || post.content == "")
            throw new Error('Content is not valid')
        if (!post.slug || post.slug == "")
            throw new Error('Slug is not valid')

        // O usuário pode alterar posts de terceiros
        const result = await editPostData(post)
        //check if post was updated
        if (result.affectedRows < 1)
            throw new Error('Post not found')

        return 'Success'
    } catch (error) {
        throw error
    }
}
export default editPostBusiness;
