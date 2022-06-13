const { Router } = require('express');
const Character = require('../models/Character');

module.exports = Router().get('/', async (req, res) => {
  const character = await Character.getAll();
  res.json(character);
});

// .post('/',  async (req, res, next) => {
//   try {
//     const Character = await Character.insert(req.body);

//   }
// })
// .get('/:id', async (req, res) => {
//   const id = req.params.id;
//   const matchingCharacter = await Character.getById(id);
//   res.json(matchingCharacter);
// })
