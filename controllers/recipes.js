// controllers/recipes.js

const express = require('express');
const router = express.Router();

const User = require('../models/user.js');
const Recipe = require('../models/recipe.js');

// router logic will go here - will be built later on in the lab

router.get('/', async (req, res) => {
    const allRecipes = await Recipe.find({});
    console.log(allRecipes) //all the recipes in console
    res.render('recipes/index.ejs', {recipes: allRecipes});
});


router.post('/', async (req, res) => {
    try {
      const newRecipe = new Recipe(req.body);
      newRecipe.owner = req.session.user._id
      await newRecipe.save();
      // Redirect to recipe index or show page
    } catch (error) {
      // Handle errors
    }
  });

router.get('/new', async (req,res)=>{
    // res.send("we've hit the new page")
    res.render('recipes/new.ejs')
})

module.exports = router;
