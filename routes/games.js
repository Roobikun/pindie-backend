// Файл routes/games.js

const gamesRouter = require("express").Router();

// Импортируем middleware
const {
  findAllGames,
  createGame,
  findGameById,
  updateGame,
  deleteGame,
  checkEmptyFields,
  checkIfUsersAreSafe,
  checkIfCategoriesAvailable,
  checkIsGameExists,
} = require("../middlewares/games");

// Импортируем контроллер
const {
  sendAllGames,
  sendGameCreated,
  sendGameById,
  sendGameUpdated,
  sendGameDeleted,
} = require("../controllers/games");

// Устанавливаем обработчики маршрутов

// Получение всех игр
gamesRouter.get("/games", findAllGames, sendAllGames);

// Получение игры по id
gamesRouter.get("/games/:id", findGameById, sendGameById);

// Создание игры
gamesRouter.post(
  "/games",
  findAllGames,
  checkIsGameExists,
  checkIfCategoriesAvailable,
  checkEmptyFields,
  createGame,
  sendGameCreated
);

// Обновление игры
gamesRouter.put(
  "/games/:id",
  findGameById,
  checkIfUsersAreSafe,
  checkIfCategoriesAvailable,
  checkEmptyFields,
  updateGame,
  sendGameUpdated
);

// Удаление игры
gamesRouter.delete("/games/:id", deleteGame, sendGameDeleted);

module.exports = gamesRouter;
