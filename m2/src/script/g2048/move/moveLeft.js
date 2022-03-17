export default async (context) => {
   let renderList = new Set();
   let summAnimList = [];
   let animList = []; //Для анимации ячеек при возврате шага 
   for (let i = 0; i < context.height; i++) {
      for (let j = 1; j < context.width; j++) {
         if (context.field[i][j] !== 0) {
            if (context.field[i][j - 1] === 0) {
               [context.field[i][j - 1], context.field[i][j]] = [context.field[i][j], 0]
               context.animate.movingEl('left', `.c${i}${j}`)
               animList.push({ i, j });
               renderList.add(i)
               j = j > 1 ? j - 2 : 0;
            }
            else if (context.field[i][j] === context.field[i][j - 1]) {
               const hasInList = (i, j) => summAnimList.some(item => item.i === i && item.j === j);
               const canSumm = !(hasInList(i, j) || hasInList(i, j - 1))
               if (canSumm) {
                  const summ = context.field[i][j] * 2;
                  context.score += summ;
                  context.best = context.best > context.score ? context.best : context.score;
                  [context.field[i][j], context.field[i][j - 1]] = [0, summ];
                  renderList.add(i)
                  summAnimList.push({ i, 'j': j - 1 })
               }
            }
         }
      }
   }
   await context.movingPromise;
   context.stepData = {
      direction: 'right',
      vector: 'vertical',
      renderList: new Set(renderList),
      animList: JSON.parse(JSON.stringify(animList))
   }
   return ({ vector: 'vertical', renderList, summAnimList, })
}