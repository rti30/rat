import initCell from "../helper/initCell";
import renderScore from "/src/script/g2048/render/renderScore"

export default (context) => (direction, renderList, summAnimList, backConfig) => {
   if (renderList.size) {
      const size = (direction === "horizontal") ? context.height : context.width;
      renderList.forEach((j) => {
         for (let i = 0; i < size; i++) {
            const cell = (direction === "horizontal") ? context.nodeField.querySelector(`.c${i}${j}`) : context.nodeField.querySelector(`.c${j}${i}`);
            const value = (direction === "horizontal") ? context.field[i][j] : context.field[j][i];
            if (value) {
               cell.innerText = "";
               cell.append(value);
            }
            else {
               cell.innerText = "";
               cell.style.backgroundColor = "#7B68EE"
            }
         }
      });
      let cellWinCandidate = 0;
      summAnimList.forEach(({ i, j }) => {
         let cell = context.nodeField.querySelector(`.c${i}${j}`);
         cell.style.textShadow = context.styles.glowShadow;
         setTimeout(() => {
            cell.style.textShadow = context.styles.textShadow;
         }, 700)
         cellWinCandidate = context.field[i][j] > cellWinCandidate ? context.field[i][j] : cellWinCandidate;
      })
      initCell(context);
      if (!backConfig?.back) {
         context.addNumber();
         context.saveStep();
      }
      renderScore({ context, back: backConfig?.back, oldscore: backConfig?.oldscore, oldBest: backConfig?.oldBest });
      context.checkGameWin(cellWinCandidate);
   }
}