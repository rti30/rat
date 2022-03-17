export default ({ timing, draw, duration }) => {
   return new Promise(resolve => {
      let start = performance.now();
      let animate = (time) => {
         let timeFraction = (time - start) / duration;
         if (timeFraction > 1) timeFraction = 1;
         // вычисление текущего состояния анимации
         let progress = timing(timeFraction);
         draw(progress); // отрисовать её
         if (timeFraction < 1) {
            requestAnimationFrame(animate);
         }
         else {
            resolve();
         }
      }
      requestAnimationFrame(animate);
   })
}