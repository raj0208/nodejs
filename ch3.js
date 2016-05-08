/*var fs = require("fs");
fs.readFile("readme.md", "utf8", function(error, data) {
 if (error) {
 throw error;
 }
 console.log(data);
});
console.log("Reading file...");
*/
//================================================
/*
var fs = require("fs");
var fileName = "readme.md";
fs.exists(fileName, function (exists) {
    if (exists) {
        fs.stat(fileName, function (error, stats) {
            if (error) {
                throw error;
            }
            if (stats.isFile()) {
                fs.readFile(fileName, "utf8", function (error, data) {
                    if (error) {
                        throw error;
                    }
                    console.log(data);
                });
            }
        });
    }
});
*/
//================================================

var fs = require("fs");
var fileName = "readme.md";

fs.exists(fileName, cbFileExists);

function cbFileExists(exists) {
    console.log("cbFileExists");
    if (exists) {
        console.log("File exists");
        fs.stat(fileName, cbStat);
    }
}

function cbStat(error, stats) {
    console.log("cbStat");
    if (error) {
        throw error;
    }
    if (stats.isFile()) {
        fs.readFile(fileName, "utf8", cbReadFile);
    }
}

function cbReadFile(error, data) {
    console.log("cbReadFile");
    if (error) {
        throw error;
    }
    console.log(data);
}

/*
function cbReadFile(error, data) {
    if (error) {
        throw error;
    }
    console.log(data);
}
function cbStat(error, stats) {
    if (error) {
        throw error;
    }
    if (stats.isFile()) {
        fs.readFile(fileName, "utf8", cbReadFile);
    }
}
function cbExists(exists) {
    if (exists) {
        fs.stat(fileName, cbStat);
    }
}
fs.exists(fileName, cbExists);
*/