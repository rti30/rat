export default (context) => {
   let record = document.createElement('div');
   record.classList.add(`${context.gameClass}-records`)
   record.style.cssText = context.styles.record;
   let buttonList = document.createElement('button');
   buttonList.type = "button";
   buttonList.innerText = "Завершены";
   buttonList.style.cssText = context.styles.button
   buttonList.classList.add(`${context.gameClass}__button-list`);
   let buttonRecords = document.createElement('button');
   buttonRecords.type = "button";
   buttonRecords.style.cssText = context.styles.button
   buttonRecords.innerText = "Рекорды";
   buttonRecords.classList.add(`${context.gameClass}__button-records`);
   record.append(buttonList);
   record.append(buttonRecords);
   context.wrapper.append(record)
}