const deletePostBusiness = async (id, token, deletePostData, verifyToken) => {
    try {
        // Validando Token
        verifyToken(token)
        if (!id || id == "")
            throw new Error('Id not valid')

        // O usuário pode deletar posts de terceiros
        const result = await deletePostData(id)
        if (result.affectedRows < 1)
            throw new Error('Post not found')
        return 'Success'
    } catch (error) {
        throw error
    }
}
export default deletePostBusiness;