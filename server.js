const jsonServer = require('json-server');
const aipServer = jsonServer.create();
const $db = require('./db');    
const $routeHandler = require('./routeHandler'); 
const middlewares = jsonServer.defaults();

aipServer.use(jsonServer.rewriter($routeHandler));
const apiRouter = jsonServer.router($db);

aipServer.use(middlewares);
aipServer.use((req, res, next) => {
    if (req.method === 'POST') {
        req.method = 'GET';
    }
    next()
})

// aipServer.use(jsonServer.bodyParser);

aipServer.use(apiRouter);
aipServer.listen(5000, () => {
  console.log('JSON Server is running');
})