import { createServer } from 'node:http'


const server = createServer(( ) => {
    console.log('Hello World')
})


server.listen(8080)