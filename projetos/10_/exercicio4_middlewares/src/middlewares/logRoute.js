const logRouteMiddleware = (req, res, next) => {
    console.log(`Rota acessada: ${req.method} ${req.url}`);
    next();
};

module.exports = logRouteMiddleware;