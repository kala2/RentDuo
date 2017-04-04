import express from 'express';
import commonValidations from '../shared/validations/signup';
import bcrypt from 'bcrypt';
import User from '../models/user';
import isEmpty from 'lodash/isEmpty';
import jwt from 'jsonwebtoken';
import config from '../config';

let router = express.Router();

function validateInput(data, otherValidations) {

  let { errors } = otherValidations(data);

  return User.query({
    where: ({ email: data.email }),
    orWhere: { username: data.username }
  }).fetch().then(user => {
      if (user) {
        if (user.get('username') === data.username) {
          errors.username = 'There is a user with this name. Please pick another!';
        }
        if (user.get('email') === data.email) {
          errors.email = 'There is a user with this email. Please pick another!';
        }
      }
      return {
        errors,
        isValid: isEmpty(errors)
      };
  })
}

router.get('/', (req, res) => {
  const authorizationHeader = req.headers['authorization'];
  let token;

  if (authorizationHeader) {
    token = authorizationHeader.split(' ')[1];
  }
  jwt.verify(token, config.jwtSecret, (err, decoded) => {
    if (err) {
      res.status(401).json({
        error: 'Failed to authenticate'
      });
    } else {
      User.query({
        where: { id: decoded.id },
        select: [ 'email', 'id', 'username' ]
      }).fetch().then(user => {
        if (!user) {
          res.status(404).json({ error: 'No such user' });
        } else {
          res.json({ user });
        }
      });
    }
  });
});

export default router;
