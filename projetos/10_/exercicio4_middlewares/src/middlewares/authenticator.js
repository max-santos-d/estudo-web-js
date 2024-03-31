const authMiddleware = (req, res, next) => {
    // const token = req.headers.authorization;
    // if (!token) {
    //     return res.status(401).send('Token de autenticação ausente');
    // }
    // // Simulação de autenticação
    // if (token !== 'meuTokenSecreto') {
    //     return res.status(403).send('Token de autenticação inválido');
    // }
    console.log('Autenticação de Token!')
    next();
};

module.exports = authMiddleware;
