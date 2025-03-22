import EventEmitter from 'events'

// Creating Instances
const customEmitter = new EventEmitter()

// ON : listen/register for an event
// ONCE : listen/register for an event
// emit : emit/call an event

// customEmitter.on('response',(name,id) => {
//     console.log(`User: ${name} Id: ${id}`)
// })
// customEmitter.emit("response","SUJIT",100)
// customEmitter.emit("response","SUMIT",200)

// Output
// User: SUJIT Id: 100
// User: SUMIT Id: 200

customEmitter.once('response',(name,id) => {
    console.log(`User: ${name} Id: ${id}`)
})
customEmitter.emit("response","SUJIT",100)
customEmitter.emit("response","SUMIT",200)

// Output
// User: SUJIT Id: 100