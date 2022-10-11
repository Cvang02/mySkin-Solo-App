const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const cloudinary = require('../modules/cloudinary');

router.post('/', async (req, res) => {

    try {
      const id = req.user.id
      const description = req.body.description;
      console.log('userID is:', id);
      const fileStr = req.body.image_url;
      const uploadResponse = await cloudinary.uploader.upload(fileStr, {
          upload_preset: 'post_feed',
      });
      console.log(uploadResponse);
  
      const queryText = `INSERT INTO "post" ("image_url", "description", "user_id") VALUES ($1, $2, $3);`;
  
      const queryValues = [
        uploadResponse.url,
        description,
        id
      ]
      pool.query(queryText, queryValues)
  
  } catch (err) {
      console.error(err);
      res.status(500).json({ err: 'Something went wrong' });
   }
  });

module.exports = router;
