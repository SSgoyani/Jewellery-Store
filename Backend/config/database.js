const mongoose = require("mongoose");
mongoose.set('strictQuery', false)

const connectDatabase = () => {
  mongoose
    .connect('mongodb+srv://smitgoyani:smitgoyani222@cluster0.zgvpkqd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((con) => {
      console.log(
        `MongoDB Database connected with HOST: ${con.connection.host}`
      );
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDatabase;
