const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
    name:{
        type: String,  // tipo de dado que vai ser armazenado no banco (String)
        required: true   // campo obrigatório
    },
    email:{
        type: String,  // tipo de dado que vai ser armazenado no banco (String)
        unique: true,   // valor único na tabela
        lowercase: true,   // transformar em minúsculo
        trim: true,   // remove espaços antes e depois do texto
        match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*\.(\w{2,3})+$/], // expressão regular para verificação
        required: true // campo obrigatorio
    },

    senha:{
        type: String,  // tipo de dado que vai ser armazenado no banco (String)
        select: false,   // não mostrar a senha quando for retornada da consulta
        required: true   // campo obrigatório
    },

    telefone:{
        type: String,  // tipo de dado que vai ser armazenado no banco (String)
        maxlength:15,   // limite máximo de caracteres
        minlength:10,   // limite mínimo de caracteres
        required: true,   // campo obrigatório
        trim: true   // remove espaços antes e depois do texto
    },

    usuario:{
        type: String,  // tipo de dado que vai ser armazenado no banco (String)
        maxlength:12,   // limite máximo de caracteres
        minlength:6,   // limite mínimo de caracteres
        required: true,   // campo obrigatório
        trim: true   // remove espaços antes e depois do texto
    },
    sobre:{
        type: String,  // tipo de dado que vai ser armazenado no banco (String)
        maxlength:500,   // limite máximo de caracteres
        required: false,   // campo opcional
        trim: true   // remove espaços antes e depois do texto
    },
    
 }, 
    {timestamps: true}
);

const User = mongoose.model("User", userSchema);

module.exports = {
    User,
    userSchema,
};
