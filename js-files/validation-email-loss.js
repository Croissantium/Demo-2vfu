// Функция валидации для восстановления пароля
function validateRestoreForm() {
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const email = emailInput.value.trim();

    // Сброс сообщений об ошибке
    emailError.innerText = '';

    // Проверка на заполненность поля
    if (!email) {
        emailError.innerText = 'Пожалуйста, введите ваш E-mail.';
        emailInput.classList.add('input-error'); // Добавляем класс ошибки для стилизации
    } else if (!isValidEmail(email)) {
        emailError.innerText = 'Это не почтовый адрес.';
        emailInput.classList.add('input-error'); // Добавляем класс ошибки для стилизации
    } else {
        emailInput.classList.remove('input-error'); // Убираем класс ошибки, если все в порядке
        // Здесь можно добавить логику для отправки данных на сервер или другую обработку
        alert('Ссылка для восстановления пароля отправлена на ' + email);
    }
}

// Функция для проверки корректности E-mail
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Простой регулярное выражение для проверки формата почты
    return emailPattern.test(email);
}

// Добавляем обработчик событий на кнопку восстановления
document.getElementById('restoreButton').addEventListener('click', validateRestoreForm);