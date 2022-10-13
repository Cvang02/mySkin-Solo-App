const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

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

module.exports = router;