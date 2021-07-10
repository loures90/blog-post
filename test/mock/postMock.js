export const createPostDataMock = (post)=>{
    return 'Post Creation Succeed'
}
export const createPostDataMockError = (post)=>{
    throw {message:"SQL ERROR"}
}
export const verifyTokenMock =(token)=>{
    return 'abc123'
}
export const verifyTokenMockError =(token)=>{
    throw {message:"Invalid token"}
}