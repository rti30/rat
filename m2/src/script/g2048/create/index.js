import createHeader from "/src/script/g2048/create/createHeader.js"
import createField from "/src/script/g2048/create/createField.js"
import createRecord from "/src/script/g2048/create/createRecord.js"

export default (context) => {
   context.wrapper = document.querySelector(`.${context.gameClass}`);
   context.wrapper.style.cssText = context.styles.wrapper;
   createHeader(context); //Создание шапки
   createField(context); //Создание игрового поля
   createRecord(context); // Создание счёта

   context.loginInput = context.wrapper.querySelector(`.${context.gameClass}-login`);
   context.nodeScoreWrapper = context.wrapper.querySelector(`.${context.gameClass}__score`);
   context.nodeBestWrapper = context.wrapper.querySelector(`.${context.gameClass}__best`);
   context.nodeScore = context.nodeScoreWrapper.querySelector(`.${context.gameClass}-score__count`);
   context.nodeBest = context.nodeBestWrapper.querySelector(`.${context.gameClass}-best__count`);
}