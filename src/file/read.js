const fs = require("fs");

exports.readFile = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, "utf8", (err, fileContent) => {
            if (!err && fileContent) {
                return resolve(fileContent);
            }
            return reject(err);
        });
    });
};
