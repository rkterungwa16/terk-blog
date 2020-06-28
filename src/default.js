const fs = require('fs');

const readFile = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, "utf8", (err, html) => {
            if (!err && html) {
                return resolve(html);
            }
            return reject(err);
        });
    });
};

module.exports = async function(req, res) {
    const html = await readFile(`${__dirname}/template/page.html`)
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    res.end(`${html}\n`);
}
