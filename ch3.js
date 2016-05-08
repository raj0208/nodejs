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
/*
var fs = require("fs");
var fileName = "readme.md";

fs.exists(fileName, cbFileExists);

function cbFileExists(exists) {
    console.log("cbFileExists");
    if (exists) {
        console.log("File exists.. ");
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
*/
//===== Exception Handling
//===== using process
/*
var fs = require("fs");

fs.readFile("", "utf8", function (error, data) {
    if (error) {
        throw error;
    }
    console.log(data);
});

process.on("uncaughtException", function (error) {
    console.log("the exception is caught " + error);
});
*/

//=====using domain
/*
var fs = require("fs");
var domain = require("domain");
var domain1 = domain.create();

domain1.run(function () {
    fs.readFile("", "utf8", function (error, data) {
        if (error) {
            throw error;
        }
        console.log(data);
        domain1.dispose();
    });

});

domain1.on("error", function (error) {
    console.log("exception caught => ");
});

//===========
var d1 = domain.create();
var d2 = domain.create();
d1.run(function () {
    d2.add(setTimeout(function () {
        throw new Error("test error");
    }, 1));
});
d2.on("error", function (error) {
    console.log("Caught by d2");
});
d1.on("error", function (error) {
    console.log("Caught by d1")
});

// ====== Bind

console.log("bind");
d3 = domain.create();

fs.readFile("", "utf8", d3.bind(function(error, data) {
    if (error) {
        throw error;
    }
    console.log(data);
    domain.dispose();
}));
d3.on("error", function(error) {
    console.log("The exception was caught by d3.bind!")
});

//======= intercept
console.log("intercept");
var d4 = domain.create();
fs.readFile("", "utf8", d4.intercept(function (data) {
    console.log(data);
    d4.dispose();
}));
d4.on("error", function (error) {
    console.log("The exception was caught by d4.intercept!")
});
*/
//=========== async series()
/*
var results = [];
setTimeout(function () {
    console.log("Task 1");
    results[0] = 1;
}, 300);

setTimeout(function () {
    console.log("Task 2");
    results[1] = 2;
}, 200);

setTimeout(function () {
    console.log("Task 3");
    results[2] = 3;
}, 100);
*/
var async = require("async");
async.series([
        function(callback) {
            setTimeout(function() {
                console.log("Task 1");
                callback(null, 1);
            }, 300);
        },
        function (callback) {
            setTimeout(function () {
                console.log("Task 2");
                callback(null, 2);
            }, 200);
        },
        function (callback) {
            setTimeout(function () {
                console.log("Task 3");
                callback(null, 3);
            }, 100);
        }
    ],
    function (error, results) {
        console.log(results);
    }
);

async.parallel({
    one: function (callback) {
        setTimeout(function () {
            console.log("PTask 1");
            callback(null, "P1");
        }, 300);
    },
    two: function (callback) {
        setTimeout(function () {
            console.log("PTask 2");
            callback(null, "P2");
        }, 200);
    },
    three: function (callback) {
        setTimeout(function () {
            console.log("PTask 3");
            callback(null, "P3");
        }, 100);
    }
}, function (error, results) {
    console.log(results);
});