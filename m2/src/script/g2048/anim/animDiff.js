export default async (diff, diffWrapper, animate, context) => {
   if (diff) {
      let nodeDiff = document.createElement('div');
      nodeDiff.style.cssText = context.styles.scoreDiff;
      nodeDiff.innerText = diff > 0 ? "+" + diff : diff;
      diffWrapper.append(nodeDiff);
      //
      const moveDiff = (y) => nodeDiff.style.transform = `translate(${-50}%, ${y}%)`;
      const movingDiffPromise = animate({
         timing: (timeFraction) => timeFraction,
         duration: 500,
         draw: (progress) => {
            let y = -50 + progress * -150;
            moveDiff(y)
         }
      })
      await movingDiffPromise;
      nodeDiff.remove();
   }
}