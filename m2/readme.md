# Привет!
## Модуль 2 

## Вот ссылка на демо:
- https://module2-demo.vercel.app/

## Техническое задание
- Нужно реализовать с использованием JavaScript, HTML и CSS игру 2048. 

### Описание интерфейса

1. Интерфейс представляет собой поле 5х5 клеток. 
2. Цвет клеток меняется в зависимости от набранного номинала в клетке.
3. Интерфейс должен быть адаптивным.

### Управление

Манипуляция игрой может производиться как при помощи мышки, так и средством управления стрелками на клавиатуре. Так же предполагается сенсорное управление с телефона.

### Правила игры

 - Можно посмотреть: https://ru.wikipedia.org/wiki/2048_(%D0%B8%D0%B3%D1%80%D0%B0)

### Примечание

1. Шрифт должен уменьшаться пропорционально контенту в ячейке
2. Игра заканчивается при наборе 2048 в одной ячейке.

### Таблица результатов

Таблица результатов строится на основе потраченного времени которое потребовалось, чтобы набрать 2048.

### Технические требования

Разрешено

- Использовать сборщики (webpack | gulp | vite) - предпочтительней vite
- Использовать библиотеки reset.css | typescript

Запрещено 

- Использовать библиотеки, которые как-то облегчают написание кода (Jquery | lodash)

### Дополнительно (Задания со звездочкой)
1. Сделайте игру бесконечной.
2. Сделайте таблицу рекордов для бесконечной игры.
3. Сделайте кнопку возврата на прошлый шаг.
4. Попробуйте обойтись без верстки, всю верстку можно написать с помощью JS.

## Особенности, которые получились в ходе реализации:
- ~~Ужасная структура кода~~
- Можно регулировать сетку количества ячеек
- Если на странице есть скролл или вставленено несколько игр, то нужно воспользоваться функцией activeGameField при действии "скролл" и передать общий класс. Функция регулирует какая из игр будет реагировать на кнопки управления и нужно ли реагировать, если игра вне зоны видимости
- Если на странице есть скролл, то страницу невозможно будет прокрутить кнопками вверх/вниз на клавиатуре. Действия по умолчанию отключены (если игра активна)
- В течении игры можно делать до 10 шагов назад
- Игра сохраняет локальный счет в случаях, когда нажта кнопка "Рестарт" и счет больше 0, а также, если игра выйграна или проиграна. Сохраняется до перезагрузки странницы. (Кнопка "Завершены")
- Игра сохраняет время прохождения, если в ячейке достигнуто число 2048. Рекорды хранятся на сервере. (Победили? Поздравляю, Ваш логин навсегда останется в анналах. ~~если сервер не отвалится~~). (Кнопка "Рекорды"). Проверте не отключено сохранение куки вашего браузера (Обычно в режиме инкогнито)
- Backend находится на heroku. И результаты приходят долго. Действия при ожидании пока не предусмотрены