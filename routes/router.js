const router = require("express").Router()

// User router 
const userRouter = require("./users")

router.use("/", userRouter)

// Receitas router
const receitaRouter = require('./receitas')

router.use("/", receitaRouter)

module.exports = router;

