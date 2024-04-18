//testing asynchronus process
const axios = require('axios');

//promise
// const getFact = () => {
//     let endpoint = 'http://cat-fact.herokuapp.com/facts'
//     return axios.get(endpoint)
// }

// describe('promise', () => {
//     test('the data from getFacts is object', () => {
//         return getFact().then(({data}) => {
//             expect(typeof data).toBe('object')
//         })
//     })
// })


//async
// const getFact = async () => {
//     let endpoint = 'http://cat-fact.herokuapp.com/facts'
//     return axios.get(endpoint)
// }

// describe('async-await', () => {
//     test('the data from getFacts is object', async () => {
//         const data = await getFact()
//         expect(typeof data).toBe('object')
//     })
// })

//callback
const getFact = (cb) => {
    let endpoint = 'http://cat-fact.herokuapp.com/facts'
    return cb(axios.get(endpoint))
}

describe('callback', () => {
    function callback(data) {
        test('data from getFact if object', () => {
            expect(typeof data).toBe('object')
        })
    }

    getFact(callback)
})