import express from 'express';
import bcrypt from 'bcrypt';
import User from '../models/user';
import jwt from 'jsonwebtoken';
import config from '../config';

let router = express.Router();

router.post('/', (req, res) => {
      const { id, password } = req.body;
      const password_digest = bcrypt.hashSync(password, 10);
      User.query({
        where: ({ email: id }),
        orWhere: { username: id }
      }).fetch().then(user => {
          if (user) {
            if (bcrypt.compareSync(password, user.get('password_digest'))) {
              const token = jwt.sign({
                id: user.get('id'),
                username: user.get('username')
              }, config.jwtSecret);
              res.json({token});
            } else {
              res.status(401).json({ errors: { form: 'Invalid Credentials' } });
            }
          } else {
              res.status(401).json({ errors: { form: 'Invalid Credentials' } });
          }
      });
});

router.get('/:id', (req, res) => {
  User.query({
    select: [ 'username', 'email', 'firstname', 'lastname' ],
    where: ({ email: req.params.id }),
    orWhere: { username: req.params.id }
  }).fetch().then(user => {
      res.json({ user });
  });
});

export default router;
