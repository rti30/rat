import changeStyleNum from '/src/script/g2048/helper/changeStyleNum.js';

export default (context) => {
   context.emptyCell = context.field.reduce((acc, row, i) => {
      return [...acc, ...row.reduce((acc2, item, j) => {
         if (item) {
            const cell = context.nodeField.querySelector(`.c${i}${j}`);
            changeStyleNum(context.field[i][j], cell, context.defaultFontSize);
            return acc2;
         }
         else {
            return [...acc2, { i, j }];
         }
      }, [])]
   }, [])
}