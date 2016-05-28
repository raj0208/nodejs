var events = require("events");
var util = require("util");
var fs = require("fs");
var emitter = new events.EventEmitter();
var EventEmitter = events.EventEmitter;

// var username = "colin";
// var password = "password";
// // an event listener
// emitter.on("userAdded", function(username, password) {
// console.log("Added user Rajesh " + username);
// });
// // add the user
// // then emit an event
// emitter.emit("userAdded", username, password);

// console.log("======================================")
// console.log("======  One time event listeners ======")
// console.log("======================================")

// emitter.on("oneUpdate", function() {
//     console.log("Update received once");
// });

// emitter.emit("oneUpdate");

// console.log("========================================");
// console.log("======  newListener ======");

// emitter.on("newListener", function(eventName, listener) {
//     console.log(" Added listener for " + eventName + " events");
// });

// emitter.setMaxListeners(1);

// console.log("========================================");
// console.log("======  Inspecting event listeners ======");

// emitter.on("onEvent", function() {});
// emitter.on("onEvent", function() {});
// console.log(EventEmitter.listenerCount(emitter, "onEvent"));

// emitter.on("testingListenerCount", function() {
//     console.log("In test method1");
// });

// console.log("========= Removing all listeners ======");
// emitter.removeAllListeners();
// console.log(EventEmitter.listenerCount(emitter, "onEvent"));

// emitter.on("testingListenerCount", function() {
//     console.log("In test method2");
// });

// emitter.listeners("testingListenerCount").forEach(function(handler) {
//     handler();
// });


// console.log("========================================");
// console.log("======  Inheriting event emitters ======");

// function UserEventEmitter() {
//     EventEmitter.call(this);
    
//     this.addUser = function(userName, password) {
//         this.emit("userAdded", userName, password);
//     };    
// };
// util.inherits(UserEventEmitter, EventEmitter);


// var user = new UserEventEmitter();
// var userName = "rajesh";
// var password = "testing";

// user.on("userAdded", function(id, pwd) {
//     console.log("Added user '" + id + "' with password '" + pwd + "'");
// });

// user.addUser(userName, password);
// console.log(user instanceof MyEventEmitter);

// console.log("========================================");
// console.log("======  Using Events to avoid Callback Hell ======\n");

// function FileReader(fileName) {
//     var _self = this;
    
//     EventEmitter.call(_self);
    
//     _self.on("stats", function() {
//         fs.stat(fileName, function(error, stats) {
//             if (!error && stats.isFile()) {
//                 _self.emit("read");                
//             }
//         });
//     });
    
//     _self.on("read", function() {
//         fs.readFile(fileName, "utf8", function(error,data) {
//             if (!error && data) {
//                 console.log(data);
//             }
//         });
//     });
    
//     fs.exists(fileName, function(exists) {
//         if (exists) {
//             _self.emit("stats");
//         }
//         else {
//             console.log("File '" + fileName + "' is not available.");    
//         }
//     });
// };

// util.inherits(FileReader, EventEmitter);

// var reader = new FileReader("d:\\test.txt");

// console.log("========================================");
// console.log("======  Using Events to avoid Callback Hell ======\n");

// console.log("======  setInterval");
// var intervalId = setInterval(function(foo, bar) {
// console.log(foo + " " + bar);
// }, 1000, "foo", "bar");

// console.log("======  setTimeout");
// setTimeout(function(intervalId) {
//     console.log("Inside setTimeout");
//     clearInterval(intervalId);
// }, 3000);

// intervalId.unref();

// console.log("========== setImmediate ");
// setImmediate(function() {
//     console.log("In immediate function");
// });

// console.log("========================================");
// console.log("======  Using process.nextTick ======\n");

// function getCallback(f, b) {
//     return function cb() {
//         console.log(f + " " + b);
//     };
// };

// process.nextTick(getCallback("rajesh", "sharma"));

console.log("======  Asynchronous callback functions ======\n");

function add(x, y, cb) {
    process.nextTick( function() {
        cb(x + y);
    });
};

add(2, 3, console.log);
console.log("The sum is : ");    
