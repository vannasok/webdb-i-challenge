const express = require('express');
const router = express.Router();
const db = require('./data/dbConfig.js');

// get ########################
router.get('/', (req, res) => {
   db('accounts')
      .then(accounts => {
         res.status(200).json(accounts);
      })
      .catch(error => {
         res.status(500).json({ error: 'Could Not Retrieve All Data' });
      });
});

//get by id #########################
router.get('/:id', (req, res) => {
   const id = req.params.id;

   db('accounts')
      .where('id', '=', id)
      .then(account => (account.length ? res.json(account) : reject()))
      .catch(error => {
         res.status(500).json({ error: 'Could Not Find Account With This ID' });
      });
});

//post ######################
router.post('/', (req, res) => {
   const data = req.body;

   db('accounts')
      .insert(data, 'id')
      .then(acc => {
         res.status(200).json({ message: 'Account Added.' });
      })
      .catch(error => {
         res.status(500).json({ error: 'Could Not Upload The Data. ' });
      });
});

//put ###################
router.put('/:id', (req, res) => {
   const id = req.params.id;
   const body = req.body;

   db('accounts')
      .where({ id })
      .update(body)
      .then(update => {
         res.status(200).json({ message: 'Account have changed' });
      })
      .catch(error => {
         res.status(500).json({ error: 'Could Not Change the Data ' });
      });
});

//delete ######################
router.delete('/:id', (req, res) => {
   const id = req.params.id;
   const body = req.body;

   db('accounts')
      .where({ id })
      .delete(body)
      .then(response => {
         res.status(200).json({ message: 'Deleted Successful.' });
      })
      .catch(error => {
         res.status(500).json({ error: 'Could Not Delete' });
      });
});

module.exports = router;
