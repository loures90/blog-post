export const createPostDataMock = (post) => {
    return 'Post Creation Succeed'
}
export const createPostDataMockError = (post) => {
    throw { message: "SQL ERROR" }
}
export const verifyTokenMock = (token) => {
    if (token == "token")
        return 'abc123'
    throw { message: "Invalid token" }

}
export const verifyTokenMockError = (token) => {
    throw { message: "Invalid token" }
}
export const getAllPostsDataMock = () => {
    return [
        {
            "id": "abc123",
            "title": "title",
            "content": "content",
            "slug": "slug",
            "created_by": "acb456"
        },
        {
            "id": "def123",
            "title": "title",
            "content": "content",
            "slug": "slug",
            "created_by": "def456"
        }
    ]
}
export const getAllPostsDataMockError = () => {
    throw { message: "SQL ERROR" }
}
export const getPostDataMock = (id) => {
    return [
        {
            "id": "abc123",
            "title": "title",
            "content": "content",
            "slug": "slug",
            "created_by": "acb456"
        },
    ]
}
export const getPostDataMockEmpty = (id) => {
    return []
}