  // Создаём роут для запросов категорий 
  const categoriesRouter = require('express').Router();
  
  // Импортируем вспомогательные функции
  const findAllCategories = require('../middlewares/categories');
  const sendAllCategories = require('../controllers/categories');
  const createCategory = require('../middlewares/categories');
  const sendCategoryCreated = require('../controllers/categories');
  const findCategoryById = require('../middlewares/categories');
  const sendCategoryById = require('../controllers/categories');
  const updateCategory = require('../middlewares/categories');
  const sendCategoryUpdated = require('../controllers/categories');
  
  
  // Обрабатываем GET-запрос с роутом '/categories'
  categoriesRouter.get('/categories', findAllCategories, sendAllCategories);
  
  // Обрабатываем POST-запрос с роутом '/categories'
  categoriesRouter.post('/categories', findAllCategories, createCategory, sendCategoryCreated);

  // Обрабатываем GET-запрос с роутом '/categories/:id'
  categoriesRouter.get('/categories/:id', findCategoryById, sendCategoryById);
  
  categoriesRouter.put(
    "/categories/:id", // Слушаем запросы по эндпоинту
    updateCategory, // Обновляем запись в MongoDB
    sendCategoryUpdated // Возвращаем ответ на клиент
  ); 

  // Экспортируем роут для использования в приложении — app.js
  module.exports = categoriesRouter;
  