const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

//  handle uncaught exception

process.on("uncaughtException", (err) => {
  console.log(`error: ${err.message}`);
  console.log(`shutting down the server due to uncaught exception`);
  process.exit(1);
});

//config
dotenv.config({ path: "backend/config/config.env" });

// connecting to database
connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(`server: listening on port ${process.env.PORT}`);
});

// unhandled promise rejected

process.on("unhandledRejection", (err) => {
  console.log(`error: ${err.message}`);
  console.log(`shutting down the server due to unhandled promise rejection`);

  server.close(() => {
    process.exit(1);
  });
});
