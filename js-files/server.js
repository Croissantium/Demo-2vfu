const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Настройка подключения к базе данных
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Замените на ваш пароль
  database: 'university',
});

db.connect(err => {
  if (err) {
    console.log('Ошибка подключения к базе данных:', err);
  } else {
    console.log('Подключено к базе данных!');
  }
});

// Маршрут для регистрации студента
app.post('/api/register', (req, res) => {
  const { full_name, date_of_birth, passport_data } = req.body;

  if (!full_name || !date_of_birth || !passport_data) {
    return res.status(400).json({ message: 'Все поля обязательны!' });
  }

  const query = 'INSERT INTO students (full_name, date_of_birth, passport_data) VALUES (?, ?, ?)';
  db.query(query, [full_name, date_of_birth, passport_data], (err, result) => {
    if (err) {
      console.error('Ошибка при добавлении студента:', err);
      if (err.code === 'ER_DUP_ENTRY') {
        return res.status(409).json({ message: 'Паспортные данные уже зарегистрированы!' });
      }
      return res.status(500).json({ message: 'Ошибка сервера' });
    }
    res.status(201).json({ message: 'Студент успешно зарегистрирован', studentId: result.insertId });
  });
});

// Запуск сервера
app.listen(3000, () => {
  console.log('Сервер запущен на http://localhost:3000');
});