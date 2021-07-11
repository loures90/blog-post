import connection from "../../connection.js";

const getPostData = async (id) => {
    try {
        const result = await connection.raw(`
        SELECT * FROM blog_post WHERE id ="${id}";
        `)
        return result[0]
    } catch (error) {
        throw error
    }
}
export default getPostData;