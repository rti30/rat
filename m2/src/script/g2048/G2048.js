import gameMediaQuery from '/src/script/g2048/mediaQuery/index.js';
import initCreate from '/src/script/g2048/create/index.js';
import createField from '/src/script/g2048/create/createField.js'; // Для рестарта
import animate from '/src/script/g2048/anim/index.js';
import initGameData from '/src/script/g2048/initData/initGameData.js';
import renderGame from '/src/script/g2048/render/renderGame.js';
import renderScoreList from '/src/script/g2048/render/renderScoreList.js';
import move from '/src/script/g2048/move/index.js';
import { recordApi } from '/src/script/api2048/index.js';
export default class Game2048 {
   constructor({ height = 5, width = 5, gameClass, styles }) {
      this.gameClass = gameClass;
      this.styles = styles;
      this.height = height;
      this.width = width;
      this.duration = 150;
      this.field = [];
      this.emptyCell = [];
      this.steps = [];
      this.stepData = {};
      this.canMove = true;
      this.score = 0;
      this.best = 0;
      this.gameLoop = false;
      this.movingPromise;
      this.defaultFontSize = 30; // Может меняться из модуля mediaquery
      this.minDrag = 12; // минимальное расстояние для свайпа
      this.user = null;
      this.userIdCount = 0;
      this.localUserList = [];
      this.gameInit();
      this.animate = animate(this);
      this.renderGame = renderGame(this);
      this.move = move(this);
      gameMediaQuery(this);
   }
   gameInit = () => {
      initCreate(this);
      this.loginInput.addEventListener('change', this.setUserName);
      this.nodeField.addEventListener('pointerdown', this.pointerDown);
      document.addEventListener('keydown', this.hundlerKeydown);
      this.nodeBack = this.wrapper.querySelector(`.${this.gameClass}__back>button`);
      this.nodeRestart = this.wrapper.querySelector(`.${this.gameClass}__restart>button`);
      this.nodeBack.addEventListener('click', this.stepBack);
      this.nodeBack.disabled = true;
      this.nodeBack.style.backgroundColor = this.styles.disabledBgColor;
      this.nodeBack.style.color = this.styles.disabledColor;
      this.nodeRestart.addEventListener('click', this.restart);
      this.nodeRecordButton = this.wrapper.querySelector(`.${this.gameClass}__button-records`);
      this.nodeGameListButton = this.wrapper.querySelector(`.${this.gameClass}__button-list`);
      this.renderScoreList = new renderScoreList(this);
      this.nodeRecordButton.addEventListener('click', this.renderScoreList.record);
      this.nodeGameListButton.addEventListener('click', this.renderScoreList.completed);
      initGameData(this); //?Тут работает, при вызове в самом конце конструктора нет
   }
   checkVisible = () => this.wrapper.classList.contains('gameVisible') ? true : false;
   addNumber = () => {
      const number = Math.random() > 0.1 ? 2 : 4;
      const indexCell = Math.floor(Math.random() * this.emptyCell.length);
      const randomCell = this.emptyCell[indexCell];
      const { i, j } = randomCell;
      this.field[i][j] = number;
      const cell = this.nodeField.querySelector(`.c${i}${j}`);
      cell.style.color = this.styles.defaultColor;
      cell.style.fontSize = this.defaultFontSize + 'px';
      cell.append(number);
      cell.style.opacity = 0.5;
      cell.style.textShadow = this.styles.newNumberTextShadow;
      setTimeout(() => {
         cell.style.opacity = 1;
         cell.style.textShadow = this.styles.textShadow;

      }, 700)
      this.emptyCell.splice(indexCell, 1);
      this.stepData.newNum = { i, j }; //для возврата шага  
      this.checkGameOver();
   }
   hundlerKeydown = (e) => {
      if (e.keyCode === 37) {
         e.preventDefault();
         this.move('left');
      }
      else if (e.keyCode === 39) {
         e.preventDefault();
         this.move('right');
      }
      else if (e.keyCode === 38) {
         e.preventDefault();
         this.move('top');
      }
      else if (e.keyCode === 40) {
         e.preventDefault();
         this.move('bottom');
      }
   }
   pointerDown = (e) => {
      e.preventDefault();
      this.startX = e.pageX;
      this.startY = e.pageY;
      document.addEventListener('pointerup', this.pointerUp);
   }
   pointerUp = (e) => {
      const endX = e.pageX;
      const endY = e.pageY;
      const dragX = endX - this.startX;
      const dragY = endY - this.startY;
      if (Math.abs(dragY) > Math.abs(dragX) && Math.abs(dragY) >= this.minDrag) {
         if (dragY < 0) {
            this.move('top');
         }
         else {
            this.move('bottom');
         }
      }
      else if (Math.abs(dragX) >= this.minDrag) {
         if (dragX < 0) {
            this.move('left');
         }
         else {
            this.move('right');
         }
      }
      document.removeEventListener('pointerup', this.pointerUp)
   }
   stepBack = async () => {
      if (this.steps.length > 1) {
         this.move('back');
      }
      if (this.steps.length < 2) {
         this.nodeBack.disabled = true;
         this.nodeBack.style.backgroundColor = this.styles.disabledBgColor;
         this.nodeBack.style.color = this.styles.disabledColor;
      }
   }
   restart = () => {
      if (this.user !== null) {
         this.user.score = this.score;
         this.user = null;
         this.score = 0;
      }
      this.field = [];
      this.steps = [];
      this.gameLoop = false;
      this.nodeField.removeEventListener('pointerdown', this.pointerDown);
      this.nodeField.remove();
      createField(this);
      initGameData(this);
      this.loginInput.value = '';
      this.loginInput.disabled = false;
      this.loginInput.focus();
      this.nodeField.addEventListener('pointerdown', this.pointerDown);
      gameMediaQuery(this);
      this.renderScoreList.completed();

   }
   saveStep = () => {
      const stepData = {
         direction: this.stepData.direction,
         renderList: this.stepData.renderList,
         animList: this.stepData.animList,
         vector: this.stepData.vector,
         newNum: this.stepData.newNum,
         field: JSON.parse(JSON.stringify(this.field)),
         score: this.score,
         best: this.best,
      };

      if (this.steps.length < 12) { // По умолчанию 10 шагов. По нулевому индексу не изменяемая точка. Т.е в массиве минимум 1 элемент
         this.steps.push({ ...stepData });
      }
      else {
         this.steps.shift();
         this.steps.push({ ...stepData });
      }
      if (this.steps.length > 1) {
         this.nodeBack.disabled = false;
         this.nodeBack.style.cssText = this.styles.button + this.styles.backButton;
      }
      this.stepData = {};
   }
   gameOver = () => {
      alert('Вы проиграли!');
      this.restart();
   }
   gameWin = () => {
      recordApi.set({ flag: "end", login: this.user.name });
      const result = confirm("Вы выйграли!!! Продолжить игру?");
      if (result) {
         this.gameLoop = result;
      }
      else {
         this.restart();
      }
   }


