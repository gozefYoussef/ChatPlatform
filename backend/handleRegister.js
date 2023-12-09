const handleRegister = (req, res, db, bcrypt) => {
    const { phone, fullname, username, avatarURL, password } = req.body;
    if (!username || !phone || !password) {
      return res.status(400).json('incorrect form submission');
    }
    const hash = bcrypt.hashSync(password);
      db.transaction(trx => {
        trx.insert({
          password: hash,
          username: username
        })
        .into('login')
        .returning('username')
        .then(username => {
          return trx('users')
            .returning('*')
            .insert({
              // If you are using knex.js version 1.0.0 or higher this now returns an array of objects. Therefore, the code goes from:
              // loginEmail[0] --> this used to return the email
              // TO
              // loginEmail[0].email --> this now returns the email
              phone: phone,
              fullname: fullname,
              avatarurl: avatarURL,
              password: hash,
              username: username,
            })
            .then(user => {
              res.json({user: user[0], ok:true});
            })
        })
        .then(trx.commit)
        .catch(trx.rollback)
      })
      .catch(err => res.status(400).json('unable to register'))
  }
  
  module.exports = {
    handleRegister
  };