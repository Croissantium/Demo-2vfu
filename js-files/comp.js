import React, { useState } from 'react';

function RegisterStudent() {
  const [formData, setFormData] = useState({
    full_name: '',
    date_of_birth: '',
    passport_data: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.status === 201) {
        const data = await response.json();
        setMessage(`Успешно зарегистрирован! ID: ${data.studentId}`);
      } else {
        const errorData = await response.json();
        setMessage(`Ошибка: ${errorData.message}`);
      }
    } catch (error) {
      setMessage('Ошибка сети');
    }
  };

  return (
    <div>
      <h1>Регистрация студента</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ФИО:</label>
          <input
            type="text"
            name="full_name"
            value={formData.full_name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Дата рождения:</label>
          <input
            type="date"
            name="date_of_birth"
            value={formData.date_of_birth}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Паспортные данные:</label>
          <input
            type="text"
            name="passport_data"
            value={formData.passport_data}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Зарегистрироваться</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default RegisterStudent;