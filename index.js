const express = require('express');
const routes = require('./routes');
const { sequelize } = require('./models');
const { errorHandler } = require('./middlewares/errorHandler');

const app = express()
const port = 3000

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use('/', routes)
app.use(errorHandler)

app.listen(port, () => {
    console.log(`app running on port ${port}`)
})

// async function main(){
//     try {
//         await sequelize.sync({force: true});
//     } catch (error) {
//         console.error('Unable to start the server:', error);
//     }
// }

// main()

module.exports = {app}