const fs = require('fs');

const html = fs.readFileSync(`${__dirname}/template/page.html`).toString('utf-8');

module.exports = function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    res.end(`${html}\n`);
}