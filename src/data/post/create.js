import connection from "../../connection.js";

const createPostData = async (post) => {
    try {
        await connection.raw(`
            INSERT INTO blog_post (id, title, content, slug, created_by) 
            VALUES ("${post.id}","${post.title}","${post.content}","${post.slug}","${post.created_by}" );
        `)
        const message = 'Post creation succeed'
        return message
    } catch (error) {
        throw error
    }
}
export default createPostData;