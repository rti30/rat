const recordService = require('../service/record-service.js');
const tokenService = require('../service/token-service.js');
const apiError = require('../exceptions/api-errors')

const setOrigin = (req, res) => {
   res.header('Access-Control-Allow-Origin', req.headers.origin);
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
}
class RecordController {
   async getRecords(req, res, next) {
      try {
         const result = await recordService.getRecords();
         return res.json(result);
      }
      catch (e) {
         return next(apiError.ServerBusy());
      }
   }
   async setRecord(req, res, next) {
      try {
         const { login, flag } = req.body;
         if (!login || !flag) {
            return next(apiError.BadRequest("Обязательные параметры не переданы"));
         }
         if (flag === 'start') {
            const token = tokenService.generateToken({ login, start: Date.now() });
            setOrigin(req, res);
            res.cookie('g2048', token, { httpOnly: true });
            return res.json(true);
         }
         else if (flag === 'end') {
            const { g2048: token } = req.cookies;
            if (token) {
               setOrigin(req, res);
               const end = Date.now();
               const { start, login: cookieLogin } = tokenService.parseToken(token);
               const time = end - start;
               if (cookieLogin !== login) {
                  return next(apiError.BadRequest("Логины не совпадают, результат не сохранён, начните игру снова"));
               }
               if (time && time < 1) { //Если время прохождения меньше 1 mlsec
                  return next(apiError.BadRequest("Некорректные данные, начните игру снова"));
               }
               await recordService.setRecord(login, time)
               return res.json(true);
            }
            else {
               return next(apiError.BadRequest("Токен не передан, результат не сохранён"));
            }
         }
      }
      catch (e) {
         console.log(e)
         return next(apiError.ServerBusy());
      }
   }
}

module.exports = new RecordController();