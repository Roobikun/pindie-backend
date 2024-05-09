// Создаём роут для запросов категорий
const usersRouter = require("express").Router();

// Импортируем вспомогательные функции
const findAllusers = require("../middlewares/users");
const sendAllusers = require("../controllers/users");
const createUser = require("../middlewares/users");
const sendUserCreated = require("../controllers/users");
const findUserById = require("../middlewares/users");
const sendUserById = require("../controllers/users");
const updateUser = require("../middlewares/users");
const sendUserUpdated = require("../controllers/users");

// Обрабатываем GET-запрос с роутом '/users'
usersRouter.get("/users", findAllusers, sendAllusers); //usersRouter.get('/users', findAllusers, sendAllusers);

// Обрабатываем POST-запрос с роутом '/users'
usersRouter.post("/users", findAllusers, createUser, sendUserCreated);

// Обрабатываем GET-запрос с роутом '/users/:id'
usersRouter.get("/users/:id", findUserById, sendUserById);

usersRouter.put(
  "/users/:id", // Слушаем запросы по эндпоинту
  updateUser, // Обновляем запись в MongoDB
  sendUserUpdated // Возвращаем ответ на клиент
); 

// Экспортируем роут для использования в приложении — app.js
module.exports = usersRouter;
