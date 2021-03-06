const db = () => {
    //dB connection//////////
    const mongoose = require("mongoose");
    const uri = process.env.MongoURI || 'mongodb://localhost:27017/dbgarantias'

    mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        }).then(() => {
            console.log('CONNECTION TO mDB RUNNING');
        })
        .catch(error => console.log('Error connecting to the dB' + error));
    ////////////////////////

}

module.exports = db;