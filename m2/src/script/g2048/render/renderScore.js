import innerScore from "../helper/innerScore"

export default ({ back, oldscore, oldBest, context }) => {
   const prewBest = back ? oldBest : context.steps[context.steps.length - 2].best;
   const prewScore = back ? oldscore : context.steps[context.steps.length - 2].score;
   let diffScore = context.score - prewScore;
   let diffBest = context.best - prewBest;
   innerScore(context);
   context.animate.animDiff(diffScore, context.nodeScoreWrapper)
   context.animate.animDiff(diffBest, context.nodeBestWrapper)
}