const fs = require("fs");
// Escrever dados em um arquivo
fs.writeFile("dados.txt", "Olá, Node.js!", (err) => {
      if (err) {
        console.error("Erro ao escrever o arquivo:", err);
        return;
      }
      console.log("Arquivo salvo com sucesso!");
});
    
// Ler dados de um arquivo
fs.readFile("dados.txt", "utf-8", (err, data) => {
      if (err) {
        console.error("Erro ao ler o arquivo:", err);
        return;
      }
      console.log("Conteúdo do arquivo:", data);
});
