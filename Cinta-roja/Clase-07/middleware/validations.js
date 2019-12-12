const jwt = require("jsonwebtoken");
const KEY = "QWERTY123";

module.exports = {
    validateToken: (req, res, next) => {
        const isToken = req.headers.authorization;
        if (isToken) {
          if (isToken.startsWith("tk ")) {
            const token = isToken.slice(3, isToken.length);
            jwt.verify(token, KEY, (err, decode) => {
              if (err) {
                res.status(403).send(err);
              } else {
                req.decode = decode;
                next();
              }
            });
          } else {
            res.status(403).send({ message: "Sufijo incorrecto" });
          }
        } else {
          res.status(403).send({ message: "Necesitas un token para entrar" });
        }
      },
}