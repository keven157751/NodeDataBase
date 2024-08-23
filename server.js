import { createServer, request } from 'node:http'


const server = createServer((request, response ) => {
    response.write('oi');
})

server.on('request', (request, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      data: 'initial value',
    }));
  });

const teste = request(() => {
  
})

server.listen(8000)
