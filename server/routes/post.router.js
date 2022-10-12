const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const cloudinary = require('../modules/cloudinary');

// POST - ROUTE
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

// GET - ROUTE 
router.get('/', (req, res) => {
  const query = `SELECT * FROM "post" ORDER BY "id" DESC;`;
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
