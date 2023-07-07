const mongoose = require("mongoose");
require('dotenv').config()

async function main (){
    try {
        mongoose.set("strictQuery", true);
        await mongoose.connect(process.env.CONNECTION);
        console.log(`Conexão com banco de dados estabelecida com sucesso!`);
    } catch (error) {
        console.log(`Erro: ${error}`);
    }
}

module.exports = main;