//bringing in express router and the books.js file
const router = require("express").Router();
const bookRoutes = require("./books");

// Book routes
router.use("/books", bookRoutes);

//exporting router
module.exports = router;