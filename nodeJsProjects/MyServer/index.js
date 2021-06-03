const http = require('http');

const server = http.createServer((req, res) => {

    const url = req.url;

    if (url === '/') {
        res.writeHead(200, { 'context-type': 'text/html' });
        res.write("<h2>INDEX SAYFASI</h2>");
    }

    else if (url === '/hakkimda') {
        res.writeHead(200, { 'context-type': 'text/html' });
        res.write('<h2>HAKKIMDA SAYFASINA HOSGELDINIZ</h2>');
    }

    else if (url === '/iletisim') {
        res.writeHead(200, { 'context-type': 'text/html' });
        res.write('<h2>ILETISIM SAYFASINA HOSGELDINIZ</h2>');
    }

    else {
        res.writeHead(404, { 'context-type': 'text/html' });
        res.write('<h2>SAYFA BULUNAMADI</h2>');
    }

    res.end();
    
});

const port = 5000;

server.listen(port, () => {
    console.log(`Sunucu Port ${port} de başlatıldı.`)
});