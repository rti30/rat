# Привет! Закончен 3 модуль. В процессе теория по модулю 4
## Модуль 1 выполнен
## Вот ссылка на прошлое ревью:
- https://github.com/rti30/rtom1/pull/2

## Вот ссылка на демо:
- https://rti30.github.io/module1-demo/
***
PS После ревью все мои репозитории скачали ~ по 20 раз :-0
В файле js только эксперементировал со слайдером. За рамки условий не выходил.

# Привет!
## Модуль 2 выполнен
## Вот ссылка на демо:
- https://module2-demo.vercel.app/

## Особенности:
- ~~Ужасная структура кода~~
- Можно регулировать сетку количества ячеек
- Если на странице есть скролл или вставленено несколько игр, то нужно воспользоваться функцией activeGameField при действии "скролл" и передать общий класс. Функция регулирует какая из игр будет реагировать на кнопки управления и нужно ли реагировать, если игра вне зоны видимости
- Если на странице есть скролл, то её невозможно будет прокрутить кнопками вверх/вниз на клавиатуре. Действия по умолчанию отключены(если игра активна)
- В течении игры можно делать до 10 шагов назад
- Игра сохраняет локальный счет в случаях, когда нажта кнопка "Рестарт" и счет больше 0, а также, если игра выйграна или проиграна. Сохраняется до перезагрузки странницы. (Кнопка "Завершены")
- Игра сохраняет время прохождения, если в ячейке достигнуто число 2048. Рекорды хранятся на сервере. (Победили? Поздравляю, Ваш логин навсегда останется в анналах. ~~если сервер не отвалится~~). (Кнопка "Рекорды")
- Backend находится на heroku. И результаты приходят долго. Действия при ожидании пока не предусмотрены

# Привет!
## Модуль 3 Выполнен
- Backend находится на heroku. И результаты приходят долго. Действия при ожидании пока не предусмотрены

## API к Модулю 2