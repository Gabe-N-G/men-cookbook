const mongoose = require('mongoose');

const ingredientSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const Ingredient = mongoose.model('ingredient', ingredientSchema);

module.exports = Ingredient;
