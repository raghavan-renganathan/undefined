const sass = require('node-sass');
const fs = require('fs');
const path = require('path');
const log = require('../../utils/logger');
const configFile = path.resolve(__dirname, '../scss-parser.config.json').toString();

/**
 * This function reccursively convert all the scss files staring from the given directory.
 *
 * @param pathName {object} The staring directory name
 */
function parseScss(pathName) {
    
    // Check if the path exists
    if (!fs.existsSync(pathName)) {
        log.verbose(`Directory ${pathName} does not exist!`);
        return;
    }

    const files = fs.readdirSync(pathName);

    files.forEach((file) => {
        const filename = path.join(pathName, file);
        const stat = fs.lstatSync(filename);

        // If the pathName is a directory, call this function recursively with its children
        if (stat.isDirectory()) {
            parseScss(filename);
        } else {
            if (filename.indexOf('.scss') !== -1) {
                // Creating the filename for css file from the existing scss file
                const css = filename.replace('.scss', '.css');

                // Create the css file if it does not already exist.
                if (!fs.existsSync(css)) {
                    fs.openSync(css, 'w');
                }

                log.info(filename, ' > ', css);

                // Generating CSS from SCSS file
                sass.render({
                    file: filename,
                    outputStyle: 'compressed'
                }, (err, output) => {
                    if (err) {
                        log.error('Error converting SCSS file: ', filename, ' - ', err.message);
                        return;
                    }

                    // Write the content to the file
                    fs.writeFile(css, output.css.toString(), (err) => {
                        if (err) {
                            log.error('Error writing to CSS file: ', css, ' - ', err.message);
                        }
                    });
                });
            }
        }


    });
}

/**
 * This function takes in a stringified JSON into JSON Object which can be consumed
 *
 * @param err {object} The error objected created when the file cannot be read and null otherwise.
 * @param data {string} The stringified JSON object
 */
function parseJSON(err, data) {
    if (err) {
        log.error('Cannot read the config file: ', err.message);
        return;
    }
    try {
        const JSONData = JSON.parse(data);
        const source = path.resolve(process.cwd(), JSONData.directories.source);
        log.info('Source directory is - ', source);
        parseScss(source);

    } catch (e) {
        log.error('Error parsing the JSON: ', e.message);
    }
}

fs.readFile(configFile, 'utf-8', parseJSON);