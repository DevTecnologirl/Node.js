// const mongoose = require("mongoose");
// // Função assíncrona para conectar ao MongoDB
// const conectarMongoDB = async () => {
//       try {
//         await mongoose.connect("mongodb://localhost:27017/exemplo_db");
//         console.log("Conectado ao MongoDB com sucesso!");
//       } catch (err) {
//         console.error("Erro ao conectar ao MongoDB:", err);
//         process.exit(1); // Encerra o processo em caso de falha
//       }
// };
    
// // Inicia a conexão
// conectarMongoDB();
    
const express = require("express");
const connectDB = require("./config/db");
const usuarioRoutes = require("./routes/usuarioRoutes");
const app = express();
const PORT = 3000;
    
// Conectar ao MongoDB
connectDB();
    
// Middleware para interpretação de JSON
app.use(express.json());
    
// Rotas
app.use("/usuarios", usuarioRoutes);
    
// Iniciar o servidor
app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
});
