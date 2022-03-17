export default (media, handler) => {
   const query = window.matchMedia(media);
   if (query.matches) {
      handler();
   }
   query.addEventListener("change", (e) => {
      if (e.matches) {
         handler();
      }
   })
}

