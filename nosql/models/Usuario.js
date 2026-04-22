// O arquivo models/Usuario.js define o esquema do Mongoose para a coleção usuario. Veja seu código no quadro abaixo:
const mongoose = require("mongoose");
const usuarioSchema = new mongoose.Schema({
        nome: {
          type: String,
          required: true,
          trim: true,
        },
        idade: {
          type: Number,
          required: true,
          min: 0,
        },
        email: {
          type: String,
          required: true,
          unique: true,
          match: /.+\@.+\..+/,
        },
 });
      
 module.exports = mongoose.model("Usuario", usuarioSchema);
      
