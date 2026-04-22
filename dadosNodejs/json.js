const dados = {
    nome: "Maria",
    idade: 30,
    profissao: "Engenheira"
};
  
// Converter objeto JavaScript para JSON
const jsonString = JSON.stringify(dados);
console.log('String JSON:', jsonString);
  
// Converter string JSON para objeto JavaScript
const jsonObject = JSON.parse(jsonString);
console.log('Objeto JavaScript:', jsonObject);
