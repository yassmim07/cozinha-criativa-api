const router =require("express").Router();

const receitaController = require("../controllers/receitaController")

router
    .route("/receitas")
    .post((req, res) => receitaController.create(req,res));

router
    .route("/receitas")
    .get((req, res) => receitaController.getAll(req,res));
    
router
    .route("/receitas/:id")
    .get((req, res) => receitaController.get(req,res));
    
router
    .route("/receitas/:id")
    .delete((req, res) => receitaController.delete(req,res));

router
    .route("/receitas/:id")
    .put((req, res) => receitaController.update(req,res));

module.exports = router;