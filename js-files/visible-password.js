const passwordInput = document.getElementById('password');
const togglePasswordButton = document.getElementById('togglePassword');
const toggleIcon = document.getElementById('toggleIcon');

togglePasswordButton.addEventListener('click', function () {
    // Меняем тип поля
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.classList.remove('icon-eye'); // Убираем иконку глаза
        toggleIcon.classList.add('icon-eye-none'); // Добавляем иконку с перечеркнутым глазом
    } else {
        passwordInput.type = 'password';
        toggleIcon.classList.remove('icon-eye-none'); // Убираем иконку с перечеркнутым глазом
        toggleIcon.classList.add('icon-eye'); // Добавляем иконку глаза
    }
});