const { User: UserModel } = require("../models/user");

const userController = {

    create: async(req,res) => {
        try{

            const user = {
                name: req.body.name,
                email: req.body.email,
                senha: req.body.senha,
                telefone: req.body.telefone,
                usuario: req.body.usuario, 
                sobre: req.body.sobre
            };

            const response = await UserModel.create(user);

            res.status(201).json({response, msg: "Usuário criado!"});

        } catch (error) {
            console.log(error);

        }
    },
    getAll: async(req,res) => {
        try {
            const users = await UserModel.find();

            res.json(users);

        } catch (error) {
            console.log(error)
        }
    },
    get: async (req,res) => {
        try{
            // id pega pela url, q fica no params
            const id = req.params.id;
            const user = await UserModel.findById(id);

                if(!user) {
                    res.status(404).json({msg: "Usuário não encontrado"});
                    return;
                }

            res.json(user);
        } catch (error){
            console.log(error)
        }
    },
    delete: async (req, res) => {
        try {
            const id = req.params.id;

            const user = await UserModel.findById(id);

            if(!user) {
                res.status(404).json({msg: "Usuário não encontrado"});
                return;
            }

            const deletedUser = await UserModel.findByIdAndDelete(id);

            res
            .status(200)
            .json({ deletedUser, msg: "Usuario deletado com sucesso"});

        } catch(error){
            console.log(error)
        }
    },
    update: async (req, res) => {
            const id = req.params.id;

            const user = {
                name: req.body.name,
                email: req.body.email,
                senha: req.body.senha,
                telefone: req.body.telefone,
                usuario: req.body.usuario, 
                sobre: req.body.sobre
            };

            const updatedUser = await UserModel.findByIdAndUpdate(id, user)
            
            if(!updatedUser) {
                res.status(404).json({msg: "Usuário não encontrado"});
                return;
            }

            res.status(200).json({ user, msg: "Perfil atualizado com sucesso"});


    }

};

module.exports = userController;