const router = require("express").Router()


// Receitas router
const receitaRouter = require('./receitas')

router.use("/", receitaRouter)

module.exports = router;




