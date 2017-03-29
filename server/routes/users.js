import express from 'express';
import commonValidations from '../shared/validations/signup';
import bcrypt from 'bcrypt';
import User from '../models/user';
import isEmpty from 'lodash/isEmpty';

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

router.post('/', (req, res) => {
  validateInput(req.body, commonValidations).then(({ errors, isValid}) => {
    if(isValid) {
      const { username, email, password } = req.body;
      const password_digest = bcrypt.hashSync(password, 10);

      User.forge({
        username, email, password_digest
      }, { hasTimestamps: true }).save()
        .then( user => res.json({ success: true }))
        .catch( err => res.status(500).json({ error: err }));
    } else {
      res.status(400).json(errors);
    }
  });
});

router.get('/:id', (req, res) => {
  User.query({
    select: [ 'username', 'email' ],
    where: ({ email: req.params.id }),
    orWhere: { username: req.params.id }
  }).fetch().then(user => {
      res.json({ user });
  });
});

export default router;
