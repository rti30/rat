export default async (context) => {
   let renderList = new Set();
   let summAnimList = [];
   let animList = []; //Для анимации ячеек при возврате шага 
   for (let i = 1; i < context.height; i++) {
      for (let j = 0; j < context.width; j++) {
         if (context.field[i][j] !== 0) {
            if (context.field[i - 1][j] === 0) {
               [context.field[i - 1][j], context.field[i][j]] = [context.field[i][j], 0]
               context.animate.movingEl('top', `.c${i}${j}`)
               animList.push({ i, j });
               renderList.add(j)
               i = i > 1 ? i - 2 : 0;
               break;
            }
            else if (context.field[i][j] === context.field[i - 1][j]) {
               const hasInList = (i, j) => summAnimList.some(item => item.i === i && item.j === j);
               const canSumm = !(hasInList(i, j) || hasInList(i - 1, j))
               if (canSumm) {
                  const summ = context.field[i][j] * 2;
                  context.score += summ;
                  context.best = context.best > context.score ? context.best : context.score;
                  [context.field[i][j], context.field[i - 1][j]] = [0, summ];
                  renderList.add(j)
                  summAnimList.push({ 'i': i - 1, j })

               }
            }
         }
      }
   }
   await context.movingPromise;
   context.stepData = {
      direction: 'bottom',
      vector: 'horizontal',
      renderList: new Set(renderList),
      animList: JSON.parse(JSON.stringify(animList))
   }
   return ({ vector: 'horizontal', renderList, summAnimList, })
}