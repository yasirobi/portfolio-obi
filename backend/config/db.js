const mongoose = require('mongoose')


require("dotenv").config({ path: "./config/.env" });

const connectDb = async () => {
    try {
      await mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify:false,
        useCreateIndex:true
      })
      console.log(`MongoDB Database connected with HOST`)
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDb