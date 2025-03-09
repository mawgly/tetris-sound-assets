# Звуковые файлы для игры Тетрис

Этот репозиторий содержит звуковые файлы для игры Тетрис.

## Файлы

- `move.mp3` - звук движения фигуры
- `rotate.mp3` - звук вращения фигуры
- `drop.mp3` - звук падения фигуры
- `clearLine.mp3` - звук очистки линии
- `tetris.mp3` - звук при сборе тетриса (четырех линий)
- `gameOver.mp3` - звук окончания игры

## Использование

1. Скачайте файлы из репозитория
2. Поместите их в папку `sounds` в корне вашего проекта Тетрис
3. Обновите код JavaScript для использования звуковых файлов:

```javascript
const SOUNDS = {
    move: new Audio('sounds/move.mp3'),
    rotate: new Audio('sounds/rotate.mp3'),
    drop: new Audio('sounds/drop.mp3'),
    clearLine: new Audio('sounds/clearLine.mp3'),
    tetris: new Audio('sounds/tetris.mp3'),
    gameOver: new Audio('sounds/gameOver.mp3')
};
```

## Лицензия

Эти звуковые файлы доступны бесплатно для личного и коммерческого использования.