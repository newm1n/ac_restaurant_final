const express = require("express");
const router = express.Router();
const Restaurant = require("../../models/restaurant");

// create new restaurant data
router.get("/new", (req, res) => {
  res.render("new");
});

router.post("/", (req, res) => {
  Restaurant.create(req.body)
    .then(() => res.redirect("/"))
    .catch((error) => console.log(error));
});

// edit restaurant data
router.get("/:id/edit", (req, res) => {
  const { id } = req.params;
  Restaurant.findById(id)
    .lean()
    .then((restaurant) => res.render("edit", { restaurant }))
    .catch((error) => console.log(error));
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  Restaurant.findByIdAndUpdate(id, req.body)
    .then(() => res.redirect(`/restaurants/${id}`))
    .catch((err) => console.log(err));
});

// show one restaurant content
router.get("/:id", (req, res) => {
  Restaurant.findOne({ _id: req.params.id })
    .lean()
    .then((restaurant) => res.render("show", { restaurant }))
    .catch((error) => console.error(error));
});

// delete restaurant data
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Restaurant.findByIdAndDelete(id)
    .then(() => res.redirect("/"))
    .catch((err) => console.log(err));
});

module.exports = router;
