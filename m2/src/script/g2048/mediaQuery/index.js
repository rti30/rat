import mediaQuery from '/src/script/g2048/mediaQuery/mediaQuery.js';

export default (context) => {
   const handlerMaxWidth768 = () => {
      context.wrapper.style.setProperty('grid-template-areas', '"header" "field" "record"');
      context.nodeField.style.width = 320 + "px";
      context.nodeField.style.height = 320 + "px";
      context.defaultFontSize = 20;
   }
   const handlerMinWidth768 = () => {
      context.wrapper.style.setProperty('grid-template-areas', ' "header header" "field record"');
      context.nodeField.style.width = 450 + "px";
      context.nodeField.style.height = 450 + "px";
      context.defaultFontSize = 25;
   }
   const handlerMinWidth1600 = () => {
      context.nodeField.style.width = 500 + "px";
      context.nodeField.style.height = 500 + "px";
      context.defaultFontSize = 30;
   }
   mediaQuery("(max-width: 768px)", handlerMaxWidth768)
   mediaQuery("(min-width: 768px)", handlerMinWidth768)
   mediaQuery("(min-width: 1600px)", handlerMinWidth1600)
}