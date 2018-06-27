import * as restify from 'restify';
import * as corsMiddleware from 'restify-cors-middleware';
const server: restify.Server = restify.createServer();
const port: number = 3000;
const options: corsMiddleware.Options = {
    origins: ['*'],
    allowHeaders: [],
    exposeHeaders: []
}
const cors: corsMiddleware.CorsMiddleware = corsMiddleware(options);
server.use(cors.preflight);
server.use(cors.actual);

interface IProduct {
    name: string,
    price: number,
    desc: string,
    id: number;
}
const products: IProduct[] = [
    { name: 'Shoe', price: 22.50, desc: 'This is great shoe!', id: 1 },
    { name: 'Pen', price: 3.50, desc: 'This is great pen!', id: 2},
    { name: 'Pant', price: 12.50, desc: 'This is beutiful pant!', id: 3 },
    { name: 'Shirt', price: 32.50, desc: 'This is great shirt!', id: 4 },
    { name: 'Computer', price: 222.50, desc: 'This comuter have max speed!', id: 5 },
    { name: 'Monitor', price: 50.50, desc: 'This is great Monitor!', id: 6 }
];
server.get('/api/products', (request: restify.Request, responce: restify.Response) => {
    responce.json(products);
});

server.get('/api/products/:id', (request: restify.Request, responce: restify.Response) => {
    const id = Number(request.params.id);
    const product = products.filter(product => product.id === id);
    responce.json(product);
});

server.use(restify.plugins.bodyParser());


server.post('/api/products', (request: restify.Request, responce: restify.Response) => {
    const newProduct: IProduct = request.body;
    products.push(newProduct);
    responce.json(products);
});


server.listen(port, () => console.info(`Server is running on ${port}`));