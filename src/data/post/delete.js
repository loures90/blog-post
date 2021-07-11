import connection from "../../connection.js";

const deletePostData = async (id) => {
    try {
        await connection.raw(`
            DELETE FROM blog_post WHERE id = "${id}";
        `)
        const message = 'Success'
        return message
    } catch (error) {
        throw error
    }
}
export default deletePostData;