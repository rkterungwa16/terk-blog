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

        return this;
    }

    /**
     *
     * @param {String} reqUrl url path
     * @param {Object} req request object
     * @param {Object} res response object
     */
    check(reqUrl, req, res) {
        const urlFragment = reqUrl.replace(/^\//, "");
        for (let route of this._routes) {
            const strippedPath = route.path.replace(/^\//, "");
            const hasRegisteredPath = urlFragment.search(strippedPath);
            if (hasRegisteredPath > -1) {
                route.handler.apply({}, [req, res]);
            }
        }
        return false;
    }
}

module.exports = new Router();
