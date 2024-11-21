  // Маска для ввода даты рождения
  const dobInput = document.getElementById('dob');
  dobInput.addEventListener('input', function () {
    let value = dobInput.value.replace(/\D/g, ''); // Удаляем все, кроме цифр

    if (value.length > 2) value = value.slice(0, 2) + '.' + value.slice(2);
    if (value.length > 5) value = value.slice(0, 5) + '.' + value.slice(5, 9);

    dobInput.value = value; // Обновляем значение
  });

  // Маска для ввода паспортных данных
  const passportInput = document.getElementById('passport');
  passportInput.addEventListener('input', function () {
    let value = passportInput.value.replace(/\D/g, ''); // Удаляем все, кроме цифр

    if (value.length > 2) value = value.slice(0, 2) + ' ' + value.slice(2);
    if (value.length > 5) value = value.slice(0, 5) + ' ' + value.slice(5, 11);

    passportInput.value = value; // Обновляем значение
  });

  // Функция проверки данных
  function checkData() {
    const fioInput = document.getElementById('fio');
    const dobInput = document.getElementById('dob');
    const passportInput = document.getElementById('passport');

    const fio = fioInput.value.trim();
    const dob = dobInput.value.trim();
    const passport = passportInput.value.trim();

    // Сброс сообщений об ошибке и класса ошибки
    document.getElementById('fioError').innerText = '';
    document.getElementById('dobError').innerText = '';
    document.getElementById('passportError').innerText = '';
    
    fioInput.classList.remove('input-error');
    dobInput.classList.remove('input-error');
    passportInput.classList.remove('input-error');

    let isValid = true;

    // Валидация ФИО
    if (!fio) {
      document.getElementById('fioError').innerText = 'Обязательно для заполнения.';
      fioInput.classList.add('input-error');
      isValid = false;
    }

    // Валидация даты рождения
    if (!dob) {
      document.getElementById('dobError').innerText = 'Обязательно для заполнения.';
      dobInput.classList.add('input-error');
      isValid = false;
    } else {
      const datePattern = /^\d{2}\.\d{2}\.\d{4}$/;
      if (!datePattern.test(dob)) {
        document.getElementById('dobError').innerText = 'Неправильный формат даты (пример: 31.12.2000).';
        dobInput.classList.add('input-error');
        isValid = false;
      }
    }

    // Валидация паспортных данных
    if (!passport) {
      document.getElementById('passportError').innerText = 'Обязательно для заполнения.';
      passportInput.classList.add('input-error');
      isValid = false;
    } else {
      const passportPattern = /^\d{2}\s\d{2}\s\d{6}$/;
      if (!passportPattern.test(passport)) {
        document.getElementById('passportError').innerText = 'Неправильный формат паспортных данных (пример: 12 34 567890).';
        passportInput.classList.add('input-error');
        isValid = false;
      }
    }
  }

  // Добавление обработчика событий для кнопки
  document.getElementById('checkDataButton').addEventListener('click', checkData);