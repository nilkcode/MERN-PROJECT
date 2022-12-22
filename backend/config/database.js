const mongoose = require('mongoose');


const connectDataBase = () => {
    mongoose.connect(process.env.DB_URI).then((data) => {
        console.log(`mongo db connected with: ${data.connection.host}`)
    })
}

module.exports = connectDataBase;