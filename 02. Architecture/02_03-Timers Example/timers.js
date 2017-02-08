console.log("start of program");

// Event driven or ASYNCHRONOUS nature of node.js
setTimeout(function(){
  console.log("3 seconds later");
}, 3*1000);
// Event end

setInterval(function(){
  console.log("every 1 second");
}, 1000);

console.log("end of program");
