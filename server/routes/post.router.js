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
      // console.log(uploadResponse);
      const image = uploadResponse.url
  
      const queryText = `INSERT INTO "post" ("image_url", "description", "user_id") VALUES ($1, $2, $3);`;
  
      const queryValues = [
        image,
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

// DELETE - ROUTE 
router.delete('/:id', (req, res) => {

  console.log(`Deleting Item with ID ${req.params.id}`);
    
    const sqlText = `
        DELETE from "post"
        WHERE "id"=$1;
        `
    let sqlVal = [req.params.id];
    
    pool.query(sqlText, sqlVal)

    .then( delRes => {
        console.log('DELETE Route Successful', delRes);
        res.sendStatus(200);
    })
    .catch( delErr => {
        console.log('DELETE Route Unsuccessful', delErr);
        res.sendStatus(500);
    });
});

// GET - ROUTE FOR EDIT POST 
router.get('/:id', (req, res) => {

  const sqlText = `
    SELECT * FROM "post"
    WHERE id=$1;
  `
  const sqlValues = [req.params.id]

  pool.query(sqlText, sqlValues)

    .then((result) => {
      res.send(result.rows[0]);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
});

// PUT - ROUTE 
router.put('/:id', (req, res) => {
  // console.log('are we making it here');
  // console.log('What is our req.body:', req.body)

  const idToUpdate = req.body.id;
  const descriptionUpdate = req.body.description;

  const sqlText = `
  UPDATE "post"
  SET "description" = $1
  WHERE"id" = $2`;

const sqlValues = [descriptionUpdate, idToUpdate]

  pool.query(sqlText, sqlValues)
      .then(result => {
        res.sendStatus(200);
      })
      .catch(error => {
        console.log(`Error making database query ${sqlText}`, error);
        res.sendStatus(500);
      });
});

module.exports = router;
