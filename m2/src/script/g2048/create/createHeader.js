export default (context) => {
   //Создание обертки шапки
   let header = document.createElement('div');
   header.classList.add(`${context.gameClass}__header`);
   header.style.cssText = context.styles.header;
   //Создание логина
   let login = document.createElement('div');
   login.classList.add(`${context.gameClass}__login`);
   login.style.cssText = context.styles.login;
   let loginLabel = document.createElement('div');
   loginLabel.innerText = "Введите логин:";
   loginLabel.classList.add(`${context.gameClass}__label`);
   let loginInput = document.createElement('input');
   loginInput.type = "text";
   loginInput.className = `${context.gameClass}__input ${context.gameClass}-login`;
   loginInput.style.cssText = context.styles.loginInput;

   login.append(loginLabel);
   login.append(loginInput);
   header.append(login);
   //Создание счета
   let score = document.createElement('div');
   score.className = `${context.gameClass}__score ${context.gameClass}-score`;
   score.style.cssText = context.styles.score;
   let scoreLabel = document.createElement('div');
   scoreLabel.innerText = "Счёт:";
   scoreLabel.classList.add(`${context.gameClass}__label`);
   let scoreCount = document.createElement('div');
   scoreCount.classList.add(`${context.gameClass}-score__count`);

   score.append(scoreLabel);
   score.append(scoreCount);
   header.append(score);
   //Создание счета рекорда
   let best = document.createElement('div');
   best.className = `${context.gameClass}__best ${context.gameClass}-best`;
   best.style.cssText = context.styles.best;
   let bestLabel = document.createElement('div');
   bestLabel.innerText = "Рекорд:";
   bestLabel.classList.add(`${context.gameClass}__label`);
   let bestCount = document.createElement('div');
   bestCount.classList.add(`${context.gameClass}-best__count`);
   best.append(bestLabel);
   best.append(bestCount);
   header.append(best);
   //Создание кнопки рестарт
   let restart = document.createElement('div');
   restart.classList.add(`${context.gameClass}__restart`);
   restart.style.cssText = context.styles.restart;
   let restartButton = document.createElement('button');
   restartButton.type = "button";
   restartButton.innerText = "Начать заново";
   restartButton.classList.add(`${context.gameClass}__button`);
   restartButton.style.cssText = context.styles.restartButton + context.styles.button;

   restart.append(restartButton);
   header.append(restart);
   //Создание кнопки шаг назад
   let back = document.createElement('div');
   back.classList.add(`${context.gameClass}__back`);
   back.style.cssText = context.styles.back;
   let backButton = document.createElement('button');
   backButton.style.cssText = context.styles.backButton + context.styles.button;
   backButton.type = "button";
   backButton.innerText = "Шаг назад";
   backButton.classList.add(`${context.gameClass}__button`);

   back.append(backButton);
   header.append(back);
   context.wrapper.append(header);

   // context.loginInput = context.wrapper.querySelector(`.${context.gameClass}-login`); //? вынести в основной блок
   //  context.loginInput.addEventListener('change', context.setUserName) //? вынести в основной блок
}