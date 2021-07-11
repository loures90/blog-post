import connection from "../../connection.js";

const editPostData = async (post) => {
    try {
        const result = await connection.raw(`
        UPDATE blog_post  
        SET title = "${post.title}", content="${post.content}", slug="${post.slug}"
        WHERE id = "${post.id}";
        `)
        return result[0]
    } catch (error) {
        throw error
    }
}
export default editPostData;