

module.exports = class ApiError extends Error {
   constructor(status, messege) {
      super();
      this.status = status;
      this.messege = messege;
   }

   static BadRequest = (messege) => new ApiError(400, messege)
   static ServerBusy = () => new ApiError(500, `Серверу не удается получить запросы. Повторите запрос.`)
}