// Файл middlewares/games.js

// Импортируем модель
const games = require("../models/game");

const findAllGames = async (req, res, next) => {
  req.gamesArray = await games.find({}).populate("categories").populate("users");
  next();
  // console.log(req.gamesArray); вывод в терминал
};

// Экспортируем функцию поиска всех игр
module.exports = findAllGames;