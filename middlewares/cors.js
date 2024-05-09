function cors(req, res, next) {
    const { origin } = req.headers;
    
    if (allowedCors.includes(origin)) { // Если это наш друг
        res.header('Access-Control-Allow-Origin', origin);
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Добавляем разрешенные методы
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); // Добавляем разрешенные заголовки
    }
    
    if (req.method === 'OPTIONS') {
        res.sendStatus(200); // Отправляем успешный ответ на предварительный запрос
    } else {
        next();
    }
}

const allowedCors = [
    'https://practicum.yandex.ru',
    'https://students-projects.ru',
    'http://localhost:3000'
  ];

  module.exports = {
    cors
}