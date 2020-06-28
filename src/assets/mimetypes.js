const mimeTypes = [
    {
        ext: "css",
        contentType: "text/css"
    },
    {
        ext: "html",
        contentType: "text/html"
    },
    {
        ext: "js",
        contentType: "application/javascript"
    },
    {
        ext: "ico",
        contentType: "image/ico"
    },
    {
        ext: "json",
        contentType: "application/json"
    },
    {
        ext: "jgp",
        contentType: "image/jpeg"
    },
    {
        ext: "jpeg",
        contentType: "image/jpeg"
    },
    {
        ext: "png",
        contentType: "image/png"
    }
];
/**
 *
 * @param {String} ext file type extension
 * @returns {String} contentType type corresponding to the file type
 */
const contentType = (ext) => {
    const hasFileType = mimeTypes.find((type) => {
        return type.ext === ext;
    });
    if (hasFileType) {
        return hasFileType.contentType;
    }
    return "text/plain";
}

module.exports = contentType;
