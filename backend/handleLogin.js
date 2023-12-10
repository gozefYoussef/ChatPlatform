const handleSignin = (req, res, db, bcrypt) => {
  const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json('incorrect form submission');
    }
    const hash = bcrypt.hashSync(password,10);
    db.select('*').from('users')
      .where('username', '=', username && 'password', '=', hash)
      .then(user => {
        res.json({user: user[0], ok: true});
        })
      .catch(err => res.status(400).json('unable to get user'))
        
  }
  
  module.exports = {
    handleSignin
  }