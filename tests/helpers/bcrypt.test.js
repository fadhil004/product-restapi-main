const { hashPassword, comparePassword } = require('../../helpers/bcrypt')

describe('bcrypt', () => {
    let hashedPassword;
    beforeAll(() => {
        hashedPassword = hashPassword('password')
    })
    describe('hashPassword', () => {
        it('valid input: return string', () => {
            expect(typeof hashedPassword).toBe('string')
            expect(hashedPassword).not.toEqual('password')
        })
    })
    describe('compare password', () => {
        it('valid input: return boolean', () => {
            const result = comparePassword('password', hashedPassword)
            expect(result).toBe(true)
        })
    })
})