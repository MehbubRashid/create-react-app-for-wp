#!/usr/bin/env node

var download = require('download-github-repo');
var npm = require('npm');

console.log('\x1b[36m%s\x1b[0m', '========================================');
console.log('\x1b[32m%s\x1b[0m', '|                                      |');
console.log('\x1b[32m%s\x1b[0m', '|       create-react-app-for-wp        |');
console.log('\x1b[32m%s\x1b[0m', '|        Author: Mehbub Rashid         |');
console.log('\x1b[32m%s\x1b[0m', '|                                      |');
console.log('\x1b[36m%s\x1b[0m', '========================================');


console.log('\x1b[36m%s\x1b[0m', 'Downloading boilerplate...');

// Download to the current directory
download('MehbubRashid/create-react-app-for-wp/source/', '.', function () {
    console.log('\x1b[32m%s\x1b[0m', 'Download complete.');

    console.log('\x1b[36m%s\x1b[0m', 'Installing npm packages...');
    npm.load(async function (err) {
        // handle errors

        // run npm install
        var npm_install = async () => {
            return new Promise((resolve, reject) => {
                npm.commands.install([], function (er, data) {
                    // log errors or data
                    if (data) {
                        resolve(data);
                    }
                });
            });
        }
        
        var data = await npm_install();

        npm.on('log', function (message) {
            // log installation progress
            console.log(message);
        });
        console.log('\x1b[33m%s\x1b[0m', 'Done! Start writing your components in src/components/App.js                                   ');
    });
});

