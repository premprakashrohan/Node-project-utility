import * as http from 'http';

http.createServer((request,response) => {
    response.end('Hellofrom Node.js Typescript');
}).listen(2000);