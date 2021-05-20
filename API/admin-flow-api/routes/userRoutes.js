const router = require('express').Router()
const User = require('../models/User')

router.post('/login', (req, res) => {
  const { email, password } = req.body

  User.findOne({ email })
    .then(user => {
      if(!user) {
        res.status(404).json({ msg: 'User Not found.' })
      } else {
        if(user.comparePasswordHash(password)) {
          res.json(user.genUserObj())
        } else {
          res.status(401).json({ msg: 'Invalid Credentials.' })
        }
      }      
    })
    .catch(err => res.status(500).json(err))
});
router.post('/register', (req, res) => {
  const { name, email, password } = req.body;
  const user = new User()

  user.name = name
  user.email = email
  user.genPasswordHash(password)

  user.save()
    .then(newUser => res.json(newUser.genUserObj()))
    .catch(err => res.status(500).json(err))
})

router.get('/users', (req, res) => {

  User.find({})
      .then(users => {
        if(!users) {
          res.status(404).json({ msg: 'User Not found.' })
        } else {
            res.json(users)
        }
      })
      .catch(err => res.status(500).json(err))
});

module.exports = router
