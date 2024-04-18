const app = require('./index');
const math = require('./math')

math.add = jest.fn()
math.substract = jest.fn()

test('Add', () => {
    app.doAdd(1,2)
    expect(math.add).toHaveBeenCalled()
})
tes('Substract', () => {
    app.doSubstract(1,2)
    expect(math.substract).toHaveBeenCalled()
})