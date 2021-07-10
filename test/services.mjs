'use strict'
import assert from 'assert';
import { generateToken, verifyToken } from '../src/services/authenticator.js';
import idGenerator from '../src/services/generateId.js';
import { decrypt, encrypt } from '../src/services/hassManager.js';

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
                assert.equal(result, {error:'jwt malformed'})
                
            } catch (error) {
                assert.equal(error.message, 'Invalid token')
            }
        })
     })
     describe('Hash Manager', () => {
         const hash = encrypt("Hello World")
        it('should generate a hashManager recover the original word', () => {
            const word = decrypt(hash)
            assert.equal(typeof hash, 'string')
            assert.equal(word, 'Hello World')
        })
        it('should return empty for an invalid hash', () => {
                const word = decrypt("wrong hash")
                assert.equal(word.length, 0)
        })
     })
})