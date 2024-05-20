// app.js
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
// const mainRoute = require("./routes/main");
const gamesRouter = require("./routes/games");
const usersRouter = require('./routes/users');
const categoriesRouter = require('./routes/categories');
const { cors } = require("./middlewares/cors")

const connectToDatabase = require('./database/connect');
const apiRouter = require("./routes/apiRouter");
const pagesRouter = require("./routes/pages");

const cookieParser = require("cookie-parser");

const PORT = 3000;
const app = express();

connectToDatabase();

// Теперь клиент имеет доступ только к публичным файлам
app.use(
  cors,
  cookieParser(),
  bodyParser.json(),
  pagesRouter,
  apiRouter,
  express.static(path.join(__dirname, "public")),
  // usersRouter, 
  // categoriesRouter,
  // gamesRouter
);


app.listen(PORT, () => {
  console.log(`Server is running at PORT http://localhost:${PORT}`);
});
