const EventEmitter = require('events');

const event = new EventEmitter();

event.on("called", function call(){
    console.log(" sup bruhhh!!!")
})

event.emit("called")

var events = require('events');
var eventEmitter = new events.EventEmitter();


var jarvis = function () {
  console.log('jarvis is screaming!');
}

var shubh = function(){
    console.log('shubh is screaming')
}

eventEmitter.on('scream', jarvis);
eventEmitter.on('scream', shubh);

eventEmitter.emit('scream');




//----------------------------------------------------------------------------------------------------------------------

// const EventEmitter = require('events')

// const customEmitter = new EventEmitter()

// // on and emit methods
// // keep track of the order
// // additional arguments
// // built-in modules utilize it

// customEmitter.on('response', (name, id) => {
//   console.log(`data recieved user ${name} with id:${id}`)
// })

// customEmitter.on('response', () => {
//   console.log('some other logic here')
// })

// customEmitter.emit('response', 'john', 34)

// ----------------------------------------------------------------------------------------------------------------------

// const events = require('events');


// const eventEmitter = new events.EventEmitter();

// eventEmitter.on('response', ()=>{
//   console.log('data received');
// })

// eventEmitter.emit('response');

