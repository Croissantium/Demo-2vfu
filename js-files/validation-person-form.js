// Функция для применения маски ввода
function applyMask(input, maskPattern) {
  input.addEventListener('input', function () {
    let value = input.value.replace(/\D/g, ''); // Удаляем все, кроме цифр
    let maskedValue = '';

    let valueIndex = 0;
    for (let i = 0; i < maskPattern.length; i++) {
      if (maskPattern[i] === 'X') {
        if (value[valueIndex]) {
          maskedValue += value[valueIndex++];
        } else {
          break;
        }
      } else {
        maskedValue += maskPattern[i];
      }
    }

    input.value = maskedValue;
  });
}

// Применение масок
applyMask(document.getElementById('dob'), 'XX.XX.XXXX'); // Для даты рождения
applyMask(document.getElementById('passport'), 'XX XX XXXXXX'); // Для паспортных данных

// Функция проверки данных
function checkData() {
  const fields = [
    {
      id: 'fio',
      errorId: 'fioError',
      validator: value => value.trim() !== '',
      errorMessage: 'Обязательно для заполнения.',
    },
    {
      id: 'dob',
      errorId: 'dobError',
      validator: value => /^\d{2}\.\d{2}\.\d{4}$/.test(value),
      errorMessage: 'Неправильный формат даты (пример: 31.12.2000).',
    },
    {
      id: 'passport',
      errorId: 'passportError',
      validator: value => /^\d{2}\s\d{2}\s\d{6}$/.test(value),
      errorMessage: 'Неправильный формат паспортных данных (пример: 12 34 567890).',
    },
  ];

  let isValid = true;

  fields.forEach(({ id, errorId, validator, errorMessage }) => {
    const input = document.getElementById(id);
    const errorElement = document.getElementById(errorId);

    const value = input.value.trim();
    const valid = validator(value);

    // Сброс сообщений об ошибке и классов
    errorElement.innerText = '';
    input.classList.remove('input-error');

    if (!valid) {
      errorElement.innerText = errorMessage;
      input.classList.add('input-error');
      isValid = false;
    }
  });

  return isValid;
}

// Добавление обработчика событий для кнопки
document.getElementById('checkDataButton').addEventListener('click', checkData);