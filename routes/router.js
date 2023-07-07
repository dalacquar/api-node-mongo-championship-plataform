const router = require("express").Router()

const userRouter = require("./users")
const teamRouter = require("./teams")
const gameRouter = require("./games")

router.use("/", userRouter)
router.use("/", teamRouter)
router.use("/", gameRouter)


module.exports = router