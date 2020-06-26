class Router {
    constructor() {
        this._routes = [];
        this._root = "/";
    }

    /**
     * Add routes to application
     * define handlers for each route
     * @param {*} path
     * @param {*} handler
     */
    append(path, handler) {
        if (typeof path === "function") {
            handler = path;
            path = "";
        }
        this._routes.push({
            path,
            handler,
        });
    }

    /**
     *
     * @param {String} reqUrl url path
     * @param {Object} req request object
     * @param {Object} res response object
     */
    check(reqUrl, req, res) {
        console.log("req Url", reqUrl);
        const urlFragment = reqUrl.replace(/^\//, "");
        // Get request, loop through all available routes, find corresponding route in array, run handler with request and response object
        for (let route of this._routes) {
            const strippedPath = route.path.replace(/^\//, "");
            if (urlFragment === strippedPath) {
                route.handler.apply({}, [req, res]);
            }
        }
        return false;
    }
}

module.exports = new Router();
