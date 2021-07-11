import { hashCreator } from "../../src/services/hashManager.js"

export const saveUserSuccess = (user) => {
    return 'Signup succeed'
}
export const saveUserError = (user) => {
    throw new Error("SLQ ERROR")
}

export const loginUserSuccess = (user) => {
    return {id:"abc123", name:"name", username:"username", password: hashCreator("validPassword")}
}
export const loginUserError = (user) => {
    throw new Error("SLQ ERROR")
}
export const loginUserErrorNotFound = (user) => {
    throw {status:404,message:"Not found"}
}
export const generateTokenMock = (user) => {
    return {token:"token"}
}
