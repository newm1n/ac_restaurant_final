const express = require("express");
const router = express.Router();
const Restaurant = require("../../models/restaurant");

// view all restaurants
router.get("/", (req, res) => {
  Restaurant.find() // find data from Restaurant model
    .lean() // transform objects in Mongoose Model to JavaScript object
    .then((restaurantsData) => res.render("index", { restaurantsData }))
    .catch((error) => console.error(error));
});

// search bar
router.get("/search", (req, res) => {
  if (!req.query.keywords) {
    res.redirect("/");
  }

  const keywords = req.query.keywords;
  const keyword = req.query.keywords.trim().toLowerCase();

  Restaurant.find({})
    .lean()
    .then((restaurantsData) => {
      const filterRestaurantsData = restaurantsData.filter(
        (data) =>
          data.name.toLowerCase().includes(keyword) ||
          data.category.includes(keyword)
      );
      res.render("index", {
        restaurantsData: filterRestaurantsData,
        keywords,
      });
    })
    .catch((err) => console.log(err));
});

module.exports = router;
