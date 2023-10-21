const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const config = require("../../../config");
const { models } = require("../../../models/definitions");
let tokens = [];
function generateAccessToken(user) {
  return jwt.sign(user, config.jwt);
}
module.exports = {
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      let user = await models.user.findOne({
        where: {
          email: email,
        },
      });
      console.log(user);
      user = user?.dataValues;
      if (user && (await bcrypt.compareSync(password, user.password))) {
        const token = generateAccessToken(user);
        tokens.push(token);
        res.json({ token: token });
      } else {
        res.status(404).send("user does not exist");
      }
    } catch (e) {
      console.log(e);
      res.status(400).send(e.message);
    }
  },
};
