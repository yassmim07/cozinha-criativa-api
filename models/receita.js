const mongoose = require("mongoose");

const { Schema } = mongoose;

const receitaSchema = new Schema({
    nome_receita:{
        type:String,   //nome da receita
        required: true
    },
    apresentacao:{
        type:String,   //apresentação da receita
        required:false,
        maxlength:100 // maximo de caracteres para a apresentação
    },
    tempo_preparo:{
        type: [{
            horas_receita: {
                type: Number, 
                required: true
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
            quantidade:{
                type: Number,     //quantidade do ingrediente
                required: false
                },
            unidade:{
                type: String,      //unidade do ingrediente
                required: false
                },
            descricao:{
                type: String,       //descrição do ingrediente
                required: true
                }
        }],
    },

    modo_de_preparo:{
        type: [{
            passo:{
                type: String,         //passos para preparar a receita
                required: true
            }
        }] ,
         required: true
    },
    
    imagem:{
        type: String,  
        required: false
    },

    categoria:{
        type: String,
        required: true,
        enum: ['Refeição', 'Doce / Sobremesa', 'Bebida', 'Salgados', 'Lanches']
    },
},
    {timestamps: true}
);

const Receita = mongoose.model("Receita", receitaSchema);

module.exports = {
    Receita, 
    receitaSchema, 
};
