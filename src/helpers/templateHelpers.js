const { readFile } = require("../file/read");

const templateGlobals = {};

// Get the string content of a template, and use provided data for string interpolation
const getTemplate = async (templateName, data) => {
    const templatesDir = path.join(__dirname, "/../templates/");
    const templateString = await readFile(
        `${templatesDir}${templateName}.html`
    );
    return interpolate(templateString, data);
};

// Add the universal header and footer to a string, and pass provided data object to header and footer for interpolation
const addUniversalTemplates = async (str, data) => {
    const header = await getTemplate("_header", data);
    const footer = await getTemplate("_footer", data);
    return `${header}${str}${footer}`;
};

// Take a given string and data object, and find/replace all the keys within it
const interpolate = (str, data) => {
    // Add the templateGlobals to the data object, prepending their key name with "global."
    for (let keyName in templateGlobals) {
        if (config.templateGlobals.hasOwnProperty(keyName)) {
            data["global." + keyName] = config.templateGlobals[keyName];
        }
    }
    // For each key in the data object, insert its value into the string at the corresponding placeholder
    for (let key in data) {
        if (data.hasOwnProperty(key) && typeof (data[key] == "string")) {
            const replace = data[key];
            const find = "{" + key + "}";
            str = str.replace(find, replace);
        }
    }
    return str;
};
