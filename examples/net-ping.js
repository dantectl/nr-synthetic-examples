var assert = require("assert");
var ping = require("net-ping");
var session = ping.createSession ();

// this nodejs module only works with ip addresses. enter the ip for your host in the target variable below
var target = "ip.address.here";


session.pingHost (target, function (error, target) {
    if (error)
        console.log (target + ": " + error.toString ());
    else
        console.log (target + ": Alive");
});
