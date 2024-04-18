// describe('common matchers', () => {
//     it('2 + 2 = 4', () => { 
//         expect(2+2).not.toEqual(5)
//      })
// })

// nilai false:
// - false
// 0
// -0
// ""
// undefined
// NaN

// describe('truhtness', () => {
//     const n = null
//     const word = 'water'
//     let name;
//     test('null is falsy', () => {
//         expect(n).toBeFalsy()
//     })
//     test('variable n is null', () => {
//         expect(n).toBeNull()
//     })
//     it('n is define', () => {
//         expect(n).toBeDefined()
//     })
//     it('word is true', () => {
//         expect(word).toBeTruthy()
//     })
//     it('name is not defined', () => {
//         expect(name).not.toBeDefined()
//     })
// })

// describe('number', () => {
//     const value = 4

//     it('value is equal to 4', () => {
//         expect(value).toBe(4)
//     })
//     it('value is more than 1', () => {
//         expect(value).toBeGreaterThan(1)
//     })
//     it('value is more than or equal 3', () => {
//         expect(value).toBeGreaterThanOrEqual(3)
//     })
//     it('value is less than 5', () => {
//         expect(value).toBeLessThan(5)
//     })
// })

// describe('array', () => {
//     let arr = ['banana', 'strawberry', 'blueberry']
//     it('arr should contain 3 elements', () => {
//         expect(arr.length).toEqual(3)
//     })
//     it('arr contain banana', () => {
//         expect(arr).toContain('banana')
//     })
// })

// describe('string', () => {
//     let word = 'banana'
//     it('word is banana', () => {
//         expect(word).toBe('banana')
//     })
//     it('word contain 6 characters', () => {
//         expect(word.length).toBe(6)
//     })
//     it('word contain character na', () => {
//         expect(word).toMatch(/na/)
//         expect(word).toContain('na')
//     })
// })

function willError() {
    throw new Error('error test')
}

describe('exception', () => {
    it('function will throw error', () => {
        expect(() => willError()).toThrow('error test')
    })
})