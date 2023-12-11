
    // const hash = bcrypt.hashSync(password,10);
    // db.select('*').from('users')
      // .where('username', '=', username && 'password', '=', hash)
      // .then(user => {
        // res.json({user: user[0], ok: true});
        // })
//       // .catch(err => res.status(400).json('unable to get user'))
//         
//   // }
//   
  // module.exports = {
    // handleSignin
//   // }
// 
//   
const handleSignin = (req, res, db, bcrypt) => {
  const { username, password } = req.body;
  
  if (!username || !password) {
    return res.status(400).json('Incorrect form submission');
  }

  db.select('*')
    .from('users')
    .where('username', '=', username)
    .then(users => {
      if (users.length === 1) {
        const isValid = bcrypt.compareSync(password, users[0].password);

        if (isValid) {
          res.json({ user: users[0], ok:true});
        } else {
          res.status(400).json('Wrong credentials');
        }
      } else {
        res.status(400).json('User not found');
      }
    })
    .catch(err => {
      console.error('Error during sign-in:', err);
      res.status(500).json('Internal server error');
    });
};

module.exports = {
  handleSignin
};
