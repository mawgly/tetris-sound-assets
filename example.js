// Пример использования звуков в игре Тетрис

// Инициализация звуков
const SOUNDS = {
    move: new Audio('sounds/move.mp3'),
    rotate: new Audio('sounds/rotate.mp3'),
    drop: new Audio('sounds/drop.mp3'),
    clearLine: new Audio('sounds/clearLine.mp3'),
    tetris: new Audio('sounds/tetris.mp3'),
    gameOver: new Audio('sounds/gameOver.mp3')
};

// Функция для проверки поддержки аудио и предварительной загрузки
function initSounds() {
    // Проверка поддержки аудио в браузере
    const audioTest = document.createElement('audio');
    if (!audioTest.canPlayType) {
        console.warn('Звуки не поддерживаются вашим браузером');
        return false;
    }
    
    // Установка громкости (от 0.0 до 1.0)
    Object.values(SOUNDS).forEach(sound => {
        sound.volume = 0.5; // 50% громкости
    });
    
    // Предварительная загрузка звуков
    Object.values(SOUNDS).forEach(sound => {
        sound.load();
    });
    
    return true;
}

// Функция воспроизведения звука с обработкой ошибок
function playSound(soundName) {
    try {
        // Проверяем, существует ли звук
        if (SOUNDS[soundName]) {
            // Перезапускаем звук (если он уже играет)
            SOUNDS[soundName].currentTime = 0;
            
            // Воспроизводим звук
            const playPromise = SOUNDS[soundName].play();
            
            // Обработка Promise (современные браузеры возвращают Promise)
            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    console.error('Ошибка воспроизведения звука:', error);
                });
            }
        }
    } catch (error) {
        console.error('Ошибка при воспроизведении звука:', error);
    }
}

// Примеры использования
// initSounds(); // Вызвать при инициализации игры

// Примеры вызовов звуков в игре:
// playSound('move');    // При движении фигуры влево/вправо
// playSound('rotate');  // При повороте фигуры
// playSound('drop');    // При падении фигуры
// playSound('clearLine'); // При очистке линии
// playSound('tetris');  // При очистке 4 линий сразу
// playSound('gameOver'); // При завершении игры