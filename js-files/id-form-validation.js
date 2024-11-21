function validateForm() {
  // Получение значений полей
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const email = emailInput.value.trim();
  const password = passwordInput.value;

  // Сброс сообщений об ошибке и класса ошибки
  document.getElementById('emailError').innerHTML = '&nbsp;';
  document.getElementById('passwordError').innerHTML = '&nbsp;';
  emailInput.classList.remove('input-error');
  passwordInput.classList.remove('input-error');

  // Флаги валидации
  let isValid = true;

  // Валидация логина
  if (!email) {
    document.getElementById('emailError').innerText = 'Обязательно для заполнения.';
    emailInput.classList.add('input-error');
    isValid = false;
  } else if (email.includes('@')) {
    document.getElementById('emailError').innerText = 'Логин не должен содержать знак @.';
    emailInput.classList.add('input-error');
    isValid = false;
  }

  // Валидация пароля
  if (password.length < 8) {
    document.getElementById('passwordError').innerText = 'Пароль должен содержать минимум 8 символов.';
    passwordInput.classList.add('input-error');
    isValid = false;
  }
}

// Переключение видимости пароля
document.getElementById('togglePassword').addEventListener('click', function () {
  const passwordField = document.getElementById('password');
  const toggleIcon = document.getElementById('toggleIcon');

  // Переключаем тип поля
  if (passwordField.type === 'password') {
      passwordField.type = 'text';
      toggleIcon.classList.remove('icon-eye'); // Убираем иконку глаза
      toggleIcon.classList.add('icon-eye-none'); // Добавляем иконку с перечеркнутым глазом
      toggleIcon.alt = 'Скрыть пароль';
  } else {
      passwordField.type = 'password';
      toggleIcon.classList.remove('icon-eye-none'); // Убираем иконку с перечеркнутым глазом
      toggleIcon.classList.add('icon-eye'); // Добавляем иконку глаза
      toggleIcon.alt = 'Показать пароль';
  }
});