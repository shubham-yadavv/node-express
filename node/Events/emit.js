const EventEmitter = require('events');

const event = new EventEmitter();

event.on("called", function call(){
    console.log(" sup bruhhh!!!")
})

event.emit("called")

var events = require('events');
var eventEmitter = new events.EventEmitter();


var myEventHandler = function () {
  console.log('I hear a scream!');
}

var shubh = function(){
    console.log('sup this is shubh')
}

eventEmitter.on('scream', myEventHandler);
eventEmitter.on('scream', shubh);



eventEmitter.emit('scream');
