import http from 'http';

const port = 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/test') {
        res.writeHead(200, { 'Contente-Type': 'text/html' });
        res.end('<h1>Test Page</h1>');
    }
    if (req.url === '/users') {
        const users = [{
            name: 'Gustavo',
            email: 'example@email.com',
        },
        {
            name: 'Maria',
            email: 'example2@email.com'
        }
        ]
        res.writeHead(200, { 'Contente-Type': 'application/json' });
        res.end(JSON.stringify(users));
    }
})

server.listen(port, () => console.log(`Server running at http://localhost:${port}/`));