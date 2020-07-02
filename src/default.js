const { readFile } = require("./file/read");
// loop through the html
// get all of the attached templates
// find those templates in template directory
// replace template <Button /> with actual templates
module.exports = async function (req, res) {
    const html = await readFile(`${__dirname}/template/home.html`);
    res.writeHead(200, {
        "Content-Type": "text/html",
    });

    res.end(`${html}\n`);
};
