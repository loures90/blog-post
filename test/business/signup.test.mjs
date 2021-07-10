'use strict'

import assert from 'assert';
import signupBusiness from '../../src/business/user/signup.js';
import { saveUserError, saveUserSuccess } from '../mock/saveUserMock.js';

describe("USER", () => {
    describe("Signup user", () => {
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

            const res= await signupBusiness(user, saveUserSuccess)
            assert.equal(res, 'SLQ ERROR')

        })
    })
})