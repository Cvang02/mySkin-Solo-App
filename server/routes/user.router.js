const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');
const cloudinary = require('../modules/cloudinary');

const router = express.Router();

// Handles Axios request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/register', async (req, res, next) => {
  // console.log('what is req.body', req.body);
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);
  const email = req.body.email;
  const firstName = req.body.first_name;
  const lastName = req.body.last_name;

  const fileStr = req.body.profile_url;
  const uploadResponse = await cloudinary.uploader.upload(fileStr, {
      upload_preset: 'Profile_image_url',
  });

  const profileImage = uploadResponse.url

  const queryText = `INSERT INTO "user" ("username", "password", "email", "first_name", "last_name", "profile_url")
    VALUES ($1, $2, $3, $4, $5, $6) RETURNING id`;

  pool.query(queryText, [username, password, email, firstName, lastName, profileImage])

    .then(() => {
      res.sendStatus(201)
    })
    .catch((err) => {
      console.log('User registration failed: ', err);
      res.sendStatus(500);
    });
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.post('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

// PUT - ROUTE 
router.put('/:id', rejectUnauthenticated, (req, res) => {
  // console.log('are we making it here');
  // console.log('What is our req.body:', req.body)

  const id = req.body.id;
  const username = req.body.username;
  const email = req.body.email;
  const firstName = req.body.first_name;
  const lastName = req.body.last_name;
  const profile_url = req.body.profile_url;

  const sqlText = `
    UPDATE "user" 
    SET ("username", "email", "first_name", "last_name", "profile_url") = ($1, $2, $3, $4, $5)
    WHERE "id" = $6`;

const sqlValues = [username, email, firstName, lastName, profile_url, id]

  pool.query(sqlText, sqlValues)
      .then((result) => {
          console.log('sucess:', result)
          res.sendStatus(200);
      })
      .catch((error) => {
          console.log(`Error making database query ${sqlText}`, error);
          res.sendStatus(500);
      });
});
module.exports = router;
