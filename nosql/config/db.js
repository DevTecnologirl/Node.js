// O arquivo config/db.js será responsável por configurar e exportar a conexão com o banco de dados. Veja seu código no quadro abaixo:
const mongoose = require("mongoose");
const connectDB = async () => {
        try {
          await mongoose.connect("mongodb://localhost:27017/exemplo_nosql");
          console.log("Conectado ao MongoDB com sucesso!");
        } catch (error) {
          console.error("Erro ao conectar ao MongoDB:", error);
          process.exit(1); // Finaliza a aplicação em caso de falha na conexão
        }
};
module.exports = connectDB;