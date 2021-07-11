import connection from "../../connection.js";

const editPostData = async (post) => {
    try {
        await connection.raw(`
        UPDATE blog_post  
        SET title = "${post.title}", content="${post.content}", slug="${post.slug}"
        WHERE id = "${post.id}";
        `)
        const message = 'Success'
        return message
    } catch (error) {
        throw error
    }
}
export default editPostData;