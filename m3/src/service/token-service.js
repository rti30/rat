const jwt = require('jsonwebtoken');
class TokenService {
   generateToken = (payload) => jwt.sign(payload, process.env.SECRET_KEY);
   parseToken = (payload) => jwt.verify(payload, process.env.SECRET_KEY);
}
module.exports = new TokenService();