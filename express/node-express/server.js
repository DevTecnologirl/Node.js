// Middleware para verificar acesso ao perfil
const checkAccess = (req, res, next) => {
        const authorized = true; // Altere para `false` para simular um usuário não autorizado
        if (authorized) {
          next(); // Usuário autorizado, passa para o próximo manipulador
        } else {
          res.status(403).json({ message: "Acesso ao perfil negado" }); // Resposta em JSON para não autorizado
        }
};
// Rota /perfil com middleware específico
app.get("/perfil", checkAccess, (req, res) => {
        res.json({ message: "Bem-vindo ao seu perfil!" }); // Resposta em JSON para autorizado
});
