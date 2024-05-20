// Файл routes/categories.js

const categoriesRouter = require("express").Router();

// Импортируем вспомогательные функции и контроллеры
const {
  findAllCategories,
  createCategory,
  findCategoryById,
  updateCategory,
  deleteCategory,
  checkEmptyName,
  checkIsCategoryExists,
} = require("../middlewares/categories");

const {
  sendAllCategories,
  sendCategoryCreated,
  sendCategoryById,
  sendCategoryUpdated,
  sendCategoryDeleted,
} = require("../controllers/categories");

const { checkAuth } = require("../middlewares/auth.js");

// Обрабатываем GET-запрос с роутом '/categories'
categoriesRouter.get("/categories", findAllCategories, sendAllCategories);

// Обрабатываем POST-запрос с роутом '/categories'
categoriesRouter.post(
  "/categories",
  findAllCategories,
  checkIsCategoryExists,
  checkEmptyName,
  checkAuth,
  createCategory,
  sendCategoryCreated
);

// Обрабатываем GET-запрос с роутом '/categories/:id'
categoriesRouter.get("/categories/:id", findCategoryById, sendCategoryById);

// Обрабатываем PUT-запрос с роутом '/categories/:id'
categoriesRouter.put(
  "/categories/:id",
  checkEmptyName,
  checkAuth,
  updateCategory,
  sendCategoryUpdated
);

// Обрабатываем DELETE-запрос с роутом '/categories/:id'
categoriesRouter.delete("/categories/:id", checkAuth, deleteCategory, sendCategoryDeleted);

// Экспортируем роут для использования в приложении — app.js
module.exports = categoriesRouter;
