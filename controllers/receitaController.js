const { Receita: ReceitaModel } = require("../models/receita");

const receitaController = {
    create: async (req, res) => {
        try{
            const {
                nome_receita,
                apresentacao,
                tempo_preparo,
                ingredientes,
                modo_de_preparo,
                categoria
            } = req.body;

            if (
                !nome_receita ||
                !apresentacao ||
                !tempo_preparo.length ||
                !ingredientes.length ||
                !modo_de_preparo.length ||
                !categoria
            ) {
                return res.status(500).json({
                    msg: "Erro ao criar receita."
                })
            } else {
                const receita = {
                    nome_receita, 
                    apresentacao,
                    tempo_preparo,
                    ingredientes,
                    modo_de_preparo,
                    categoria
                };

                const response = await ReceitaModel.create(receita);
                res.status(201).json({response, msg: "Receita criada!"});
            }
            

            

        } catch (error) {
            console.log(error);
            res.status(500).json({
                msg: "Erro ao criar receita."
            });
        }
    },
    getAll: async(req,res) => {
        try {
            const receitas = await ReceitaModel.find();

            res.json(receitas);

        } catch (error) {
            console.log(error)
        }
    },
    get: async (req,res) => {
        try{
            // id pega pela url, q fica no params
            const id = req.params.id;
            const receita = await ReceitaModel.findById(id);

                if(!receita) {
                    res.status(404).json({msg: "Receita não encontrada!"});
                    return;
                }

            res.json(receita);
        } catch (error){
            console.log(error)
        }
    }, 
    delete: async (req, res) => {
        try {
            const id = req.params.id;

            const receita = await ReceitaModel.findById(id);

            if(!receita) {
                res.status(404).json({msg: "Receita não encontrada"});
                return;
            }

            const deletedReceita = await ReceitaModel.findByIdAndDelete(id);

            res
            .status(200)
            .json({ deletedReceita, msg: "Receita deletada com sucesso"});

        } catch(error){
            console.log(error)
        }
    },
    update: async (req, res) => {
        const id = req.params.id;
        try{
            const {
                nome_receita,
                apresentacao,
                tempo_preparo,
                ingredientes,
                modo_de_preparo,
                categoria
            } = req.body;

            if (
                !nome_receita ||
                !apresentacao ||
                !tempo_preparo.length ||
                !ingredientes.length ||
                !modo_de_preparo.length ||
                !categoria
            ) {
                return res.status(500).json({
                    msg: "Erro ao criar receita."
                })

            } else {
                const receita = {
                    nome_receita, 
                    apresentacao,
                    tempo_preparo,
                    ingredientes,
                    modo_de_preparo,
                    categoria
                };
                
                const updatedReceita = await ReceitaModel.findByIdAndUpdate(id, receita)
                if(!updatedReceita) {
                    res.status(404).json({msg: "Receita não encontrada"});
                    return;
                }
                res.status(200).json({ receita, msg: "Receita atualizada com sucesso"})
                
            }
        } catch (error){
            console.log(error);
            res.status(500).json({
                msg: "Erro ao atualizar receita."
            });
        }



    }
};

module.exports = receitaController;