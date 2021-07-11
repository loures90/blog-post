'use strict'
import assert from 'assert';
import createPostBusiness from "../../src/business/post/create.js"
import getAllPostsBusiness from "../../src/business/post/getAll.js"
import { createPostDataMock, createPostDataMockError, getAllPostsDataMock, getAllPostsDataMockError, verifyTokenMock, verifyTokenMockError } from '../mock/postMock.js';

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

    describe("GET ALL POST", () => {
        it("Should return an error because it has no token", async () => {
            try {
                await getAllPostsBusiness("", getAllPostsDataMock, verifyTokenMock)
            } catch (error) {
                assert.equal(error.message, 'Invalid token')
            }
        })
        it("Should return an sql error", async () => {
            try {
                const token='token'    
                await getAllPostsBusiness(token, getAllPostsDataMockError, verifyTokenMock)
            } catch (error) {
                assert.equal(error.message, 'SQL ERROR')
            }
        })
        it("Should return an array of posts", async () => {
            const token='token'    
            const res = await getAllPostsBusiness(token, getAllPostsDataMock, verifyTokenMock)
                assert.equal(res.length, 2)
                assert.equal(res[0].id, 'abc123')
        })
    })
})