const bcrypt = require("bcrypt");

module.exports = {
  login: async (req, res, next) => {
    const db = req.app.get("db");
    let { email, password } = req.body;
    const message = "Incorrect email and/or password";
    const foundUser = await db
      .select_user(email)
      .catch(err => console.log(err));
    if (!foundUser.length) {
      res.status(401).send("That user doesn't exist");
    } else {
      const matchPasswords = await bcrypt
        .compare(password, foundUser[0].password)
        .catch(err => console.log(err));

      if (matchPasswords) {
        req.session.user = {
          firstname: foundUser[0].firstname,
          user_id: foundUser[0].user_id
        };
        res.status(200).send(req.session.user);
      } else {
        res.status(401).send(message);
      }
    }
  },
  register: async (req, res, next) => {
    const db = req.app.get("db");
    const { email, password, firstname, lastname } = req.body;
    const foundUser = await db.select_user(email);
    console.log(foundUser);
    if (foundUser.length) {
      res
        .status(409)
        .send("That user already exists! Please use an alternate email");
    } else {
      const saltRounds = 12;
      bcrypt.genSalt(saltRounds).then(salt => {
        bcrypt.hash(password, salt).then(hashedPassword => {
          db.create_user([email, hashedPassword, firstname, lastname]).then(
            ([user]) => {
              req.session.user = user;
              res.status(200).send(req.session.user);
            }
          );
        });
      });
    }
  },
  logout: (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
  },
  userSession: (req, res) => {
    console.log("User session is requested!");
    res.status(200).send(req.session.user);
  }
};
