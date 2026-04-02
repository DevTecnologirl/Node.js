const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
//   res.send('Servidor Express rodando 🚀');
res.json({message: "Olá, Mundo!"});
});

app.get("/produtos",(req, res) => {
  res.json({message:"Listando todos os produtos", produtos: [] }); //exemplo com um array vazio de produtos
});
//ROTA POST para criar um novo produto
app.post("/produtos", (req, res) => {
  const { nome } = req.body;
  res.json({
    message: "Criando um novo produto",
    produto: {id: Date.now(), nome }
  // produto: { id:Date.now(), nome: "Produto Exemplo"}, 
  });
});
//ROTA PUT para atualizar um produto por ID
app.put("/produtos/:id", (req,res) => {
  const { id } = req.params;
  res.json({
    message: "Atualizando o produto",
  produto: { id: id, nome: "Produto Atualizado"},
  });
  });
  
  //ROTA DELETE para excluir um produto por ID
  app.delete("/produtos/:id", (req, res) => {
    const { id } = req.params
    res.json({ message: "Excluindo o produto", produtoId: id });
  });
  //Inicia o servidor e faz com que ele escute na porta definida
  app.listen(PORT,() => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  });
