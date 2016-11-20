(function() {


function EventEmitter() {
 
    this.events = {};
 
}
 
EventEmitter.prototype.on = function(type, fn) {
 
    if(!type || !fn) return;
 
    this.events[type] = this.events[type] || [];
    this.events[type].push(fn);
 
}
 
EventEmitter.prototype.emit = function(type, data) {
 
    var fns = this.events[type];
 
    if(!fns || !fns.length) return;
 
    for(var i = 0; i < fns.length; i++) {
        fns[i](data);
    }
 
};
function Database(url) {
 
    EventEmitter.call(this);
    this.url = url;
 
}
 
Database.prototype = Object.create(EventEmitter.prototype);
Database.prototype.connect = function() {
 
     
    this.emit("connect", this.url);
 
}
 
Database.prototype.disconnect = function() {
 
 
    this.emit("disconnect", this.url);
 
}
 

var ev = new EventEmitter();
 
ev.on("hello", function(message) {
    console.log("Witaj " + message + "!");
});
 
ev.on("hello", function(message) {
    console.log("Siema " + message + ".");
});
 
ev.on("goodbye", function() {
    console.log("Do widzenia!");
});
 
ev.emit("hello", "Marcin");
ev.emit("goodbye");
ev.emit("custom"); 
 
//Połączenie do bazy danych
var db = new Database("db://localhost:3000"); 
db.on("connect", function(url) {
    console.log("Połączenie do " + url + " nawiązane");
});
 
db.on("disconnect", function(url) {
    console.log("Połączenie " + url + " zakończone.");
});
 
db.connect();
 

setTimeout(function() {
    db.disconnect();
}, 10000);


})();