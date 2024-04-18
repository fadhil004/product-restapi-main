const math = require('./math')

const doAdd = (a,b) => math.add(a,b)
const doSubstract = (a,b) => math.substract(a,b)
const doMultiply = (a,b) => math.multiply(a,b)
const doDivide = (a,b) => math.divide(a,b)

module.exports = { doAdd, doSubstract, doMultiply, doDivide}
