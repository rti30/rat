export default (commonClass) => {
   const games = document.querySelectorAll(`.${commonClass}`);
   const dopHeight = 60; //отсуп у мобилок
   if (games.length && games.length > 0) {
      games.forEach(game => {
         if (((game.getBoundingClientRect().top - document.body.clientHeight - dopHeight) <= 0) && (game.getBoundingClientRect().bottom + dopHeight >= 0)) {
            game.classList.add("gameVisible");
         }
         else {
            game.classList.remove("gameVisible");
         }
      })
   }
   const visibleGames = document.querySelectorAll(".gameVisible");
   if (visibleGames?.length && visibleGames > 1) {
      const activeGameIndex = Math.ceil(visibleGames.length / 2);
      visibleGames.forEach((game, i) => {
         if (visibleGames[i] !== activeGameIndex) {
            game.classList.remove("gameVisible");
         }
      })
   }
}