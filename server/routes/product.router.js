const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const cloudinary = require('../modules/cloudinary');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

// GET - ROUTE 
router.get('/', rejectUnauthenticated, (req, res) => {
    const query = `SELECT * FROM "product" WHERE "user_id" = $1 ORDER BY "id" DESC;`;
    const sqlValues = [req.user.id]
    pool.query(query, sqlValues)
      .then( result => {
        res.send(result.rows);
      })
      .catch( error => {
        console.log('ERROR IN PRODUCT.ROUTER.GET', error);
        res.sendStatus(500)
      })
});

// POST - ROUTE
router.post('/', rejectUnauthenticated, async (req, res) => {
    // console.log('what is our req.body data:', req.body);
    // console.log('userID is:', id);
    const id = req.user.id
    const brandName = req.body.brand_name;
    const description = req.body.description;
    const fileStr = req.body.product_url;
    const uploadResponse = await cloudinary.uploader.upload(fileStr, {
        upload_preset: 'product_feed',
    });
    // console.log(uploadResponse);

    const queryText = `
      INSERT INTO "product" 
      ("product_url", "brand_name", "description", "user_id") 
      VALUES ($1, $2, $3, $4);`;

    const queryValues = [
      uploadResponse.url,
      brandName,
      description,
      id
    ]

    pool.query(queryText, queryValues)

    .then( result => {
      // console.log(result)
      res.send(result);
    })
    .catch(err => {
      console.log('ERROR:', err);
      res.sendStatus(500)
    })

});

// DELETE - ROUTE 
router.delete('/:id', rejectUnauthenticated, (req, res) => {

  console.log(`Deleting Item with ID ${req.params.id}`);
    
    const sqlText = `
        DELETE from "product"
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

// GET - ROUTE FOR EDIT PRODUCT 
router.get('/:id', rejectUnauthenticated, (req, res) => {

  const sqlText = `
    SELECT * FROM "product"
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
router.put('/:id', rejectUnauthenticated, (req, res) => {
  // console.log('are we making it here');
  console.log('What is our req.body:', req.body)

  const idToUpdate = req.body.id;
  const brandNameUpdate = req.body.brand_name;
  const descriptionUpdate = req.body.description;

  const sqlText = `
  UPDATE "product"
  SET ("brand_name", "description") = ($1, $2)
  WHERE"id" = $3`;

const sqlValues = [brandNameUpdate, descriptionUpdate, idToUpdate]

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