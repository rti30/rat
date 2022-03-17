export default async (context) => {
   const { animList, direction, renderList, vector, newNum, score: oldscore, best: oldBest } = context.steps.pop();
   const cell = context.nodeField.querySelector(`.c${newNum.i}${newNum.j}`);
   cell.innerText = "";
   const { best, score, field } = context.steps[context.steps.length - 1];
   context.field = JSON.parse(JSON.stringify(field));
   context.score = score;
   context.best = best;
   animList.forEach(item => context.animate.movingEl(direction, `.c${item.i}${item.j}`));
   await context.movingPromise;
   return ({ vector, renderList, summAnimList: [], back: { back: true, oldscore, oldBest } })
}