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

describe('truhtness', () => {
    const n = null
    const word = 'water'
    let name;
    test('null is falsy', () => {
        expect(n).toBeFalsy()
    })
    test('variable n is null', () => {
        expect(n).toBeNull()
    })
    it('n is define', () => {
        expect(n).toBeDefined()
    })
    it('word is true', () => {
        expect(word).toBeTruthy()
    })
    it('name is not defined', () => {
        expect(name).not.toBeDefined()
    })
})