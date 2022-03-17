export default async (direction, cell, animate, context) => {
   const cellNode = context.nodeField.querySelector(`${cell}`);
   const go = (x, y) => cellNode.style.transform = `translate(${x}%, ${y}%)`;
   let x, y = 0;
   context.movingPromise = animate({
      timing: (timeFraction) => timeFraction,
      duration: context.duration,
      draw: (progress) => {
         let value = 100 * progress;
         if (direction === "bottom") {
            [x, y] = [0, value]
         }
         else if (direction === "top") {
            [x, y] = [0, -value]
         }
         else if ((direction === "left")) {
            [x, y] = [-value, 0]
         }
         else if ((direction === "right")) {
            [x, y] = [value, 0]
         }
         go(x, y)
      }
   })
   await context.movingPromise;
   cellNode.style.transform = `translate(${0}%, ${0}%)`;
}