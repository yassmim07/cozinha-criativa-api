const mongoose = require("mongoose")

async function main() {

    try{

        await mongoose.connect(
            'mongodb+srv://yasmimca967:culinaria@api.fm525cb.mongodb.net/?retryWrites=true&w=majority'
        );

        console.log("Conectado ao banco!");

    } catch (error) {
        console.log(`Erro: ${error}`); 
    }

}

module.exports = main;