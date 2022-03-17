import moveLeft from "/src/script/g2048/move/moveLeft"
import moveRight from "/src/script/g2048/move/moveRight"
import moveTop from "/src/script/g2048/move/moveTop"
import moveBottom from "/src/script/g2048/move/moveBottom"
import moveBack from "/src/script/g2048/move/moveBack"
import renderGame from '/src/script/g2048/render/renderGame.js';

export default (context) => async (direction) => {
   const render = renderGame(context);
   if (context.canMove && context.checkVisible() && context.checkIsLogin()) {
      const { vector, renderList, summAnimList, back } = await (() => {
         context.canMove = false;
         switch (direction) {
            case 'left':
               return moveLeft(context)
            case 'right':
               return moveRight(context)
            case 'top':
               return moveTop(context)
            case 'bottom':
               return moveBottom(context)
            case 'back':
               return moveBack(context)
         }
      })();
      render(vector, renderList, summAnimList, back);
   }
   context.canMove = true;
}