   checkGameWin = (number) => {
      if (number >= 2048 && this.gameLoop === false) {
         setTimeout(() => this.gameWin(), this.duration);
      }
   }
   checkGameOver = () => {
      for (let i = 0; i < this.height; i++) {
         for (let j = 0; j < this.width; j++) {
            if (this.field[i][j] === 0) {
               return false;
            }
            if (j < this.width - 1 && this.field[i][j] === this.field[i][j + 1]) {
               return false;
            }
            if (i < this.height - 1 && this.field[i][j] === this.field[i + 1][j]) {
               return false;
            }
         }
      }
      setTimeout(() => this.gameOver(), this.duration)
      return true;
   }

   setUserName = (e) => {
      const errorCase = () => {
         this.loginInput.style.setProperty('border', '1px solid red');
         this.loginInput.focus();
      }
      const name = e.target.value.trim();
      if (name && name.length > 2 && name.length < 20) {
         this.userIdCount++;
         this.loginInput.disabled = true;
         this.loginInput.style.setProperty('border', 'none');
         this.user = { _id: this.userIdCount, name, score: 0 };
         this.localUserList.push(this.user);
         recordApi.set({ flag: "start", login: this.user.name });
      }
      else {
         alert("Лоигна должен быть от 3 до 20 символов");
         errorCase();
      }
   }
   checkIsLogin = () => {
      if (this.user) {
         return true;
      }
      else {
         alert('Для начала игры введите логин');
         this.loginInput.style.setProperty('border', '1px solid red');
         this.loginInput.focus();
         this.loginInput.disabled = false;
         return false;
      }
   }
}