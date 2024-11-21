// студенту (показать еще(кнопка) > главная)

function scrollHomeList() {
    // Проверка существования контейнера
    const container = document.getElementById('general-page-category');
    if (container) {
        // Прокручиваем к контейнеру
        container.scrollIntoView({ behavior: 'smooth' });
        
        // Получаем элемент, который будем выделять
        const highlightElement = document.getElementById('homeList');
        
        if (highlightElement) {
            // Добавляем класс для выделения
            highlightElement.classList.add('highlight');
            
            // Убираем выделение через 2 секунды
            setTimeout(() => {
                highlightElement.classList.remove('highlight');
            }, 1000);
        } else {
            console.error("Элемент с id 'highlightDiv' не найден.");
        }
    } else {
        console.error("Контейнер с id 'general-page-category' не найден.");
    }
}




// студенту (показать еще(кнопка) > студенческие движения)

function scrollStudentMovementList() {
    // Проверка существования контейнера
    const container = document.getElementById('general-page-category');
    if (container) {
        // Прокручиваем к контейнеру
        container.scrollIntoView({ behavior: 'smooth' });
        
        // Получаем элемент, который будем выделять
        const highlightElement = document.getElementById('studentMovementList');
        
        if (highlightElement) {
            // Добавляем класс для выделения
            highlightElement.classList.add('highlight');
            
            // Убираем выделение через 2 секунды
            setTimeout(() => {
                highlightElement.classList.remove('highlight');
            }, 1000);
        } else {
            console.error("Элемент с id 'highlightDiv' не найден.");
        }
    } else {
        console.error("Контейнер с id 'general-page-category' не найден.");
    }
}



/* Chips - Абитуриенту */
function scrollChipsUniDep() {
    // Проверка существования контейнера
    const container = document.getElementById('uni-dep');
    if (container) {
        // Прокручиваем к контейнеру
        container.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error("Контейнер с id 'university-department' не найден.");
    }
}

function scrollChipsCardSlide() {
    // Проверка существования контейнера
    const container = document.getElementById('card-slide');
    if (container) {
        // Прокручиваем к контейнеру
        container.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error("Контейнер с id 'university-department' не найден.");
    }
}

function scrollChipsDormi() {
    // Проверка существования контейнера
    const container = document.getElementById('dormi');
    if (container) {
        // Прокручиваем к контейнеру
        container.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error("Контейнер с id 'university-department' не найден.");
    }
}

function scrollChipsStudLife() {
    // Проверка существования контейнера
    const container = document.getElementById('stud-life');
    if (container) {
        // Прокручиваем к контейнеру
        container.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error("Контейнер с id 'university-department' не найден.");
    }
}




/* Chips - Студенту */

function scrollChipsPrimary() {
    // Проверка существования контейнера
    const container = document.getElementById('primary');
    if (container) {
        // Прокручиваем к контейнеру
        container.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error("Контейнер с id 'university-department' не найден.");
    }
}

function scrollChipsStudMove() {
    // Проверка существования контейнера
    const container = document.getElementById('stud-move');
    if (container) {
        // Прокручиваем к контейнеру
        container.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error("Контейнер с id 'university-department' не найден.");
    }
}


/* Chips - Выпускнику */

function scrollChipsCarier() {
    // Проверка существования контейнера
    const container = document.getElementById('carier');
    if (container) {
        // Прокручиваем к контейнеру
        container.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error("Контейнер с id 'university-department' не найден.");
    }
}

function scrollChipsPrimary() {
    // Проверка существования контейнера
    const container = document.getElementById('primary');
    if (container) {
        // Прокручиваем к контейнеру
        container.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error("Контейнер с id 'university-department' не найден.");
    }
}


/* -- Сотруднику -- */

function scrollEmployeePrimary() {
    // Проверка существования контейнера
    const container = document.getElementById('general-page-category');
    if (container) {
        // Прокручиваем к контейнеру
        container.scrollIntoView({ behavior: 'smooth' });
        
        // Получаем элемент, который будем выделять
        const highlightElement = document.getElementById('primaryColumm');
        
        if (highlightElement) {
            // Добавляем класс для выделения
            highlightElement.classList.add('highlight');
            
            // Убираем выделение через 2 секунды
            setTimeout(() => {
                highlightElement.classList.remove('highlight');
            }, 1000);
        } else {
            console.error("Элемент с id 'highlightDiv' не найден.");
        }
    } else {
        console.error("Контейнер с id 'general-page-category' не найден.");
    }
}

function scrollChipsMTSLink() {
    // Проверка существования контейнера
    const container = document.getElementById('mts-link');
    if (container) {
        // Прокручиваем к контейнеру
        container.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error("Контейнер с id 'university-department' не найден.");
    }
}







/* -- Институты и факультеты -- */

function scrollChips1() {
    // Проверка существования контейнера
    const container = document.getElementById('card-slide1');
    if (container) {
        // Прокручиваем к контейнеру
        container.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error("Контейнер с id 'university-department' не найден.");
    }
}


function scrollChips2() {
    // Проверка существования контейнера
    const container = document.getElementById('card-slide2');
    if (container) {
        // Прокручиваем к контейнеру
        container.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error("Контейнер с id 'university-department' не найден.");
    }
}


function scrollChips3() {
    // Проверка существования контейнера
    const container = document.getElementById('card-slide3');
    if (container) {
        // Прокручиваем к контейнеру
        container.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error("Контейнер с id 'university-department' не найден.");
    }
}


function scrollChips4() {
    // Проверка существования контейнера
    const container = document.getElementById('card-slide4');
    if (container) {
        // Прокручиваем к контейнеру
        container.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error("Контейнер с id 'university-department' не найден.");
    }
}


function scrollChips5() {
    // Проверка существования контейнера
    const container = document.getElementById('card-slide5');
    if (container) {
        // Прокручиваем к контейнеру
        container.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error("Контейнер с id 'university-department' не найден.");
    }
}


function scrollChips6() {
    // Проверка существования контейнера
    const container = document.getElementById('card-slide6');
    if (container) {
        // Прокручиваем к контейнеру
        container.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error("Контейнер с id 'university-department' не найден.");
    }
}


function scrollChips7() {
    // Проверка существования контейнера
    const container = document.getElementById('card-slide7');
    if (container) {
        // Прокручиваем к контейнеру
        container.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error("Контейнер с id 'university-department' не найден.");
    }
}


function scrollChips8() {
    // Проверка существования контейнера
    const container = document.getElementById('card-slide8');
    if (container) {
        // Прокручиваем к контейнеру
        container.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error("Контейнер с id 'university-department' не найден.");
    }
}


function scrollChips9() {
    // Проверка существования контейнера
    const container = document.getElementById('card-slide9');
    if (container) {
        // Прокручиваем к контейнеру
        container.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error("Контейнер с id 'university-department' не найден.");
    }
}


function scrollChips10() {
    // Проверка существования контейнера
    const container = document.getElementById('card-slide10');
    if (container) {
        // Прокручиваем к контейнеру
        container.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error("Контейнер с id 'university-department' не найден.");
    }
}