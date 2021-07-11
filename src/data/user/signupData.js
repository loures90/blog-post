import connection from "../../connection.js";

const signupData = async (user) => {
    try {
        await connection.raw(`
            INSERT INTO users (id, name, username, password) 
            VALUES ("${user.id}","${user.name}","${user.username}","${user.password}" );
        `)
        const message='Signup succeed'
        return message
    } catch (error) {
        throw error
    }
}
export default signupData;