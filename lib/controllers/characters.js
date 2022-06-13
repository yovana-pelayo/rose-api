const { Router } = require('express');
const Character = require('../models/Character');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const id = req.params.id;
    const matchingCharacter = await Character.getById(id);
    res.json(matchingCharacter);
  })
  .get('/', async (req, res) => {
    const character = await Character.getAll();
    console.log('character', character);
    res.json(character);
  });
