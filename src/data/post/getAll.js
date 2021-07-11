import connection from "../../connection.js";

const getAllPostsData = async () => {
    try {
        const result = await connection.raw(`
        SELECT * FROM blog_post;
        `)
        return result[0]
    } catch (error) {
        throw error
    }
}
export default getAllPostsData;