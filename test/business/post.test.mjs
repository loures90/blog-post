'use strict'
import assert from 'assert';
import createPostBusiness from "../../src/business/post/create.js"
import { createPostDataMock, createPostDataMockError, verifyTokenMock, verifyTokenMockError } from '../mock/postMock.js';

describe("POST", () => {
    describe("CREATE POST", () => {
        it("it should return an error because post has no token", async () => {
            const post = { title: "dfadsfa", content: "blabla", slug: "blabla", created_by: "abc123", }
            try {
                await createPostBusiness(post, createPostDataMock, verifyTokenMock)
            } catch (error) {
                assert.equal(error.message, 'Invalid Token')
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
})