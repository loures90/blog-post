import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config()

export const generateToken = (id) => {
    return(
        jwt.sign({
            data: id
        },
            process.env.JWT_KEY, { expiresIn: '1h' })
    )
}

export const verifyToken = (token) => {
    try {
        return jwt.verify(token, process.env.JWT_KEY).data
    } catch (error) {
        throw new Error("Invalid token")
    }
}