var assert = require("assert");
var ping = require("net-ping");
var session = ping.createSession ();

var target = "ip.address.here";


session.pingHost (target, function (error, target) {
    if (error)
        console.log (target + ": " + error.toString ());
    else
        console.log (target + ": Alive");
});
