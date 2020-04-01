const http = require('http');

const server = http.createServer((req, res) => {
    const resp =  [ ]

    resp['/'] = '<h1>Home</h1>'
    resp['/contato'] = '<h1>Contato</h1>'
    resp['sem URL'] = '<h1>URL sem resposta definida</h1>'

    res.end(resp[req.url] || resp['sem URL'])
})

server.listen(3001, 'localhost', () =>{
    console.log("Servidor de pé em: http://localhost:3001 ")
    console.log("Para desligar o servidor utilize os comandos ctrl + c")
})