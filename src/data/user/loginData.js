import connection from "../../connection.js";

const loginData = async (username) => {
    try {
        const result = await connection.raw(`
            SELECT * FROM users where username="${username}";
        `)
        return result[0][0]
    } catch (error) {
        throw error
    }
}
export default loginData;