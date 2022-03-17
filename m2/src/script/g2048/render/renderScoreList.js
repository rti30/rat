import { recordApi } from '/src/script/api2048/index.js';
import parseMillisec from '/src/script/g2048/helper/parseMillisecond.js';


export default class renderScoreList {
   constructor(context) {
      this.context = context
   }
   record = async () => {
      const _this = this.context;
      _this.nodeGameListButton.style.boxShadow = "";
      _this.nodeRecordButton.style.boxShadow = _this.styles.shadowActiveButton;
      const response = await recordApi.getAll();
      const scoreList =
         response.sort((score1, score2) => score1.time - score2.time)
            .map(item => { return { _id: item._id, score: parseMillisec(item.time), name: item.username } })
      this.create(scoreList);
   }
   completed = () => {
      const _this = this.context;
      _this.nodeRecordButton.style.boxShadow = "";
      _this.nodeGameListButton.style.boxShadow = _this.styles.shadowActiveButton;
      const scoreSort = (scorList) => scorList.sort((user1, user2) => user2.score - user1.score);
      this.create(scoreSort(_this.localUserList));
   }
   create = (scorList) => {
      const filterEmptyScore = scorList.filter(user => user.score !== 0);
      const _this = this.context;
      let record = _this.wrapper.querySelector(`.${_this.gameClass}-records`);
      let table = _this.wrapper.querySelector(`.${_this.gameClass}-records__table`);
      if (table) {
         table.remove();
      }
      if (filterEmptyScore.length) {
         table = document.createElement('div');
         table.classList.add(`${_this.gameClass}-records__table`);
         table.style.cssText = _this.styles.recordTable;
         record.append(table);
         filterEmptyScore
            .forEach((user, i) => {
               /*       if (!user.score) { //! Т.к. этот блок убран в основном массиве остались записи с нулевым счетом
                        scorList.splice(i, 1); //TODO Этот блок можно убрать, если перед перебором пройтись фильтром + скорее всего уйдет маленький баг с лишним бордером, при рестарте с нулевым счетом
                        // 
                        if (!scorList.length) { //Исправление бага с бордером из TODO выше, баг с бордером строки остался, если список больше одного
                           table.style.border = "";
                        }
                     } */
               //   else {

               let row = document.createElement('div');
               row.classList.add(`${_this.gameClass}-records__row`);
               row.style.cssText = _this.styles.recordRow;
               if (i === filterEmptyScore.length - 1) {
                  row.style.borderBottom = "";
               }
               let spanId = document.createElement('span');
               spanId.classList.add(`.${_this.gameClass}-records__id`);
               spanId.innerText = `${i + 1})`;
               let spanLogin = document.createElement('span');
               spanLogin.classList.add(`${_this.gameClass}-records__login`);
               spanLogin.style.cssText = _this.styles.recordLogin;
               spanLogin.innerText = user.name + ": ";
               let spanScore = document.createElement('span');
               spanScore.classList.add(`${_this.gameClass}-records__score`);
               spanScore.innerText = user.score;
               row.append(spanId);
               row.append(spanLogin);
               row.append(spanScore);
               table.append(row);
               //    }
            })
      }
      else if (table) {
         table.style.border = "";
      }
   }
}