const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const cloudinary = require('../modules/cloudinary');

// GET - ROUTE 
router.get('/', (req, res) => {
    const query = `SELECT * FROM "product" ORDER BY "id" DESC;`;
    pool.query(query)
      .then( result => {
        res.send(result.rows);
      })
      .catch( error => {
        console.log('ERROR IN PRODUCT.ROUTER.GET', error);
        res.sendStatus(500)
      })
});

// POST - ROUTE
router.post('/', async (req, res) => {
    // console.log('what is our req.body data:', req.body);
    // console.log('userID is:', id);

  try {
    const id = req.user.id
    const brandName = req.body.brand_name;
    const description = req.body.description;
    const fileStr = req.body.product_url;
    const uploadResponse = await cloudinary.uploader.upload(fileStr, {
        upload_preset: 'product_feed',
    });
    console.log(uploadResponse);

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

} catch (err) {
    console.error(err);
    res.status(500).json({ err: 'Something went wrong' });
 }
});

// DELETE - ROUTE 
router.delete('/:id', (req, res) => {

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

module.exports = router;