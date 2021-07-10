'use strict'
import assert from 'assert';
import { generateToken, verifyToken } from '../src/services/authenticator.js';
import idGenerator from '../src/services/generateId.js';
import { hashCompare, hashCreator } from '../src/services/hashManager.js';

describe('SERVICES', () => {
    describe('Id generator', () => {
        it('should return an uuid', () => {
            assert.equal(typeof idGenerator(), 'string')
        })
    })
    describe('Token Generator', () => {
        const id = 'abc123'
        it('should generate a token and then verify it', () => {
            const token = generateToken(id)
            const result = verifyToken(token)
            assert.equal(result, 'abc123')
        })
        it('should verify a not valid token', () => {
            try {
                const result = verifyToken("Token invalid")
                assert.equal(result, { error: 'jwt malformed' })

            } catch (error) {
                assert.equal(error.message, 'Invalid token')
            }
        })
    })
    describe('Hash Manager', () => {
        let hash =''
        let compare =''
        it('should generate a hashManager ', async () => {
            hash = await hashCreator("Hello World")
            assert.equal(typeof hash, 'string')
            assert.equal(hash !== "Hello World", true)
        })
        it('should  recover the original word', async () => {
            compare= await hashCompare("Hello World",hash)
            assert.equal(compare, true)
        })
        it('should return empty for an invalid hash', async () => {
            const hash = await hashCreator("Hello World")
            const word = await hashCompare("wrong hash",hash)
            assert.equal(word, false)
        })
    })
})