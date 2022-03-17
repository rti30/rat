import initCell from "../helper/initCell";
import innerScore from "../helper/innerScore"
export default (context) => {
   initCell(context);
   context.addNumber();
   context.addNumber();
   context.nodeField.ondragstart = () => false;
   context.steps.push({
      field: JSON.parse(JSON.stringify(context.field)),
      score: context.score,
      best: context.best
   });
   innerScore(context);
}