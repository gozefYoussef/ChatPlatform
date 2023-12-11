const handleRegister = (req, res, db, bcrypt) => {
    const { phone, fullname, username, avatarURL, password } = req.body;
    if (!username || !phone || !password) {
      return res.status(400).json('incorrect form submission');
    }
    const hash = bcrypt.hashSync(password,10);
    db('users')
    .insert({
      fullname: fullname,
      username: username,
      phone: phone,
      avatarurl: avatarURL,
      password: hash
    })
    .returning('*') // This ensures that the inserted user data is returned
    .then((user) => {
      res.json({user: user[0], ok:true}); // Sending the inserted user data as the response
    })
    .catch((err) => {
      console.error('Error during registration:', err);
      res.status(500).json('Error during registration');
    });
      }
  
  module.exports = {
    handleRegister
  };