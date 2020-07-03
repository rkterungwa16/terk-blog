const path = require("path");
const { readFile } = require("../file/read");
const contentType = require("./mimetypes");
const files = {};

const serve = (file, res) => {
    // res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200, { "Content-Type": contentType(file.ext.toLowerCase()) });
    res.end(file.content);
};

const sendError = (message, code, res) => {
    res.writeHead(code || 404, { "Content-Type": "text/html" });
    res.end(message);
};

module.exports = async function (req, res) {
    const filePath = path.join(__dirname, "..", req.url);
    if (files[filePath]) {
        serve(files[filePath], res);
    } else {
        try {
            const fileContent = await readFile(filePath);
            files[filePath] = {
                ext: filePath.split(".").pop(),
                content: fileContent,
            };
            serve(files[filePath], res);
        } catch (e) {
            sendError(`Error reading ${filePath}`, 404, res);
        }
    }
};
