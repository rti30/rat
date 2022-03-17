export default (context) => {
   let field = document.createElement('div');
   field.classList.add(`${context.gameClass}__field`);
   field.style.cssText = context.styles.field;
   for (let i = 0; i < context.height; i++) {
      context.field[i] = [];
      for (let j = 0; j < context.width; j++) {
         context.field[i][j] = 0;
         let cell = document.createElement('div');
         let item = document.createElement('div');
         cell.classList.add(`${context.gameClass}__cell`);
         cell.style.cssText = context.styles.cell;
         item.classList.add(`${context.gameClass}__item`);
         item.classList.add('c' + i.toString() + j.toString());
         item.style.cssText = context.styles.cellItem;
         cell.append(item);
         field.append(cell);
      }
   }
   context.wrapper.append(field);
   context.nodeField = context.wrapper.querySelector(`.${context.gameClass}__field`);
   context.nodeField.style.setProperty('grid-template-columns', 'repeat(' + context.height + ', 1fr)');
   context.nodeField.style.setProperty('grid-template-rows', 'repeat(' + context.width + ', 1fr)');
}