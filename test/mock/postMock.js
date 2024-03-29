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
    if (id != "abc123")
        return []
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

export const getPostDataMockError = (id) => {
    throw { message: "SQL ERROR" }
}

export const deletePostDataMockError = (id) => {
    throw { message: "SQL ERROR" }
}

export const deletePostDataMock = (id) => {
    if (id != "abc123")
        return { "affectedRows": 0 }
    return { "affectedRows": 1 }

}
export const editPostDataMockError = (id) => {
    throw { message: "SQL ERROR" }
}

export const editPostDataMock = (post) => {
    if (post.id != "abc123")
        return { "affectedRows": 0 }
    return { "affectedRows": 1 }

}