'use strict'
import assert from 'assert';
import createPostBusiness from "../../src/business/post/create.js"
import getAllPostsBusiness from "../../src/business/post/getAll.js"
import getPostBusiness from "../../src/business/post/getPost.js"
import deletePostBusiness from "../../src/business/post/delete.js"
import editPostBusiness from "../../src/business/post/edit.js"

import { createPostDataMock, createPostDataMockError, deletePostDataMock, deletePostDataMockError, editPostDataMock, editPostDataMockError, getAllPostsDataMock, getAllPostsDataMockError, getPostDataMock, getPostDataMockError, verifyTokenMock, verifyTokenMockError } from '../mock/postMock.js';

describe("POST", () => {
    describe("CREATE POST", () => {
        it("it should return an error because post has no token", async () => {
            const post = { title: "dfadsfa", content: "blabla", slug: "blabla", created_by: "abc123", }
            try {
                await createPostBusiness(post, createPostDataMock, verifyTokenMock)
            } catch (error) {
                assert.equal(error.message, 'Invalid token')
            }
        })
        it("it should return an error because post has not valid token", async () => {
            const post = { title: "", content: "blabla", slug: "blabla", created_by: "abc123", token: "token" }
            try {
                await createPostBusiness(post, createPostDataMock, verifyTokenMockError)
            } catch (error) {
                assert.equal(error.message, 'Invalid token')
            }
        })
        it("it should return an error because post has no title", async () => {
            const post = { title: "", content: "blabla", slug: "blabla", created_by: "abc123", token: "token" }
            try {
                await createPostBusiness(post, createPostDataMock, verifyTokenMock)
            } catch (error) {
                assert.equal(error.message, 'Title is not valid')
            }
        })
        it("it should return an error because post has no title", async () => {
            const post = { content: "blabla", slug: "blabla", created_by: "abc123", token: "token" }
            try {
                await createPostBusiness(post, createPostDataMock, verifyTokenMock)
            } catch (error) {
                assert.equal(error.message, 'Title is not valid')
            }
        })
        it("it should return an error because post has no content", async () => {
            const post = { title: "title", content: "", slug: "blabla", created_by: "abc123", token: "token" }
            try {
                await createPostBusiness(post, createPostDataMock, verifyTokenMock)
            } catch (error) {
                assert.equal(error.message, 'Content is not valid')
            }
        })
        it("it should return an error because post has no content", async () => {
            const post = { title: "dfsdfads", slug: "blabla", created_by: "abc123", token: "token" }
            try {
                await createPostBusiness(post, createPostDataMock, verifyTokenMock)
            } catch (error) {
                assert.equal(error.message, 'Content is not valid')
            }
        })
        it("it should return an error because post has no slug", async () => {
            const post = { title: "sdsad", content: "blabla", created_by: "abc123", token: "token" }
            try {
                await createPostBusiness(post, createPostDataMock, verifyTokenMock)
            } catch (error) {
                assert.equal(error.message, 'Slug is not valid')
            }
        })
        it("it should return an error because post has no slug", async () => {
            const post = { title: "dsfadsfa", slug: "", content: "blabla", created_by: "abc123", token: "token" }
            try {
                await createPostBusiness(post, createPostDataMock, verifyTokenMock)
            } catch (error) {
                assert.equal(error.message, 'Slug is not valid')
            }
        })
        it("it should return a sql error", async () => {
            const post = { title: "dsfadsfa", slug: "dafdsafsd", content: "blabla", created_by: "abc123", token: "token" }
            try {
                await createPostBusiness(post, createPostDataMockError, verifyTokenMock)
            } catch (error) {
                assert.equal(error.message, 'SQL ERROR')
            }
        })
        it("it should return success", async () => {
            const post = { title: "dsfadsfa", slug: "dfasdfasd", content: "blabla", created_by: "abc123", token: "token" }
            const res = await createPostBusiness(post, createPostDataMock, verifyTokenMock)
            assert.equal(res, 'Post Creation Succeed')
        })
    })

    describe("GET ALL POSTS", () => {
        it("Should return an error because it has no token", async () => {
            try {
                await getAllPostsBusiness("", getAllPostsDataMock, verifyTokenMock)
            } catch (error) {
                assert.equal(error.message, 'Invalid token')
            }
        })
        it("Should return an sql error", async () => {
            try {
                const token = 'token'
                await getAllPostsBusiness(token, getAllPostsDataMockError, verifyTokenMock)
            } catch (error) {
                assert.equal(error.message, 'SQL ERROR')
            }
        })
        it("Should return an array of posts", async () => {
            const token = 'token'
            const res = await getAllPostsBusiness(token, getAllPostsDataMock, verifyTokenMock)
            assert.equal(res.length, 2)
            assert.equal(res[0].id, 'abc123')
        })
    })

    describe("GET POST", () => {
        it("Should return an error because it has no token", async () => {
            try {
                const id = "abc123"
                await getPostBusiness(id, "", getPostDataMock, verifyTokenMock)
            } catch (error) {
                assert.equal(error.message, 'Invalid token')
            }
        })
        it("Should return an sql error", async () => {
            try {
                const token = 'token'
                const id = "abc123"
                await getPostBusiness(id, token, getPostDataMockError, verifyTokenMock)
            } catch (error) {
                assert.equal(error.message, 'SQL ERROR')
            }
        })
        it("Should return an error id is empty", async () => {
            try {
                const token = 'token'
                const id = ""
                await getPostBusiness(id, token, getPostDataMockError, verifyTokenMock)
            } catch (error) {
                assert.equal(error.message, 'Id not valid')
            }
        })
        it("Should return an array with one post", async () => {
            const token = 'token'
            const id = "abc123"
            const res = await getPostBusiness(id, token, getPostDataMock, verifyTokenMock)
            assert.equal(res.length, 1)
            assert.equal(res[0].id, 'abc123')
        })
        it("Should return an error because this post does not exist", async () => {
            try {
                const token = 'token'
                const id = "aaa222"
                await getPostBusiness(id, token, getPostDataMock, verifyTokenMock)
            } catch (error) {
                assert.equal(error.message, 'Post not found')
            }
        })
    })

    describe("Delete POST", () => {
        it("Should return an error because it has no token", async () => {
            try {
                const id = "abc123"
                await deletePostBusiness(id, "", deletePostDataMock, verifyTokenMock)
            } catch (error) {
                assert.equal(error.message, 'Invalid token')
            }
        })
        it("Should return an sql error", async () => {
            try {
                const token = 'token'
                const id = "abc123"
                await deletePostBusiness(id, token, deletePostDataMockError, verifyTokenMock)
            } catch (error) {
                assert.equal(error.message, 'SQL ERROR')
            }
        })
        it("Should return an error id is empty", async () => {
            try {
                const token = 'token'
                const id = ""
                await deletePostBusiness(id, token, deletePostDataMock, verifyTokenMock)
            } catch (error) {
                assert.equal(error.message, 'Id not valid')
            }
        })
        it("Should return success for a successful deletion", async () => {
            const token = 'token'
            const id = "abc123"
            const res = await deletePostBusiness(id, token, deletePostDataMock, verifyTokenMock)
            assert.equal(res, "Success")
        })
        it("Should return an error because this post does not exist", async () => {
            try {
                const token = 'token'
                const id = "aaa222"
                await deletePostBusiness(id, token, deletePostDataMock, verifyTokenMock)
            } catch (error) {
                assert.equal(error.message, 'Post not found')
            }
        })
    })

    describe("EDIT POST", () => {
        it("it should return an error because post has no token", async () => {
            const post = { id: "abc123", title: "dfadsfa", content: "blabla", slug: "blabla" }
            try {
                await editPostBusiness(post, "", createPostDataMock, verifyTokenMock)
            } catch (error) {
                assert.equal(error.message, 'Invalid token')
            }
        })
        it("it should return an error because post has not valid token", async () => {
            const post = { id: "abc123", title: "", content: "blabla", slug: "blabla" }
            const token = 'token invalid'
            try {
                await editPostBusiness(post, token, createPostDataMock, verifyTokenMockError)
            } catch (error) {
                assert.equal(error.message, 'Invalid token')
            }
        })
        it("it should return an error because post has no id", async () => {
            const post = { id: "", title: "sdfgsdfg", content: "blabla", slug: "blabla" }
            const token = "token"
            try {
                await editPostBusiness(post, token, editPostDataMock, verifyTokenMock)
            } catch (error) {
                assert.equal(error.message, 'Id not valid')
            }
        })
        it("it should return an error because post has no id", async () => {
            const post = { title: "dfsfd", content: "blabla", slug: "blabla" }
            const token = "token"
            try {
                await editPostBusiness(post, token, editPostDataMock, verifyTokenMock)
            } catch (error) {
                assert.equal(error.message, 'Id not valid')
            }
        })
        it("it should return an error because post has no title", async () => {
            const post = { id: "abc123", title: "", content: "blabla", slug: "blabla" }
            const token = "token"
            try {
                await editPostBusiness(post, token, editPostDataMock, verifyTokenMock)
            } catch (error) {
                assert.equal(error.message, 'Title is not valid')
            }
        })
        it("it should return an error because post has no title", async () => {
            const post = { id: "abc123", content: "blabla", slug: "blabla" }
            const token = "token"
            try {
                await editPostBusiness(post, token, editPostDataMock, verifyTokenMock)
            } catch (error) {
                assert.equal(error.message, 'Title is not valid')
            }
        })
        it("it should return an error because post has no content", async () => {
            const post = { id: "abc123", title: "title", content: "", slug: "blabla", created_by: "abc123" }
            const token = "token"
            try {
                await editPostBusiness(post, token, editPostDataMock, verifyTokenMock)
            } catch (error) {
                assert.equal(error.message, 'Content is not valid')
            }
        })
        it("it should return an error because post has no content", async () => {
            const post = { id: "abc123", title: "dfsdfads", slug: "blabla" }
            const token = "token"
            try {
                await editPostBusiness(post, token, editPostDataMock, verifyTokenMock)
            } catch (error) {
                assert.equal(error.message, 'Content is not valid')
            }
        })
        it("it should return an error because post has no slug", async () => {
            const post = { id: "abc123", title: "sdsad", content: "blabla", }
            const token = "token"
            try {
                await editPostBusiness(post, token, editPostDataMock, verifyTokenMock)
            } catch (error) {
                assert.equal(error.message, 'Slug is not valid')
            }
        })
        it("it should return an error because post has no slug", async () => {
            const post = { id: "abc123", title: "dsfadsfa", slug: "", content: "blabla" }
            const token = "token"
            try {
                await editPostBusiness(post, token, editPostDataMock, verifyTokenMock)
            } catch (error) {
                assert.equal(error.message, 'Slug is not valid')
            }
        })
        it("it should return a sql error", async () => {
            const post = { id: "abc123", title: "dsfadsfa", slug: "dafdsafsd", content: "blabla", }
            const token = "token"
            try {
                await editPostBusiness(post, token, editPostDataMockError, verifyTokenMock)
            } catch (error) {
                assert.equal(error.message, 'SQL ERROR')
            }
        })
        it("it should return error because there is not post with the id sent", async () => {
            const post = { id: "aaa222", title: "dsfadsfa", slug: "dfasdfasd", content: "blabla" }
            const token = "token"
            try {
                const res = await editPostBusiness(post, token, editPostDataMock, verifyTokenMock)
            } catch (error) {
                assert.equal(error.message, 'Post not found')
            }
        })
        it("it should return success", async () => {
            const post = { id: "abc123", title: "dsfadsfa", slug: "dfasdfasd", content: "blabla" }
            const token = "token"
            const res = await editPostBusiness(post, token, editPostDataMock, verifyTokenMock)
            assert.equal(res, 'Success')
        })
    })
})