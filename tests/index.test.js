class Error {
    constructor(status, message) {
        this.status = status
        this.message = message
    }
}

class DivideError extends Error {}

const divideCalculation1 = (n1, n2) => {
    if (n1 === 0 || n2 === 0) throw new DivideError(401, 'nilai nol invalid')
}

describe('Divide', () => { 
    test('invalid input 0: should throw error', () => {
        expect(() => divideCalculation1(0,1)).toThrow(DivideError)
    })
 })

 const divideCalculation2 = (n1, n2) => {
    if (n1 === 0 || n2 === 0) return new DivideError(401, 'nilai nol invalid')
}


 describe('Divide', () => { 
    test('invalid input 0: should throw error', () => {
        const result = divideCalculation2(0,1)
        expect(result).toBeInstanceOf(DivideError)
        expect(result).toHaveProperty('status')
        expect(result).toHaveProperty('message')
    })
 })