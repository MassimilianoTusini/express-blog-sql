const express = require("express");
const router = express.Router();
console.log("📁 File routers/posts.js caricato");

const prodController = require('../controllers/prodController');

// Rotte
router.get("/", prodController.index);
router.get("/:id", prodController.show);
router.delete("/:id", prodController.destroy);

module.exports = router;

