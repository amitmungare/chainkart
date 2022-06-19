const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose.connect(process.env.DB_URI).then((data) => {
    console.log(`mongodb connected with server ${data.connection.host}`);
  });
};

module.exports = connectDatabase;

// mongodb://localhost:27017/chainkart
// mongodb+srv://chainkart:yr6LFeW7kJDWIg6I@cluster0.s9oqj.mongodb.net/chainkartDatabase?retryWrites=true&w=majority
