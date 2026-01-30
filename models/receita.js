const mongoose = require("mongoose");

const { Schema } = mongoose;

const receitaSchema = new Schema({
    nome_receita:{
        type:String,   //nome da receita
        required: true, 
        trim: true
    },
    apresentacao:{
        type:String,   //apresentação da receita
        required:true,
        trim: true,
        maxlength:100 // maximo de caracteres para a apresentação
    },
    tempo_preparo:{
        type: [{
            horas_receita: {
                type: Number, 
                required: false
                }, 
            minutos: {
                type: Number,
                required: false
            }
        }],
        //  required:true
    },

    ingredientes:{
        type:[{
            descricao:{
                type: String,       //descrição do ingrediente
                required: true,
                trim: true
            }
        }],
    },

    modo_de_preparo:{
        type: [{
            passo:{
                type: String,         //passos para preparar a receita
                required: true, 
                trim: true
            }
        }] ,
         required: true
    },
    

    categoria:{
        type: String,
        required: true, 
        trim: true
    },
},
    {timestamps: true}
);

const Receita = mongoose.model("Receita", receitaSchema);

module.exports = {
    Receita, 
    receitaSchema, 
};
