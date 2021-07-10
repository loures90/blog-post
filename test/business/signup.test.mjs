'use strict'

import assert from 'assert';
import loginBusiness from '../../src/business/user/loginBusiness.js';
import signupBusiness from '../../src/business/user/signupBusiness.js';
import { generateTokenMock, loginUserError, loginUserErrorNotFound, loginUserSuccess, saveUserError, saveUserSuccess } from '../mock/userMock.js';

describe("USER", () => {
    describe("SIGNUP", () => {
        it("it should return an error name is not valid", async () => {
            const user = { name: "", username: "blabla", password: "blabla" }
            try {
                await signupBusiness(user, saveUserSuccess)
            } catch (error) {
                assert.equal(error.message, 'Name is not valid')
            }
        })
        it("it should return an error name is not valid", async () => {
            const user = { name: "bla bla", username: "", password: "blabla" }
            try {
                await signupBusiness(user, saveUserSuccess)
            } catch (error) {
                assert.equal(error.message, 'Username is not valid')
            }
        })
        it("it should return an error password is not valid", async () => {
            const user = { name: "bla bla", username: "blabla", password: "" }
            try {
                await signupBusiness(user, saveUserSuccess)
            } catch (error) {
                assert.equal(error.message, 'Password is not valid')
            }
        })
        it("it should return an error password is not valid", async () => {
            const user = { name: "bla bla", username: "blabla", password: "12345" }
            try {
                await signupBusiness(user, saveUserSuccess)
            } catch (error) {
                assert.equal(error.message, 'Password is not valid')
            }
        })
        it("it should return sql Error", async () => {
            const user = { name: "bla bla", username: "blabla", password: "validPassword" }
            try {
                await signupBusiness(user, saveUserError)
            } catch (error) {
                assert.equal(error.message, 'SLQ ERROR')
            }
        })
        it("it should succes for signup", async () => {
            const user = { name: "bla bla", username: "blabla", password: "validPassword" }

            const res = await signupBusiness(user, saveUserSuccess)
            assert.equal(res, 'Signup succeed')

        })
    })

    describe("LOGIN", () => {
        it("it should return an error username is not valid", async () => {
            const login = { username: "", password: "validPassword" }
            try {
                await loginBusiness(login, loginUserSuccess, generateTokenMock)
            } catch (error) {
                assert.equal(error.message, 'Username not valid')
            }
        })
        it("it should return an error Passoword is empty", async () => {
            const login = { username: "username", password: "" }
            try {
                await loginBusiness(login, loginUserSuccess, generateTokenMock)
            } catch (error) {
                assert.equal(error.message, 'Password not valid')
            }
        })
        it("it should return an error password is too short", async () => {
            const login = { username: "username", password: "123" }
            try {
                await loginBusiness(login, loginUserSuccess, generateTokenMock)
            } catch (error) {
                assert.equal(error.message, 'Password not valid')
            }
        })
        it("it should return an error from database ", async () => {
            const login = { username: "username", password: "validPassword" }
            try {
                await loginBusiness(login, loginUserError, generateTokenMock)
            } catch (error) {
                assert.equal(error.message, 'SLQ ERROR')
            }
        })
        it("it should return Not found because user does not exist", async () => {
            const login = { username: "username", password: "validPassword" }
            try {
                await loginBusiness(login, loginUserErrorNotFound, generateTokenMock)
            } catch (error) {
                assert.equal(error.message, 'Not found')
                assert.equal(error.status, 404)
            }
        })
        it("Should return forbidden for invalid credentials", async () => {
            const login = { username: "username", password: "validPassword" }
            try {
                const token = await loginBusiness(login, loginUserSuccess, generateTokenMock)
            } catch (error) {
                assert.equal(error.message, 'Forbidden')
            }
        })
        it("it should a token for a valid user credential", async () => {
            const login = { username: "username", password: "validPassword" }
                const result = await loginBusiness(login, loginUserSuccess, generateTokenMock)
                assert.equal(result.token, 'token')
        })
    })
})