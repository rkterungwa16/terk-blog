const { readFile } = require("./file/read");

module.exports = async function (req, res) {
    const html = await readFile(`${__dirname}/template/page.html`);
    res.writeHead(200, {
        "Content-Type": "text/html",
    });

    res.end(`${html}\n`);
};
