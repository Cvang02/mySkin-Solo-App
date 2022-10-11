const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const cloudinary = require('../modules/cloudinary');

router.post('/', async (req, res) => {
    
    try {
      const fileStr = req.body.profile_url;
      const uploadResponse = await cloudinary.uploader.upload(fileStr, {
          upload_preset: 'Profile_image_url',
      });
      console.log(uploadResponse);
  
      const queryText = `INSERT INTO "profileImage" ("profile_url") VALUES ($1);`;
  
      const queryValues = [uploadResponse.url]
      pool.query(queryText, queryValues)
  
  } catch (err) {
      console.error(err);
      res.status(500).json({ err: 'Something went wrong' });
   }
});

router.get('/', (req, res) => {
  const query = `SELECT * FROM "profileImage"`;
  pool.query(query)
  .then( result => {
  res.send(result.rows);
  })
  .catch(err => {
  console.log('ERROR:', err);
  res.sendStatus(500)
  })
});

module.exports = router;