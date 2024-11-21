// Функция для перемещения фокуса на следующее поле при нажатии Enter
function moveFocusOnEnter(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Отменяем стандартное поведение (отправка формы)

        const inputs = document.querySelectorAll('input[type="text"], input[type="password"], input[type="tel"], input[type="email"]');
        const currentIndex = Array.prototype.indexOf.call(inputs, document.activeElement); // Индекс текущего поля

        // Проверяем, если это последнее поле
        if (currentIndex + 1 < inputs.length) {
            // Перемещаем фокус на следующее поле
            inputs[currentIndex + 1].focus();
        } else {
            // Если это последнее поле, выполняем действие на кнопке
            document.querySelector('.button--primary-id').click();
        }
    }
}

// Добавляем обработчики событий на все поля ввода
const allInputs = document.querySelectorAll('input[type="text"], input[type="password"], input[type="tel"], input[type="email"]');
allInputs.forEach(input => {
    input.addEventListener('keydown', moveFocusOnEnter);
});