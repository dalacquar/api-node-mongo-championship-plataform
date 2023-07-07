const router = require("express").Router();

const gameController = require("../controllers/gameController");

router.route("/games").post((req, res) => gameController.create(req, res));
router.route("/games").get((req, res) => gameController.getAll(req, res));
router.route("/games/:id").get((req, res) => gameController.get(req, res));
router.route("/games/:id").delete((req, res) => gameController.delete(req, res));
router.route("/games/:id").put((req, res) => gameController.update(req, res));

module.exports = router;