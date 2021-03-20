const path = require("path");
const router = require("express").Router();

// Route to notes page
router.get("/portfolio", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/portfolio.html"));
});
// Route to notes page
router.get("/contact", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/contact.html"));
});
// Directs to home page
router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;
