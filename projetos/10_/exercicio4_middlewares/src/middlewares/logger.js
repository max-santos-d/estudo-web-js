const loggerMiddleware = (req, res, next) => {
    console.log('');
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    console.log('');
    next();
};

module.exports = loggerMiddleware;
