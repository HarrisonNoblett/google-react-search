//Bringing in express and the controller file
const router = require("express").Router();
const booksCont = require("../../controller/bookCont");

// Matches with "/api/books"
router.route("/")
  .get(booksCont.findAll)
  .post(booksCont.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .delete(booksCont.remove);

module.exports = router;