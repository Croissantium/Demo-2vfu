/* Слайдер 4 карточки */
$(document).ready(function() {
    $('.card-slider__institute-facultet').each(function() {
        var $sliderContainer = $(this).find('.card-slider__institute-facultet-blocks');

        var defaultSlidesToShow = 4; // Количество слайдов по умолчанию
        var currentSlideCount = $sliderContainer.children().length;

        // Добавляем пустые элементы, если карточек меньше defaultSlidesToShow
        if (currentSlideCount < defaultSlidesToShow) {
            for (var i = currentSlideCount; i < defaultSlidesToShow; i++) {
                $sliderContainer.append('<div class="card-slider__placeholder"></div>');
            }
        }

        // Инициализация Slick для текущего слайдера
        $sliderContainer.slick({
            slidesToShow: defaultSlidesToShow, // Количество видимых карточек
            slidesToScroll: 1, // Перелистывать по 1 карточке
            arrows: false,
            speed: 650,
            infinite: false,
            dots: false,
            cssEase: 'ease',
            swipe: true, // Включаем свайп
            touchMove: true, // Разрешаем движение touch
            touchThreshold: 10, // Порог для более точного управления
            responsive: [
                {
                    breakpoint: 1130,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 420,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        var $prevButton = $(this).find('.navigation-button__left');
        var $nextButton = $(this).find('.navigation-button__right');

        // Функция для обновления видимости кнопок
        function updateArrows(currentSlide, totalSlides, slidesToShow) {
            if (currentSlide === 0) {
                $prevButton.removeClass('visible').addClass('hidden');
            } else {
                $prevButton.removeClass('hidden').addClass('visible');
            }

            if (currentSlide + slidesToShow >= totalSlides) {
                $nextButton.removeClass('visible').addClass('hidden');
            } else {
                $nextButton.removeClass('hidden').addClass('visible');
            }
        }

        // Получаем контейнер для кастомных точек
        var $customDotsContainer = $(this).find('.picker-point');

        // Функция для обновления кастомных точек
        function updateDots(totalPages, currentSlideGroup) {
            $customDotsContainer.empty();
            for (var i = 0; i < totalPages; i++) {
                var dotClass = (i === currentSlideGroup) ? 'picker-point__point picker-point__point-active' : 'picker-point__point';
                $customDotsContainer.append('<div class="' + dotClass + '"></div>');
            }

            $customDotsContainer.children().on('click', function() {
                var index = $(this).index();
                $sliderContainer.slick('slickGoTo', index * $sliderContainer.slick('slickGetOption', 'slidesToShow'));
            });
        }

        // Инициализация точек при загрузке
        function initDots() {
            var slidesToShow = $sliderContainer.slick('slickGetOption', 'slidesToShow');
            var totalSlides = $sliderContainer.slick('getSlick').slideCount;
            var totalPages = Math.ceil(totalSlides / slidesToShow);
            updateDots(totalPages, 0);
            updateArrows(0, totalSlides, slidesToShow);
        }

        initDots(); // Инициализируем точки при первой загрузке

        // Обновление активной точки и стрелок при смене слайда
        $sliderContainer.on('afterChange', function(event, slick, currentSlide) {
            var slidesToShow = slick.options.slidesToShow;
            var totalSlides = slick.slideCount;
            updateArrows(currentSlide, totalSlides, slidesToShow);

            var currentSlideGroup = Math.floor(currentSlide / slidesToShow);
            var totalPages = Math.ceil(totalSlides / slidesToShow);
            updateDots(totalPages, currentSlideGroup);
        });

        // Обработчики для кастомных кнопок
        $prevButton.on('click', function() {
            $sliderContainer.slick('slickPrev');
        });

        $nextButton.on('click', function() {
            $sliderContainer.slick('slickNext');
        });

        // Поддержка трекпада через горизонтальное событие wheel
        $sliderContainer.on('wheel', function(event) {
            var deltaX = event.originalEvent.deltaX;
            var deltaY = event.originalEvent.deltaY;

            // Ограничиваем прокрутку только по горизонтали
            if (Math.abs(deltaX) > Math.abs(deltaY)) {
                event.preventDefault(); // Отключаем вертикальную прокрутку

                if (deltaX < 0) {
                    $sliderContainer.slick('slickPrev'); // Свайп влево
                } else {
                    $sliderContainer.slick('slickNext'); // Свайп вправо
                }
            }
        });

        // Обработчик изменения размера окна для обновления состояния кнопок и точек
        $(window).on('resize', function() {
            initDots(); // Пересчитываем состояние кнопок и точек при изменении разрешения
        });
    });
});




/* Слайдер 3 карточки */
$(document).ready(function() {
    $('.card-slider__applicant, .card-slider__institute-facultet, .card-slider').each(function() {
        var $sliderContainer = $(this).find('.card-slider__container, .card-slider__applicant-blocks, .card-slider__institute-facultet-blocks');

        // Инициализация Slick для текущего слайдера
        $sliderContainer.slick({
            slidesToShow: 3,
            slidesToScroll: 3, // Перелистывание по группам
            arrows: false,
            speed: 650,
            infinite: false,
            dots: false,
            cssEase: 'ease',

            swipe: true, // Включить поддержку свайпа
            touchMove: true, // Разрешить перемещение через touch
            touchThreshold: 20, // Порог чувствительности для touch-событий
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        var $prevButton = $(this).find('.navigation-button__left');
        var $nextButton = $(this).find('.navigation-button__right');

        function updateArrows(currentSlideGroup, totalPages) {
            // Скрываем кнопку "влево" на первой группе
            if (currentSlideGroup === 0) {
                $prevButton.removeClass('visible').addClass('hidden');
            } else {
                $prevButton.removeClass('hidden').addClass('visible');
            }

            // Скрываем кнопку "вправо" на последней группе
            if (currentSlideGroup === totalPages - 1) {
                $nextButton.removeClass('visible').addClass('hidden');
            } else {
                $nextButton.removeClass('hidden').addClass('visible');
            }
        }

        var $customDotsContainer = $(this).find('.picker-point');

        function updateDots(totalPages, currentSlideGroup) {
            $customDotsContainer.empty();
            for (var i = 0; i < totalPages; i++) {
                var dotClass = (i === currentSlideGroup) ? 'picker-point__point picker-point__point-active' : 'picker-point__point';
                $customDotsContainer.append('<div class="' + dotClass + '"></div>');
            }

            $customDotsContainer.children().on('click', function() {
                var index = $(this).index();
                $sliderContainer.slick('slickGoTo', index * $sliderContainer.slick('slickGetOption', 'slidesToScroll'));
            });
        }

        function initDots() {
            var slidesToShow = $sliderContainer.slick('slickGetOption', 'slidesToShow');
            var slidesToScroll = $sliderContainer.slick('slickGetOption', 'slidesToScroll');
            var totalSlides = $sliderContainer.slick('getSlick').slideCount;
            var totalPages = Math.ceil(totalSlides / slidesToScroll);
            updateDots(totalPages, 0);
            updateArrows(0, totalPages);
        }

        initDots();

        $sliderContainer.on('afterChange', function(event, slick, currentSlide) {
            var slidesToScroll = slick.options.slidesToScroll;
            var totalSlides = slick.slideCount;
            var totalPages = Math.ceil(totalSlides / slidesToScroll);
            var currentSlideGroup = Math.floor(currentSlide / slidesToScroll);
            updateDots(totalPages, currentSlideGroup);
            updateArrows(currentSlideGroup, totalPages);
        });

        $prevButton.on('click', function() {
            $sliderContainer.slick('slickPrev');
        });

        $nextButton.on('click', function() {
            $sliderContainer.slick('slickNext');
        });

        $(window).on('resize', function() {
            initDots();
        });

        // Обработчик touch-событий для обновления кастомных точек
        $sliderContainer.on('swipe', function(event, slick, direction) {
            var slidesToScroll = slick.options.slidesToScroll;
            var totalSlides = slick.slideCount;
            var totalPages = Math.ceil(totalSlides / slidesToScroll);
            var currentSlide = slick.currentSlide;
            var currentSlideGroup = Math.floor(currentSlide / slidesToScroll);
            updateDots(totalPages, currentSlideGroup);
            updateArrows(currentSlideGroup, totalPages);
        });
    });
});

/* Слайдер 1 карточка */
$(document).ready(function() {
    // Инициализация всех слайдеров на странице
    $('.ads').each(function() {
        var $sliderContainer = $(this).find('.ads-blocks, .ads-blocks__graduate');
        var slidesToShow = 1; // Показ по одному слайду

        // Инициализация Slick для текущего слайдера
        $sliderContainer.slick({
            slidesToShow: slidesToShow,
            slidesToScroll: slidesToShow,
            arrows: false,
            speed: 650,
            infinite: false,
            dots: false,
            cssEase: 'ease',

            swipe: true, // Включить поддержку свайпа
            touchMove: true, // Разрешить перемещение через touch
            touchThreshold: 20, // Порог чувствительности для touch-событий
        });

        // Получаем ссылки на кастомные кнопки для текущего слайдера
        var $prevButton = $(this).find('.navigation-button__left');
        var $nextButton = $(this).find('.navigation-button__right');

        // Функция для обновления видимости кнопок
        function updateArrows(currentSlide, totalPages) {
            // Скрываем кнопку "влево" на первом слайде
            if (currentSlide === 0) {
                $prevButton.removeClass('visible').addClass('hidden');
            } else {
                $prevButton.removeClass('hidden').addClass('visible');
            }

            // Скрываем кнопку "вправо" на последнем слайде
            if (currentSlide === totalPages - 1) {
                $nextButton.removeClass('visible').addClass('hidden');
            } else {
                $nextButton.removeClass('hidden').addClass('visible');
            }
        }

        // Общее количество слайдов
        var totalSlides = $sliderContainer.slick('getSlick').slideCount;

        // Количество страниц
        var totalPages = totalSlides; // Для показа одного слайда

        // Изначально обновляем кнопки для первого слайда
        updateArrows(0, totalPages);

        // Обработчик события смены слайда
        $sliderContainer.on('afterChange', function(event, slick, currentSlide) {
            updateArrows(currentSlide, totalPages);
        });

        // Обработчики для кастомных кнопок
        $prevButton.on('click', function() {
            $sliderContainer.slick('slickPrev');
        });

        $nextButton.on('click', function() {
            $sliderContainer.slick('slickNext');
        });

        // Получаем контейнер для кастомных точек
        var $customDotsContainer = $(this).find('.picker-point');

        // Функция для обновления кастомных точек
        function updateDots(totalSlides, currentSlide) {
            $customDotsContainer.empty();
            for (var i = 0; i < totalSlides; i++) {
                var dotClass = (i === currentSlide) ? 'picker-point__point picker-point__point-active' : 'picker-point__point';
                $customDotsContainer.append('<div class="' + dotClass + '"></div>');
            }

            // Добавляем обработчик клика по каждой точке
            $customDotsContainer.children().on('click', function() {
                var index = $(this).index();
                $sliderContainer.slick('slickGoTo', index);
            });
        }

        // Инициализация точек при загрузке
        updateDots(totalSlides, 0);

        // Обновление активной точки при смене слайда
        $sliderContainer.on('afterChange', function(event, slick, currentSlide) {
            updateDots(totalSlides, currentSlide);
        });
    });
});

/* Слайдер 1 карточка (изображение) */
$(document).ready(function() {
    // Инициализация всех слайдеров на странице
    $('.dormitory, .student-life').each(function() {
        var $sliderContainer = $(this).find('.dormitory-blocks, .student-life-blocks');
        var slidesToShow = 1; // Количество слайдов для показа

        // Настройки слайдера
        $sliderContainer.slick({
            slidesToShow: 1,
            centerPadding: '0px',
            centerMode: false,
            slidesToScroll: 1,
            arrows: false,
            speed: 650,
            infinite: false,
            dots: false,
            cssEase: 'ease',
            focusOnSelect: true,
            variableWidth: true,

            swipe: true, // Включить поддержку свайпа
            touchMove: true, // Разрешить перемещение через touch
            touchThreshold: 20, // Порог чувствительности для touch-событий
        });

        // Получаем ссылки на кастомные кнопки для текущего слайдера
        var $prevButton = $(this).find('.navigation-button__left');
        var $nextButton = $(this).find('.navigation-button__right');

        // Функция для обновления видимости кнопок
        function updateArrows(currentSlide, totalPages) {
            console.log('Обновление кнопок: текущий слайд =', currentSlide); // Проверка
            // Скрываем кнопку "влево" на первом слайде
            if (currentSlide === 0) {
                $prevButton.removeClass('visible').addClass('hidden');
            } else {
                $prevButton.removeClass('hidden').addClass('visible');
            }

            // Скрываем кнопку "вправо" на последнем слайде
            if (currentSlide >= totalSlides - 1) { // Проверяем последний слайд
                $nextButton.removeClass('visible').addClass('hidden');
            } else {
                $nextButton.removeClass('hidden').addClass('visible');
            }
        }

        // Общее количество слайдов
        var totalSlides = $sliderContainer.slick('getSlick').slideCount;

        // Количество страниц
        var totalPages = Math.ceil(totalSlides / slidesToShow);

        // Изначально обновляем кнопки для первого слайда
        updateArrows(0, totalPages);

        // Обработчик события смены слайда
        $sliderContainer.on('afterChange', function(event, slick, currentSlide) {
            console.log('Текущий слайд:', currentSlide); // Проверяем текущий слайд
            updateArrows(currentSlide, totalPages);
        });

        // Обработчики для кастомных кнопок
        $prevButton.on('click', function() {
            $sliderContainer.slick('slickPrev');
        });

        $nextButton.on('click', function() {
            $sliderContainer.slick('slickNext');
        });
    });
});