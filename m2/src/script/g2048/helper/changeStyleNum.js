export default (number, node, defaultFontSize) => {
   if (number > 4) {
      node.style.color = "#ffffff"
   }
   if (number < 8) {
      node.style.color = "#000000"
   }
   const numberLength = number.toString().length;
   if (numberLength === 1) {
      node.style.fontSize = defaultFontSize + 'px';
   }
   else if (numberLength === 2) {
      node.style.fontSize = defaultFontSize - defaultFontSize * 10 / 100 + 'px';
   }
   else if (numberLength === 3) {
      node.style.fontSize = defaultFontSize - defaultFontSize * 15 / 100 + 'px';
   }
   else if (numberLength === 4) {
      node.style.fontSize = defaultFontSize - defaultFontSize * 20 / 100 + 'px';
   }
   else if (numberLength === 5) {
      node.style.fontSize = defaultFontSize - defaultFontSize * 25 / 100 + 'px';
   }
   else { node.style.fontSize = defaultFontSize - defaultFontSize * 30 / 100 + 'px'; }
   //===========================

   //? Тут можно обойтись без функции. Тогда не будет лишних вычислений. Но не семантично
   function counterMultyTwo(number = 2) {
      let result = 0;
      const diffTwo = (number2) => {
         number = number2 / 2;
         result++;
      }
      while (number !== 1) {
         diffTwo(number)
      }
      return result;
   }
   const levelCell = counterMultyTwo(number);

   if (levelCell === 1) {
      node.style.backgroundColor = "#7B68EE";
   }
   else if (levelCell === 2) {
      node.style.backgroundColor = "#7B68EE";
   }
   else if (levelCell === 3) {
      node.style.backgroundColor = "#073617";
   }
   else if (levelCell === 4) {
      node.style.backgroundColor = "#228b22";
   }
   else if (levelCell === 5) {
      node.style.backgroundColor = "#ffff00";
   }
   else if (levelCell === 6) {
      node.style.backgroundColor = "#ff8c00";
   }
   else if (levelCell === 8) {
      node.style.backgroundColor = "#ff4500";
   }
   else if (levelCell === 9) {
      node.style.backgroundColor = "#1e90ff";
   }
   else if (levelCell === 10) {
      node.style.backgroundColor = "#4169e1";
   }
   else if (levelCell === 11) {
      node.style.backgroundColor = "#0000cd";
   }
   else if (levelCell === 12) {
      node.style.backgroundColor = "#191970";
   }
   else if (levelCell === 13) {
      node.style.backgroundColor = "#4b0082";
   }
   else if (levelCell === 14) {
      node.style.backgroundColor = "#ff1493";
   }
   else {
      node.style.backgroundColor = "#dc143c";
   }
}