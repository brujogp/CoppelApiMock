const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('getCartCouponDiscoun.json');
const middlewares = jsonServer.defaults();
const port = proccess.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(port);
