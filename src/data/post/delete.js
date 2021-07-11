import connection from "../../connection.js";

const deletePostData = async (id) => {
    try {
        const result = await connection.raw(`
            DELETE FROM blog_post WHERE id = "${id}";
        `)
        return result[0]
    } catch (error) {
        throw error
    }
}
export default deletePostData;