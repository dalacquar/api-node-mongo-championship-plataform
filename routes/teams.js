const router = require("express").Router();

const teamsController = require("../controllers/teamController");

router.route("/teams").post((req, res) => teamsController.create(req, res));
router.route("/teams").get((req, res) => teamsController.getAll(req, res));
router.route("/teams/:id").get((req, res) => teamsController.get(req, res));
router.route("/teams/:id").delete((req, res) => teamsController.delete(req, res));
router.route("/teams/:id").put((req, res) => teamsController.update(req, res));



module.exports = router;