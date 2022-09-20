// TODO 1
const { EventEmitter } = require("events");

const birthdayEventListener = (name) => {
  console.log(`Happy birthday ${name}!`);
};

// TODO 2
const event = new EventEmitter();

// TODO 3
event.on("birthday", birthdayEventListener);

// TODO 4
event.emit("birthday",('Ferdy'))