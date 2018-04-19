// const jsonServer = require('json-server');
// const server = jsonServer.create();
// const router = jsonServer.router('./Json-server/db.json');
// const middlewares = jsonServer.defaults();
// const port = process.env.PORT || 3000;

// server.use(middlewares);
// server.use(router);

// server.listen(port);
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./Json-server/db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(3000, () => {
    console.log('JSON Server is running')
})