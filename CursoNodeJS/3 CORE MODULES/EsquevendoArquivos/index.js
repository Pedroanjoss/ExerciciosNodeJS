const http = require('http');
const fs = require('fs');

const port = 3000;

const server = http.createServer((req, res) => {
    const urlInfo = require('url').parse(req.url, true);
    const name = urlInfo.query.name;

    if (!name) { 
        fs.readFile('index.html', function (err, data) {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Erro interno do servidor');
                return;
            }

            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    } else {
        fs.writeFile('arquivo.txt', name, function (err) {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Erro interno do servidor');
                return;
            }

            res.writeHead(302, {
                Location: '/',
            });
            res.end();
        });
    }
});

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
});
