const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })
    .then(data => {
      console.log(`Mongodb Connected with session: ${data.connection.host}`);
    });
};

module.exports = connectDatabase;
